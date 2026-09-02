import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://veinbeeld.nl'

interface PageMetaOptions {
  title: string
  description?: string
  /** e.g. "noindex, nofollow" for a page that shouldn't appear in search results (the 404 page). */
  robots?: string
}

/**
 * Swaps one <meta> tag's content attribute for the lifetime of the
 * calling component, restoring (or removing, if this call created it)
 * whatever was there before on unmount.
 */
function useMetaTag(attr: 'name' | 'property', key: string, content: string | undefined) {
  useEffect(() => {
    if (!content) return

    let meta = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
    const createdMeta = !meta
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attr, key)
      document.head.appendChild(meta)
    }
    const previousContent = meta.getAttribute('content')
    meta.setAttribute('content', content)

    return () => {
      if (createdMeta) {
        meta?.remove()
      } else if (previousContent !== null) {
        meta?.setAttribute('content', previousContent)
      }
    }
  }, [attr, key, content])
}

/** Same swap-and-restore pattern as useMetaTag, for <link rel="canonical">. */
function useCanonicalLink(href: string) {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const createdLink = !link
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    const previousHref = link.getAttribute('href')
    link.setAttribute('href', href)

    return () => {
      if (createdLink) {
        link?.remove()
      } else if (previousHref !== null) {
        link?.setAttribute('href', previousHref)
      }
    }
  }, [href])
}

/**
 * Sets document.title, the meta description/robots tags, the canonical
 * link and the matching Open Graph tags for the page this component is
 * mounted on — no routing/SEO library, just direct DOM updates,
 * reverted on unmount so navigating away never leaks stale values onto
 * the next page. The canonical/OG URL is derived from the current
 * route automatically (via useLocation), so it can't drift out of sync
 * with the page it's called from.
 *
 * This only affects visitors and any crawler that executes JavaScript
 * (Google does). A crawler that only reads the static HTML — most
 * social-share link previews — sees index.html's own static site-wide
 * defaults instead; there's no per-page fix for that short of
 * server-side rendering, which is out of scope here.
 */
export function usePageMeta({ title, description, robots }: PageMetaOptions) {
  const { pathname } = useLocation()
  const url = `${SITE_URL}${pathname}`

  useEffect(() => {
    const previousTitle = document.title
    document.title = title
    return () => {
      document.title = previousTitle
    }
  }, [title])

  useMetaTag('name', 'description', description)
  useMetaTag('name', 'robots', robots)
  useCanonicalLink(url)
  useMetaTag('property', 'og:title', title)
  useMetaTag('property', 'og:description', description)
  useMetaTag('property', 'og:url', url)
}

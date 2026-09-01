import { useEffect } from 'react'

interface PageMetaOptions {
  title: string
  description?: string
}

/**
 * Sets document.title and the meta description for the page this
 * component is mounted on — no routing/SEO library, just direct DOM
 * updates, reverted on unmount so navigating away never leaks a stale
 * title/description onto the next page.
 */
export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    if (!description) {
      return () => {
        document.title = previousTitle
      }
    }

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const createdMeta = !meta
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    const previousDescription = meta.getAttribute('content')
    meta.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (createdMeta) {
        meta?.remove()
      } else if (previousDescription !== null) {
        meta?.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}

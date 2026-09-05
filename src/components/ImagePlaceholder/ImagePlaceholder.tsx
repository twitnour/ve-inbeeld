import styles from './ImagePlaceholder.module.css'

export type ImagePlaceholderAspect = 'portrait' | 'square' | 'landscape'

interface ImagePlaceholderProps {
  /**
   * Pass the real photo's URL once photography is available — this is
   * the only change needed to swap the placeholder out. `alt` should
   * already be written as the real image's final alt text.
   */
  src?: string
  alt: string
  aspect?: ImagePlaceholderAspect
  className?: string
}

/**
 * Stands in for a future photograph. With no `src`, it renders a
 * restrained brand-colored surface with a thin ring accent (echoing the
 * logo's line motif) instead of a real image — no "IMAGE PLACEHOLDER"
 * label on the page, just this comment and the `role="img"` + `alt`
 * carrying the same meaning to assistive tech.
 *
 * Once photography exists, render `<ImagePlaceholder src={photo} alt="..." />`
 * and this component swaps straight to a real `<img>` with no other
 * changes required at the call site.
 */
export function ImagePlaceholder({ src, alt, aspect = 'portrait', className }: ImagePlaceholderProps) {
  const classNames = [styles.placeholder, styles[aspect], className].filter(Boolean).join(' ')

  if (src) {
    return <img src={src} alt={alt} className={classNames} />
  }

  return (
    <div className={classNames} role="img" aria-label={alt}>
      <span className="decor decor-ring" aria-hidden="true" />
      <span className="decor decor-line" aria-hidden="true" />
    </div>
  )
}

import styles from './WhiteBgImage.module.css'

interface WhiteBgImageProps {
  src: string
  alt: string
  /** CSS color the image's white background should blend into. Defaults to the shared page background. */
  background?: string
  className?: string
}

/**
 * Renders a photo/illustration whose source file has a flat white
 * background baked in (no alpha channel — e.g. the official Uk & Puk
 * artwork) so it blends into whatever it's placed on instead of
 * showing up as a white box.
 *
 * Uses `mix-blend-mode: multiply` on the <img>, which turns pure-white
 * pixels transparent against whatever's painted behind them. Multiply
 * only ever sees back to the nearest new stacking context though, so
 * this wraps the image in its own isolated group and explicitly
 * repaints `background` there — the wrapper hugs the image exactly (no
 * fixed size), so that repainted color is only ever visible where the
 * image's own white pixels reveal it.
 */
export function WhiteBgImage({ src, alt, background = 'var(--color-background)', className }: WhiteBgImageProps) {
  const classNames = [styles.wrap, className].filter(Boolean).join(' ')

  return (
    <div className={classNames} style={{ backgroundColor: background }}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  )
}

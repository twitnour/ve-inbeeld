import { PlayCircle } from 'lucide-react'
import { ImagePlaceholder } from '../ImagePlaceholder/ImagePlaceholder'
import styles from './VideoVisual.module.css'

/**
 * A placeholder for a future video still/thumbnail from a coaching
 * session — the same swappable ImagePlaceholder used elsewhere, with a
 * small play-icon overlay so it reads as "video" rather than "photo".
 * Once real footage exists, pass `src`/`alt` through as usual; the
 * play icon stays as a purely decorative affordance.
 */
export function VideoVisual({ alt }: { alt: string }) {
  return (
    <div className={styles.wrap}>
      <ImagePlaceholder aspect="landscape" alt={alt} />
      <PlayCircle size={40} aria-hidden="true" className={styles.playIcon} />
    </div>
  )
}

import { PlayCircle } from 'lucide-react'
import { ImagePlaceholder } from '../ImagePlaceholder/ImagePlaceholder'
import styles from './VideoVisual.module.css'

/**
 * A video still/thumbnail from a coaching session — the same
 * swappable ImagePlaceholder used elsewhere, with a small play-icon
 * overlay so it reads as "video" rather than "photo". Pass `src` once
 * real footage/a still exists; the play icon stays as a purely
 * decorative affordance either way.
 */
export function VideoVisual({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className={styles.wrap}>
      <ImagePlaceholder src={src} aspect="landscape" alt={alt} />
      <PlayCircle size={40} aria-hidden="true" className={styles.playIcon} />
    </div>
  )
}

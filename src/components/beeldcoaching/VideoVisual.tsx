import { ImagePlaceholder } from '../ImagePlaceholder/ImagePlaceholder'

/**
 * A photo/still from a coaching session — the same swappable
 * ImagePlaceholder used elsewhere, fixed to a landscape aspect to
 * match this section's layout. Pass `src` once real footage/a still
 * exists.
 */
export function VideoVisual({ src, alt }: { src?: string; alt: string }) {
  return <ImagePlaceholder src={src} aspect="landscape" alt={alt} />
}

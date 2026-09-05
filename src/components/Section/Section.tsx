import type { ElementType, ReactNode } from 'react'
import { PageContainer, type ContainerWidth } from '../PageContainer/PageContainer'
import styles from './Section.module.css'

export type SectionTone = 'default' | 'blush' | 'sand' | 'surface'

interface SectionProps {
  /** Background tone. Vary deliberately — don't alternate every section. */
  tone?: SectionTone
  /** Content width passed through to the inner PageContainer. */
  width?: ContainerWidth
  as?: ElementType
  /** Useful as an in-page anchor/scroll target, e.g. for a hero CTA. */
  id?: string
  className?: string
  children: ReactNode
}

/**
 * A full-width page band with a shared vertical rhythm and one of the
 * brand's background tones. Wraps its children in a PageContainer so
 * content still respects the shared max-width.
 */
export function Section({
  tone = 'default',
  width = 'normal',
  as: Component = 'section',
  id,
  className,
  children,
}: SectionProps) {
  const classNames = [styles.section, styles[tone], className].filter(Boolean).join(' ')

  return (
    <Component id={id} className={classNames}>
      <PageContainer width={width} padded={false}>
        {children}
      </PageContainer>
    </Component>
  )
}

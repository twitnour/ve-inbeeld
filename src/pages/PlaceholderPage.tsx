import type { ReactNode } from 'react'
import { PageContainer } from '../components/PageContainer/PageContainer'

interface PlaceholderPageProps {
  title: string
  children?: ReactNode
}

/**
 * Temporary content for a route until the real page design is built.
 * Every page in this first project phase renders through this component
 * so routing can be verified without designing pages yet.
 */
export function PlaceholderPage({ title, children }: PlaceholderPageProps) {
  return (
    <PageContainer>
      <h1>{title}</h1>
      {children ?? <p>Deze pagina wordt binnenkort verder ingericht.</p>}
    </PageContainer>
  )
}

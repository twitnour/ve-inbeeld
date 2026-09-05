import styles from './InfoHighlights.module.css'

export interface InfoHighlightItem {
  value: string
  label: string
}

interface InfoHighlightsProps {
  heading?: string
  items: InfoHighlightItem[]
  className?: string
}

/**
 * A compact, boxed row of key facts (e.g. "2 bijeenkomsten" / "2,5 uur
 * per bijeenkomst") — a quick scannable summary dropped into an
 * otherwise editorial section. The column count adapts to however many
 * items are passed.
 */
export function InfoHighlights({ heading, items, className }: InfoHighlightsProps) {
  const classNames = [styles.box, className].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      {heading && <h3 className={styles.heading}>{heading}</h3>}
      <div className={styles.stats}>
        {items.map((item) => (
          <div className={styles.stat} key={item.label}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

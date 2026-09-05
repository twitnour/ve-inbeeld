import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'text'
export type ButtonSize = 'sm' | 'md'

interface SharedProps {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Optional icon, e.g. an ArrowRight for a text-link button. */
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  children: ReactNode
}

type AsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }

type AsRouterLink = SharedProps &
  Omit<LinkProps, 'className' | 'children'> & { to: string; href?: undefined }

type AsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined }

export type ButtonProps = AsButton | AsRouterLink | AsAnchor

/**
 * Reusable button/CTA. Renders a <button>, an internal <Link>
 * (when `to` is set) or an external <a> (when `href` is set) with the
 * same three visual variants:
 *
 * - primary   — solid brand fill, for the main call to action
 * - secondary — quieter outlined/light-surface button
 * - text      — inline "Lees meer →" style link button
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  )

  if ('to' in rest && rest.to) {
    const { to, ...linkRest } = rest
    return (
      <Link to={to} className={classNames} {...linkRest}>
        {content}
      </Link>
    )
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest
    return (
      <a href={href} className={classNames} {...anchorRest}>
        {content}
      </a>
    )
  }

  const { type = 'button', ...buttonRest } = rest as AsButton
  return (
    <button type={type} className={classNames} {...buttonRest}>
      {content}
    </button>
  )
}

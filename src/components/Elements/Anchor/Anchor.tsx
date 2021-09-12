import React, { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '../..'

export type AnchorProps = {
  className?: string
  to?: string
  href?: string
}

const AnchorComponent: React.FC<
  AnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({
  className = '',
  to = undefined,
  href = undefined,
  children,
  ...props
}) => {
  let anchor: any = null

  let baseClassName =
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'

  if (to) {
    anchor = (
      <Link className={classNames(className, baseClassName)} to={to} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    anchor = (
      <a
        className={classNames(className, baseClassName)}
        href={href}
        {...props}
      >
        {children}
      </a>
    )
  }
  return anchor
}

export const Anchor = Object.assign(AnchorComponent, {})

export default Anchor

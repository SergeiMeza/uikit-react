import { Link } from 'react-router-dom'
import React, { ButtonHTMLAttributes } from 'react'

import { classNames } from '../../helpers/methods'

export type ButtonProps = {
  className?: string
  title?: string
  size?: ButtonSize
  shape?: ButtonShape
  buttonType?: ButtonType
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

enum ButtonSize {
  small = 'px-2.5 py-1.5 text-xs',
  medium = 'px-3 py-2 text-sm leading-4',
  large = 'px-4 py-2 text-sm',
  xl = 'px-4 py-2 text-base',
  xxl = 'px-6 py-3 text-base',
}

enum ButtonType {
  primary = 'border border-transparent shadow-sm text-white bg-primary-600 hover:bg-primary-700',
  secondary = 'border border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200',
  outline = 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
  transparent = 'text-gray-700',
}

enum ButtonShape {
  default = 'rounded rounded-md',
  round = 'rounded-full',
  circular = 'rounded-full p-2',
}

const focus =
  'focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500'
const defaultFocus =
  ' focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'

export type InlineButtonProps = {
  title?: string
  href?: string
  to?: string
}

const InlineButton: React.FC<InlineButtonProps> = ({
  title = 'start your 14-day free trial',
  href = null,
  to = null,
  children,
}) => {
  let button: any = null
  if (href) {
    button = (
      <a
        href={href}
        className="font-medium text-primary-600 hover:text-primary-500"
      >
        {children ?? title}
      </a>
    )
  } else if (to) {
    button = (
      <Link
        to={to}
        className="font-medium text-primary-600 hover:text-primary-500"
      >
        {children ?? title}
      </Link>
    )
  }
  return button
}

const ButtonComponent: React.FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  className = 'flex justify-center font-medium',
  title,
  size = ButtonSize.large,
  shape = ButtonShape.default,
  buttonType = ButtonType.primary,
  children,
  onClick = () => {
    console.log('item clicked')
  },
  onMouseEnter = () => {
    console.log('mouse entered item')
  },
  onMouseLeave = () => {
    console.log('mouse leaved item')
  },
  ...props
}) => {
  const names =
    buttonType === ButtonType.transparent
      ? [buttonType, focus, className]
      : [
          ...(shape !== ButtonShape.circular
            ? [size, shape, buttonType]
            : [shape, buttonType]),
          defaultFocus,
          className,
        ]
  return (
    <button
      className={classNames(...names)}
      onClick={() => {
        onClick()
      }}
      onMouseEnter={() => {
        onMouseEnter()
      }}
      onMouseLeave={() => {
        onMouseLeave()
      }}
      {...props}
    >
      {title ?? children}
    </button>
  )
}

export const Button = Object.assign(ButtonComponent, {
  size: ButtonSize,
  buttonType: ButtonType,
  shape: ButtonShape,
  focus,
  Inline: InlineButton,
})

export default Button

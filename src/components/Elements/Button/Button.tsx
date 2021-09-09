import React, { ButtonHTMLAttributes } from 'react'
import { PlusIcon as PlusIconSolid } from '@heroicons/react/solid'

import { classNames } from '../../../helpers/methods'

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
  primary = 'border border-transparent shadow-sm text-white bg-indigo-600 hover:bg-indigo-700',
  secondary = 'border border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
  outline = 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
  transparent = 'text-gray-700',
}

enum ButtonShape {
  default = 'rounded rounded-md',
  round = 'rounded-full',
  circular = 'rounded-full p-2',
}

const focus =
  'focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
const defaultFocus =
  ' focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'

const InlineButton: React.FC<any> = ({
  title = 'start your 14-day free trial',
  href = '#',
  children,
}) => (
  <a href={href} className="font-medium text-indigo-600 hover:text-indigo-500">
    {children ?? title}
  </a>
)

const ButtonComponent: React.FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  className = '',
  title,
  size = ButtonSize.medium,
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
  const baseStyle = 'flex justify-center font-medium'

  const names =
    buttonType === ButtonType.transparent
      ? [buttonType, focus, baseStyle, className]
      : [
          ...(shape !== ButtonShape.circular
            ? [size, shape, buttonType]
            : [shape, buttonType]),
          defaultFocus,
          baseStyle,
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

export const Buttons = () => {
  return (
    <div className="my-4 ml-8">
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">Primary buttons</h3>
        <div className="space-x-2">
          <Button size={Button.size.small}>Button</Button>
          <Button size={Button.size.medium}>Button</Button>
          <Button size={Button.size.large}>Button</Button>
          <Button size={Button.size.xl}>Button</Button>
          <Button size={Button.size.xxl}>Button</Button>
        </div>
      </div>

      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">Secondary buttons</h3>
        <div className="space-x-2">
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.small}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.medium}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.large}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.xl}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.xxl}
          >
            Button
          </Button>
        </div>
      </div>
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">White buttons</h3>
        <div className="space-x-2">
          <Button
            buttonType={Button.buttonType.outline}
            size={Button.size.small}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.outline}
            size={Button.size.medium}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.outline}
            size={Button.size.large}
          >
            Button
          </Button>
          <Button buttonType={Button.buttonType.outline} size={Button.size.xl}>
            Button
          </Button>
          <Button buttonType={Button.buttonType.outline} size={Button.size.xxl}>
            Button
          </Button>
        </div>
      </div>
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">Rounded buttons</h3>
        <div className="space-x-2">
          <Button shape={Button.shape.round} size={Button.size.small}>
            Button
          </Button>
          <Button shape={Button.shape.round} size={Button.size.medium}>
            Button
          </Button>
          <Button shape={Button.shape.round} size={Button.size.large}>
            Button
          </Button>
          <Button shape={Button.shape.round} size={Button.size.xl}>
            Button
          </Button>
          <Button shape={Button.shape.round} size={Button.size.xxl}>
            Button
          </Button>
        </div>
      </div>
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">Circular buttons</h3>
        <div className="space-x-2">
          <Button shape={Button.shape.circular}>
            <PlusIconSolid className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button shape={Button.shape.circular}>
            <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button shape={Button.shape.circular}>
            <PlusIconSolid className="h-6 w-6" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.secondary}
          >
            <PlusIconSolid className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.secondary}
          >
            <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.secondary}
          >
            <PlusIconSolid className="h-6 w-6" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.outline}
          >
            <PlusIconSolid className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.outline}
          >
            <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.outline}
          >
            <PlusIconSolid className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Button

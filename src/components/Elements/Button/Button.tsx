import React from 'react'
import { PlusIcon as PlusIconSolid } from '@heroicons/react/solid'

import { classNames } from '../../../helpers/methods'

export type ButtonProps = {
  className?: string
  title?: string
  size?: ButtonSize
  shape?: ButtonShape
  type?: ButtonType
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

const ButtonComponent: React.FC<ButtonProps> = ({
  className = '',
  title,
  size = ButtonSize.medium,
  shape = ButtonShape.default,
  type = ButtonType.primary,
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
}) => {
  const baseStyle = 'inline-flex items-center font-medium'

  const names =
    type === ButtonType.transparent
      ? [type, focus, baseStyle, className]
      : [
          ...(shape !== ButtonShape.circular
            ? [size, shape, type]
            : [shape, type]),
          defaultFocus,
          baseStyle,
          className,
        ]
  return (
    <button
      type="button"
      className={classNames(...names)}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      onMouseEnter={(e) => {
        e.preventDefault()
        onMouseEnter()
      }}
      onMouseLeave={(e) => {
        e.preventDefault()
        onMouseLeave()
      }}
    >
      {title ?? children}
    </button>
  )
}

export const Button = Object.assign(ButtonComponent, {
  size: ButtonSize,
  type: ButtonType,
  shape: ButtonShape,
  focus,
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
          <Button type={Button.type.secondary} size={Button.size.small}>
            Button
          </Button>
          <Button type={Button.type.secondary} size={Button.size.medium}>
            Button
          </Button>
          <Button type={Button.type.secondary} size={Button.size.large}>
            Button
          </Button>
          <Button type={Button.type.secondary} size={Button.size.xl}>
            Button
          </Button>
          <Button type={Button.type.secondary} size={Button.size.xxl}>
            Button
          </Button>
        </div>
      </div>
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">White buttons</h3>
        <div className="space-x-2">
          <Button type={Button.type.outline} size={Button.size.small}>
            Button
          </Button>
          <Button type={Button.type.outline} size={Button.size.medium}>
            Button
          </Button>
          <Button type={Button.type.outline} size={Button.size.large}>
            Button
          </Button>
          <Button type={Button.type.outline} size={Button.size.xl}>
            Button
          </Button>
          <Button type={Button.type.outline} size={Button.size.xxl}>
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
          <Button shape={Button.shape.circular} type={Button.type.secondary}>
            <PlusIconSolid className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button shape={Button.shape.circular} type={Button.type.secondary}>
            <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button shape={Button.shape.circular} type={Button.type.secondary}>
            <PlusIconSolid className="h-6 w-6" aria-hidden="true" />
          </Button>
          <Button shape={Button.shape.circular} type={Button.type.outline}>
            <PlusIconSolid className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button shape={Button.shape.circular} type={Button.type.outline}>
            <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button shape={Button.shape.circular} type={Button.type.outline}>
            <PlusIconSolid className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Button

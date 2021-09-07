import React from 'react'
import { classNames } from '../../../helpers/methods'

export type BadgeProps = {
  title?: string
  size?: BadgeSize
  shape?: BadgeShape
  color?: BadgeColor
  dot?: boolean
  dotColor?: DotColor
  removeButton?: boolean
  removeButtonColor?: RemoveButtonColor
  onRemoveButtonClick?: () => void
}

enum BadgeSize {
  small = 'inline-flex items-center px-1.5 py-0.5 text-xs font-medium',
  large = 'inline-flex items-center px-2 py-0.5 text-sm font-medium',
}

enum BadgeShape {
  rounded = 'rounded-full',
  default = 'rounded',
}

enum BadgeColor {
  gray = 'bg-gray-100 text-gray-800',
  red = 'bg-red-100 text-red-800',
  yellow = 'bg-yellow-100 text-yellow-800',
  green = 'bg-green-100 text-green-800',
  blue = 'bg-blue-100 text-blue-800',
  indigo = 'bg-indigo-100 text-indigo-800',
  purple = 'bg-purple-100 text-purple-800',
  pink = 'bg-pink-100 text-pink-800',
}

enum DotColor {
  gray = 'text-gray-400',
  red = 'text-red-400',
  yellow = 'text-yellow-400',
  green = 'text-green-400',
  blue = 'text-blue-400',
  indigo = 'text-indigo-400',
  purple = 'text-purple-400',
  pink = 'text-pink-400',
}

enum RemoveButtonColor {
  gray = 'text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500',
  red = 'text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500',
  yellow = 'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500',
  green = 'text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500',
  blue = 'text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-500',
  indigo = 'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500',
  purple = 'text-purple-400 hover:bg-purple-200 hover:text-purple-500 focus:bg-purple-500',
  pink = 'text-pink-400 hover:bg-pink-200 hover:text-pink-500 focus:bg-pink-500',
}

type BadgeRemoveButtonProps = {
  color: RemoveButtonColor
  onClick?: () => void
}

const BadgeRemoveButtonComponent: React.FC<BadgeRemoveButtonProps> = ({
  color = RemoveButtonColor.green,
  onClick = () => {
    console.log('item was clicked')
  },
}) => (
  <button
    type="button"
    className={classNames(
      color,
      'flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none focus:text-white',
    )}
    onClick={(e) => {
      e.preventDefault()
      onClick()
    }}
  >
    <span className="sr-only">Remove small option</span>
    <svg
      className="h-2 w-2"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 8 8"
    >
      <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
    </svg>
  </button>
)

const BadgeRemoveButton = Object.assign(BadgeRemoveButtonComponent, {
  color: RemoveButtonColor,
})

const BadgeComponent: React.FC<BadgeProps> = ({
  title = 'Badge',
  size = BadgeSize.large,
  shape = BadgeShape.rounded,
  color = BadgeColor.green,
  dot = false,
  dotColor = DotColor.green,
  removeButton = false,
  removeButtonColor = RemoveButtonColor.green,
  onRemoveButtonClick = () => {
    console.log('remove item')
  },
  children,
}) => {
  return (
    <span className={classNames(size, shape, color)}>
      {dot && (
        <svg
          className={classNames('-ml-0.5 mr-1.5 h-2 w-2', dotColor)}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
      )}
      {children ?? title}
      {removeButton && (
        <BadgeRemoveButton
          color={removeButtonColor}
          onClick={onRemoveButtonClick}
        />
      )}
    </span>
  )
}

export const Badge = Object.assign(BadgeComponent, {
  size: BadgeSize,
  shape: BadgeShape,
  color: BadgeColor,
  dotColot: DotColor,
  RemoveButton: BadgeRemoveButton,
})

export default Badge

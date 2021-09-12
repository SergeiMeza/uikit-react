import React from 'react'
import { classNames } from '../../helpers/methods'

export type AvatarProps = {
  shape?: AvatarShape
  size?: AvatarSize
  notificationBadge?: boolean
  notificationBadgeSize?: NotificationBadgeSize
  notificationBadgeColor?: NotificationBadgeColor
  notificationBadgePosition?: NotificationBadgePosition
  src?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

enum AvatarShape {
  default = 'rounded-md',
  rounded = 'rounded-full',
}

enum AvatarSize {
  small = 'h-6 w-6',
  medium = 'h-8 w-8',
  large = 'h-10 w-10',
  xl = 'h-12 w-12',
  xxl = 'h-14 w-14',
  xxxl = 'h-16 w-16',
}

enum NotificationBadgeSize {
  small = 'h-1.5 w-1.5',
  medium = 'h-2 w-2',
  large = 'h-2.5 w-2.5',
  xl = 'h-3 w-3',
  xxl = 'h-3.5 w-3.5',
  xxxl = 'h-4 w-4',
}

enum NotificationBadgeColor {
  gray = 'bg-gray-300',
  red = 'bg-red-300',
  yellow = 'bg-yellow-300',
  green = 'bg-green-300',
  blue = 'bg-blue-300',
  indigo = 'bg-indigo-300',
  purple = 'bg-purple-300',
  pink = 'bg-pink-300',
  primary = 'bg-primary-300',
}

enum NotificationBadgePosition {
  top = 'top-0 right-0',
  bottom = 'bottom-0 right-0',
}

const AvatarComponent: React.FC<AvatarProps> = ({
  size = AvatarSize.medium,
  shape = AvatarShape.rounded,
  notificationBadge = false,
  notificationBadgeSize = NotificationBadgeSize.medium,
  notificationBadgeColor = NotificationBadgeColor.primary,
  notificationBadgePosition = NotificationBadgePosition.top,
  src,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) => {
  let topTransform = 'transform -translate-y-1/2 translate-x-1/2'
  let bottomTransform = 'transform translate-y-1/2 translate-x-1/2'

  return (
    <span
      className="inline-block relative"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {src ? (
        <img className={classNames(size, shape)} src={src} alt="" />
      ) : (
        <span
          className={classNames(
            size,
            shape,
            'inline-block overflow-hidden bg-gray-100',
          )}
        >
          <svg
            className="h-full w-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
      )}

      {notificationBadge && (
        <span
          className={classNames(
            notificationBadgeSize,
            notificationBadgeColor,
            notificationBadgePosition,
            ...(shape === AvatarShape.rounded
              ? []
              : notificationBadgePosition === NotificationBadgePosition.top
              ? [topTransform]
              : [bottomTransform]),
            'absolute block rounded-full ring-2 ring-white',
          )}
        />
      )}
    </span>
  )
}

export const Avatar = Object.assign(AvatarComponent, {
  size: AvatarSize,
  shape: AvatarShape,
  badgeSize: NotificationBadgeSize,
  badgeColor: NotificationBadgeColor,
  badgePosition: NotificationBadgePosition,
})

export default Avatar

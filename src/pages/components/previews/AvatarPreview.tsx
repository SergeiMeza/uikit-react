import { Avatar, Code } from '../../../components'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

export const AvatarPreview = () => {
  let imgSrc =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80'

  let previewCode1 = `import { Avatar } from "@sergeimeza/uikit-react"
  
  function Example() {
    
    return (
      <div className="flex space-x-4">
        <div>
        <Avatar src={imgSrc} size={Avatar.size.large} />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.large}
          />
        </div>

        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.rounded}
            size={Avatar.size.large}
            notificationBadge
            notificationBadgeSize={Avatar.badgeSize.large}
            notificationBadgeColor={Avatar.badgeColor.green}
            notificationBadgePosition={Avatar.badgePosition.bottom}
          />
        </div>
      </div>
    )
  }
  
  export default Example`

  let previewCode2 = `export type AvatarProps = {
  shape?: AvatarShape
  size?: AvatarSize
  notificationBadge?: boolean
  notificationBadgeSize?: NotificationBadgeSize
  notificationBadgeColor?: NotificationBadgeColor
  notificationBadgePosition?: NotificationBadgePosition
  src?: string
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
}`

  return (
    <ComponentWrapper
      component={{
        name: 'Avatar',
        to: '/components/avatar',
        current: true,
      }}
    >
      <div className="grid grid-cols-6 gap-4">
        <div>
          <Avatar src={imgSrc} size={Avatar.size.small} />
        </div>
        <div>
          <Avatar src={imgSrc} size={Avatar.size.medium} />
        </div>
        <div>
          <Avatar src={imgSrc} size={Avatar.size.large} />
        </div>
        <div>
          <Avatar src={imgSrc} size={Avatar.size.xl} />
        </div>
        <div>
          <Avatar src={imgSrc} size={Avatar.size.xxl} />
        </div>
        <div>
          <Avatar src={imgSrc} size={Avatar.size.xxxl} />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.small}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.medium}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.large}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.xl}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.xxl}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.xxxl}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.rounded}
            size={Avatar.size.small}
            notificationBadge
            notificationBadgeSize={Avatar.badgeSize.small}
            notificationBadgeColor={Avatar.badgeColor.gray}
            notificationBadgePosition={Avatar.badgePosition.bottom}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.rounded}
            size={Avatar.size.medium}
            notificationBadge
            notificationBadgeSize={Avatar.badgeSize.medium}
            notificationBadgeColor={Avatar.badgeColor.red}
            notificationBadgePosition={Avatar.badgePosition.bottom}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.rounded}
            size={Avatar.size.large}
            notificationBadge
            notificationBadgeSize={Avatar.badgeSize.large}
            notificationBadgeColor={Avatar.badgeColor.green}
            notificationBadgePosition={Avatar.badgePosition.bottom}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.xl}
            notificationBadge
            notificationBadgeSize={Avatar.badgeSize.xl}
            notificationBadgeColor={Avatar.badgeColor.indigo}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.xxl}
            notificationBadge
            notificationBadgeSize={Avatar.badgeSize.xxl}
            notificationBadgeColor={Avatar.badgeColor.purple}
          />
        </div>
        <div>
          <Avatar
            src={imgSrc}
            shape={Avatar.shape.default}
            size={Avatar.size.xxxl}
            notificationBadge
            notificationBadgeSize={Avatar.badgeSize.xxxl}
            notificationBadgeColor={Avatar.badgeColor.pink}
          />
        </div>
      </div>

      <div>
        <Code>{previewCode1}</Code>
      </div>

      <div>
        <Code>{previewCode2}</Code>
      </div>
    </ComponentWrapper>
  )
}

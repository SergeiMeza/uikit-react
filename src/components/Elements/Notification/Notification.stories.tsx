import { ComponentStory, ComponentMeta } from '@storybook/react'

import Notification from './Notification'

export default {
  title: 'Elements/ Notification',
  component: Notification,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Notification>

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
)

export const ThemeNotification = Template.bind({})
ThemeNotification.args = {
  show: true,
  setShow: (_) => {},
}

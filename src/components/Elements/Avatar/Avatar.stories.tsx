import { ComponentStory, ComponentMeta } from '@storybook/react'

import Avatar from './Avatar'

export default {
  title: 'Elements/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const ThemeAvatar = Template.bind({})

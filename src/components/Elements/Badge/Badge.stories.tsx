import { ComponentStory, ComponentMeta } from '@storybook/react'

import Badge from './Badge'

export default {
  title: 'Elements/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const ThemeBadge = Template.bind({})

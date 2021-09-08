import { ComponentStory, ComponentMeta } from '@storybook/react'

import VerticalNavigation from './VerticalNavigation'

export default {
  title: 'Elements/ VerticalNavigation',
  component: VerticalNavigation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof VerticalNavigation>

const Template: ComponentStory<typeof VerticalNavigation> = (args) => (
  <VerticalNavigation {...args} />
)

export const ThemeVerticalNavigation = Template.bind({})
ThemeVerticalNavigation.args = {}

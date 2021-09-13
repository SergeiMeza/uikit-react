import { ComponentStory, ComponentMeta } from '@storybook/react'

import SidebarNavigation from './SidebarNavigation'

export default {
  title: 'Elements/ SidebarNavigation',
  component: SidebarNavigation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarNavigation>

const Template: ComponentStory<typeof SidebarNavigation> = (args) => (
  <SidebarNavigation {...args} />
)

export const ThemeSidebarNavigation = Template.bind({})
ThemeSidebarNavigation.args = {}

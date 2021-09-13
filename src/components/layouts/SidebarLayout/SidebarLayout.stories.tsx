import { ComponentStory, ComponentMeta } from '@storybook/react'

import SidebarLayout from './SidebarLayout'

export default {
  title: 'Layouts/ SidebarLayout',
  component: SidebarLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarLayout>

const Template: ComponentStory<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
)

export const ThemeSidebarLayout = Template.bind({})
ThemeSidebarLayout.args = {}

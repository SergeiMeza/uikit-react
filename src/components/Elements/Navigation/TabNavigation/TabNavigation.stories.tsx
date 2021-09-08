import { ComponentStory, ComponentMeta } from '@storybook/react'

import TabNavigation from './TabNavigation'

export default {
  title: 'Elements/ TabNavigation',
  component: TabNavigation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TabNavigation>

const Template: ComponentStory<typeof TabNavigation> = (args) => (
  <TabNavigation {...args} />
)

export const ThemeTabNavigation = Template.bind({})
ThemeTabNavigation.args = {}

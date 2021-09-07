import { ComponentStory, ComponentMeta } from '@storybook/react'

import TabGroup from './TabGroup'

export default {
  title: 'Elements/ TabGroup',
  component: TabGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TabGroup>

const Template: ComponentStory<typeof TabGroup> = (args) => (
  <TabGroup {...args} />
)

export const ThemeTabGroup = Template.bind({})
ThemeTabGroup.args = {}

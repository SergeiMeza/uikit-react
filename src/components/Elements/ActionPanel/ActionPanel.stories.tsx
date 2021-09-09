import { ComponentStory, ComponentMeta } from '@storybook/react'

import ActionPanel from './ActionPanel'

export default {
  title: 'Elements/ ActionPanel',
  component: ActionPanel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ActionPanel>

const Template: ComponentStory<typeof ActionPanel> = (args) => (
  <div className="w-screen h-screen p-10 bg-gray-100">
    <ActionPanel {...args} />
  </div>
)

export const ThemeActionPanel = Template.bind({})
ThemeActionPanel.args = {}

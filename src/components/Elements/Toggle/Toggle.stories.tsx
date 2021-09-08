import { ComponentStory, ComponentMeta } from '@storybook/react'

import Toggle from './Toggle'

export default {
  title: 'Elements/ Toggle',
  component: Toggle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const ThemeToggle = Template.bind({})
ThemeToggle.args = {
  enabled: false,
  setEnabled: (enabled) => {},
}

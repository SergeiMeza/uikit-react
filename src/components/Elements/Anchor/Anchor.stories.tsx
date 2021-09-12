import { ComponentStory, ComponentMeta } from '@storybook/react'

import Anchor from './Anchor'

export default {
  title: 'Elements/ Anchor',
  component: Anchor,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Anchor>

const Template: ComponentStory<typeof Anchor> = (args) => (
  <Anchor to="/" {...args}>
    Hello World
  </Anchor>
)

export const ThemeAnchor = Template.bind({})
ThemeAnchor.args = {}

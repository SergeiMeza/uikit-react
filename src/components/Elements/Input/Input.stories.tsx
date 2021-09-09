import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './Input'

export default {
  title: 'Elements/ Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const ThemeInput = Template.bind({})
ThemeInput.args = {}

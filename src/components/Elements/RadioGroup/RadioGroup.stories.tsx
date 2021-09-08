import { ComponentStory, ComponentMeta } from '@storybook/react'

import RadioGroup from './RadioGroup'

export default {
  title: 'Elements/ RadioGroup',
  component: RadioGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
)

export const ThemeRadioGroup = Template.bind({})
ThemeRadioGroup.args = {}

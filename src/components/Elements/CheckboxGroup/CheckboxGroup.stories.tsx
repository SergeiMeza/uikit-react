import { ComponentStory, ComponentMeta } from '@storybook/react'

import CheckboxGroup from './CheckboxGroup'

export default {
  title: 'Elements/ CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CheckboxGroup>

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
)

export const ThemeCheckboxGroup = Template.bind({})
ThemeCheckboxGroup.args = {}

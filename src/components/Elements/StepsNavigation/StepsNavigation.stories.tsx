import { ComponentStory, ComponentMeta } from '@storybook/react'

import StepsNavigation from './StepsNavigation'

export default {
  title: 'Elements/ StepsNavigation',
  component: StepsNavigation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StepsNavigation>

const Template: ComponentStory<typeof StepsNavigation> = (args) => (
  <StepsNavigation {...args} />
)

export const ThemeStepsNavigation = Template.bind({})
ThemeStepsNavigation.args = {}

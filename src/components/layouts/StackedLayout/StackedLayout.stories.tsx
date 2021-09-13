import { ComponentStory, ComponentMeta } from '@storybook/react'

import StackedLayout from './StackedLayout'

export default {
  title: 'Layouts/ StackedLayout',
  component: StackedLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StackedLayout>

const Template: ComponentStory<typeof StackedLayout> = (args) => (
  <StackedLayout {...args} />
)

export const ThemeStackedLayout = Template.bind({})
ThemeStackedLayout.args = {}

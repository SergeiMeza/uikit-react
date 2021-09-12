import { ComponentStory, ComponentMeta } from '@storybook/react'

import StackedFormLayout from './StackedFormLayout'

export default {
  title: 'Layouts/ StackedFormLayout',
  component: StackedFormLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StackedFormLayout>

const Template: ComponentStory<typeof StackedFormLayout> = (args) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto py-20">
      <StackedFormLayout {...args} />
    </div>
  </div>
)

export const ThemeStackedFormLayout = Template.bind({})
ThemeStackedFormLayout.args = {}

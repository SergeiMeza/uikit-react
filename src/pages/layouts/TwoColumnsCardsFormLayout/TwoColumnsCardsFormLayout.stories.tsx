import { ComponentStory, ComponentMeta } from '@storybook/react'

import TwoColumnsCardsFormLayout from './TwoColumnsCardsFormLayout'

export default {
  title: 'Layouts/ TwoColumnsCardsFormLayout',
  component: TwoColumnsCardsFormLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TwoColumnsCardsFormLayout>

const Template: ComponentStory<typeof TwoColumnsCardsFormLayout> = (args) => (
  <div className="bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto py-20">
      <TwoColumnsCardsFormLayout {...args} />
    </div>
  </div>
)

export const ThemeTwoColumnsCardsFormLayout = Template.bind({})
ThemeTwoColumnsCardsFormLayout.args = {}

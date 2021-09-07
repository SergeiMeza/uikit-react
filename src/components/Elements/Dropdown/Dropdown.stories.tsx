import { ComponentStory, ComponentMeta } from '@storybook/react'

import Dropdown from './Dropdown'

export default {
  title: 'Elements/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <>
    <div className="flex flex-col items-end">
      <Dropdown {...args} />
    </div>
  </>
)

export const ThemeDropdown = Template.bind({})

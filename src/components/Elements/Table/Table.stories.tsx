import { ComponentStory, ComponentMeta } from '@storybook/react'

import Table from './Table'

export default {
  title: 'Elements/ Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => (
  <div className="w-screen h-screen p-10 bg-gray-100">
    <Table {...args} />
  </div>
)

export const ThemeTable = Template.bind({})
ThemeTable.args = {}

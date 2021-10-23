import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pagination from './Pagination'

export default {
  title: 'Elements/ Pagination',
  component: Pagination,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const ThemePagination = Template.bind({})
ThemePagination.args = {}

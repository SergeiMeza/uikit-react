import { ComponentStory, ComponentMeta } from '@storybook/react'

import Breadcrumb from './Breadcrumb'

export default {
  title: 'Elements/ Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
)

export const ThemeBreadcrumb = Template.bind({})
ThemeBreadcrumb.args = {}

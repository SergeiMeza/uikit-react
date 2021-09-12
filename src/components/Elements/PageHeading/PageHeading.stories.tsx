import { ComponentStory, ComponentMeta } from '@storybook/react'

import PageHeading from './PageHeading'

export default {
  title: 'Elements/ PageHeading',
  component: PageHeading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageHeading>

const Template: ComponentStory<typeof PageHeading> = (args) => (
  <PageHeading {...args} />
)

export const ThemePageHeading = Template.bind({})
ThemePageHeading.args = {}

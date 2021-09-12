import { ComponentStory, ComponentMeta } from '@storybook/react'

import SectionHeading from './SectionHeading'

export default {
  title: 'Elements/ SectionHeading',
  component: SectionHeading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SectionHeading>

const Template: ComponentStory<typeof SectionHeading> = (args) => (
  <SectionHeading {...args} />
)

export const ThemeSectionHeading = Template.bind({})
ThemeSectionHeading.args = {}

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CardHeading from './CardHeading'

export default {
  title: 'Elements/ CardHeading',
  component: CardHeading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardHeading>

const Template: ComponentStory<typeof CardHeading> = (args) => (
  <CardHeading {...args} />
)

export const ThemeCardHeading = Template.bind({})
ThemeCardHeading.args = {}

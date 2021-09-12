import { ComponentStory, ComponentMeta } from '@storybook/react'

import Container from './Container'

export default {
  title: 'Elements/ Container',
  component: Container,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const ThemeContainer = Template.bind({})
ThemeContainer.args = {}

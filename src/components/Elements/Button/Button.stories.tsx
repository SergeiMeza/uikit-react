import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, Buttons } from './Button'

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

const GroupTemplate: ComponentStory<typeof Buttons> = () => <Buttons />

export const ThemeButtons = GroupTemplate.bind({})
ThemeButtons.args = {}

export const ThemeButton = Template.bind({})
ThemeButton.args = {
  buttonType: Button.buttonType.primary,
  title: 'Button',
}

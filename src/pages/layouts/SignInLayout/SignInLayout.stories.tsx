import { ComponentStory, ComponentMeta } from '@storybook/react'

import SignInLayout from './SignInLayout'

export default {
  title: 'Layouts/ SignInLayout',
  component: SignInLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SignInLayout>

const Template: ComponentStory<typeof SignInLayout> = (args) => (
  <SignInLayout {...args} />
)

export const ThemeSignInLayout = Template.bind({})
ThemeSignInLayout.args = {}

import { ComponentStory, ComponentMeta } from '@storybook/react'

import SelectMenu from './SelectMenu'

export default {
  title: 'Elements/ SelectMenu',
  component: SelectMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SelectMenu>

const Template: ComponentStory<typeof SelectMenu> = (args) => (
  <SelectMenu {...args} />
)

export const ThemeSelectMenu = Template.bind({})
ThemeSelectMenu.args = {}

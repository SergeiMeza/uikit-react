import { ComponentStory, ComponentMeta } from '@storybook/react'

import EmptyState from './EmptyState'

export default {
  title: 'Elements/ EmptyState',
  component: EmptyState,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EmptyState>

const Template: ComponentStory<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
)

export const ThemeEmptyState = Template.bind({})
ThemeEmptyState.args = {}

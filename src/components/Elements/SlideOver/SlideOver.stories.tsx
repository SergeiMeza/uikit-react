import { ComponentStory, ComponentMeta } from '@storybook/react'

import SlideOver from './SlideOver'

export default {
  title: 'Elements/ SlideOver',
  component: SlideOver,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SlideOver>

const Template: ComponentStory<typeof SlideOver> = (args) => (
  <SlideOver {...args} />
)

export const ThemeSlideOver = Template.bind({})
ThemeSlideOver.args = {
  closeButtonPosition: SlideOver.closeButtonPosition.inside,
  stickyFooter: <SlideOver.Footer setShow={() => {}} />,
  show: true,
  setShow: (_) => {},
}

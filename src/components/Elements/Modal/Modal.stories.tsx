import { ComponentStory, ComponentMeta } from '@storybook/react'

import Modal from './Modal'

export default {
  title: 'Elements/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <Modal.Card setShow={() => {}} />
  </Modal>
)

export const ThemeModal = Template.bind({})

ThemeModal.args = {
  show: true,
  setShow: (_) => {},
}

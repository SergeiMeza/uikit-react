import { Button, Modal } from '../../../components'
import { useState } from 'react'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

export const ModalPreview = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <ComponentWrapper
      component={{
        name: 'Modal',
        to: '/components/modal',
        current: true,
      }}
    >
      <Button
        type="button"
        buttonType={Button.buttonType.secondary}
        onClick={() => {
          setShowModal(true)
        }}
      >
        Show Modal
      </Button>
      <Modal show={showModal} setShow={setShowModal} />
    </ComponentWrapper>
  )
}

export default ModalPreview

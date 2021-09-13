import { Button, SlideOver } from '../../../components'
import { useState } from 'react'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

export const SlideOverPreview = () => {
  const [showSlideOver, setShowSlideOver] = useState(false)

  return (
    <ComponentWrapper
      component={{
        name: 'SlideOver',
        to: '/components/slide-over',
        current: true,
      }}
    >
      <Button
        type="button"
        buttonType={Button.buttonType.secondary}
        onClick={() => {
          setShowSlideOver(true)
        }}
      >
        Show Slideover
      </Button>
      <SlideOver show={showSlideOver} setShow={setShowSlideOver} />
    </ComponentWrapper>
  )
}

export default SlideOverPreview

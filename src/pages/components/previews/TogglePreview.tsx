import { Toggle } from '../../../components'
import { useState } from 'react'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

export const TogglePreview = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <ComponentWrapper
      component={{
        name: 'Toggle',
        to: '/components/toggle',
        current: true,
      }}
    >
      <Toggle enabled={enabled} setEnabled={setEnabled} />
    </ComponentWrapper>
  )
}

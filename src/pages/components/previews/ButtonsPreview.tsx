import { Button, Code } from '../../../components'

import { PlusIcon as PlusIconSolid } from '@heroicons/react/solid'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

const Buttons = () => {
  return (
    <div className="my-4 ml-8">
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">Primary buttons</h3>
        <div className="flex items-end space-x-2">
          <Button size={Button.size.small}>Button</Button>
          <Button size={Button.size.medium}>Button</Button>
          <Button size={Button.size.large}>Button</Button>
          <Button size={Button.size.xl}>Button</Button>
          <Button size={Button.size.xxl}>Button</Button>
        </div>
      </div>

      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">Secondary buttons</h3>
        <div className="flex items-end space-x-2">
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.small}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.medium}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.large}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.xl}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.secondary}
            size={Button.size.xxl}
          >
            Button
          </Button>
        </div>
      </div>
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">White buttons</h3>
        <div className="flex items-end space-x-2">
          <Button
            buttonType={Button.buttonType.outline}
            size={Button.size.small}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.outline}
            size={Button.size.medium}
          >
            Button
          </Button>
          <Button
            buttonType={Button.buttonType.outline}
            size={Button.size.large}
          >
            Button
          </Button>
          <Button buttonType={Button.buttonType.outline} size={Button.size.xl}>
            Button
          </Button>
          <Button buttonType={Button.buttonType.outline} size={Button.size.xxl}>
            Button
          </Button>
        </div>
      </div>
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">Rounded buttons</h3>
        <div className="flex items-end space-x-2">
          <Button shape={Button.shape.round} size={Button.size.small}>
            Button
          </Button>
          <Button shape={Button.shape.round} size={Button.size.medium}>
            Button
          </Button>
          <Button shape={Button.shape.round} size={Button.size.large}>
            Button
          </Button>
          <Button shape={Button.shape.round} size={Button.size.xl}>
            Button
          </Button>
          <Button shape={Button.shape.round} size={Button.size.xxl}>
            Button
          </Button>
        </div>
      </div>
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-bold">Circular buttons</h3>
        <div className="flex items-end space-x-2">
          <Button shape={Button.shape.circular}>
            <PlusIconSolid className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button shape={Button.shape.circular}>
            <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button shape={Button.shape.circular}>
            <PlusIconSolid className="h-6 w-6" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.secondary}
          >
            <PlusIconSolid className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.secondary}
          >
            <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.secondary}
          >
            <PlusIconSolid className="h-6 w-6" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.outline}
          >
            <PlusIconSolid className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.outline}
          >
            <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button
            shape={Button.shape.circular}
            buttonType={Button.buttonType.outline}
          >
            <PlusIconSolid className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export const ButtonsPreview = () => {
  const previewCode1 = `import { Button } from "@sergeimeza/uikit-react"
import { PlusIcon as PlusIconSolid } from '@heroicons/react/solid'
function Example() {
  
  return (
    <div className="flex items-end space-x-2">
      <Button size={Button.size.large}>Button</Button>

      <Button
        buttonType={Button.buttonType.secondary}
        size={Button.size.large}
      >
        Button
      </Button>

      <Button shape={Button.shape.circular}>
        <PlusIconSolid className="h-6 w-6" aria-hidden="true" />
      </Button>
    </div>
  )
}

export default Example`

  const previewCode2 = `export type ButtonProps = {
  className?: string
  title?: string
  size?: ButtonSize
  shape?: ButtonShape
  buttonType?: ButtonType
  onClick?: () => void
}

enum ButtonSize {
  small = 'px-2.5 py-1.5 text-xs',
  medium = 'px-3 py-2 text-sm leading-4',
  large = 'px-4 py-2 text-sm',
  xl = 'px-4 py-2 text-base',
  xxl = 'px-6 py-3 text-base',
}

enum ButtonType {
  primary = 'border border-transparent shadow-sm text-white bg-primary-600 hover:bg-primary-700',
  secondary = 'border border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200',
  outline = 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
  transparent = 'text-gray-700',
}

enum ButtonShape {
  default = 'rounded rounded-md',
  round = 'rounded-full',
  circular = 'rounded-full p-2',
}`

  return (
    <ComponentWrapper
      component={{
        name: 'Button',
        to: '/components/button',
        current: true,
      }}
    >
      <Buttons />

      <div>
        <Code>{previewCode1}</Code>
      </div>
      <div>
        <Code>{previewCode2}</Code>
      </div>
    </ComponentWrapper>
  )
}

export default ButtonsPreview

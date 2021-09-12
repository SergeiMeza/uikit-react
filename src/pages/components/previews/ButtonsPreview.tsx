import { Button } from '../../../components'

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
  return (
    <ComponentWrapper
      component={{
        name: 'Button',
        href: '/components/button',
        current: true,
      }}
    >
      <Buttons />
    </ComponentWrapper>
  )
}

export default ButtonsPreview

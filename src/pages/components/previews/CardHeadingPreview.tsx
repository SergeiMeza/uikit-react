import { ComponentWrapper } from '../wrappers/ComponentWrapper'

import { Button, CardHeading, TabNavigation } from '../../../components'

const SampleActions = () => {
  return (
    <>
      <Button type="button" buttonType={Button.buttonType.outline}>
        Edit
      </Button>
      <Button
        className="ml-3"
        type="button"
        buttonType={Button.buttonType.primary}
      >
        Publish
      </Button>
    </>
  )
}

const SampleHeadingTitle = () => {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Hello World
      </h3>
      <p className="mt-1 max-w-4xl text-sm text-gray-500">
        Workcation is a property rental website. Etiam ullamcorper massa
        viverra.
      </p>
    </div>
  )
}

export const CardHeadingPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'CardHeading',
        to: '/components/card-heading',
        current: true,
      }}
    >
      <CardHeading title="Hello World" />
      <CardHeading title="Hello World" actions={<SampleActions />} />
      <CardHeading title={<SampleHeadingTitle />} />
      <CardHeading title="Hello World" tabs={<TabNavigation />} />
      <CardHeading
        title="Hello World"
        tabs={<TabNavigation />}
        actions={<SampleActions />}
      />
    </ComponentWrapper>
  )
}

export default CardHeadingPreview

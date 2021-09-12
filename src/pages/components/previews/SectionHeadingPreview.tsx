import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid'

import { ComponentWrapper } from '../wrappers/ComponentWrapper'

import {
  Anchor,
  Breadcrumb,
  Button,
  classNames,
  PageHeading,
  SectionHeading,
  TabNavigation,
} from '../../../components'

const Back = () => {
  return (
    <nav className="sm:hidden" aria-label="Back">
      <Anchor
        to="/"
        className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
      >
        <ChevronLeftIcon
          className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Back
      </Anchor>
    </nav>
  )
}

const SampleBreadcrumb = () => {
  return (
    <Breadcrumb
      className="hidden sm:flex"
      type={Breadcrumb.type.simpleWithChevrons}
    />
  )
}

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

const SampleMeta = () => {
  return (
    <>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <BriefcaseIcon
          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Full-time
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <LocationMarkerIcon
          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Remote
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <CurrencyDollarIcon
          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        $120k &ndash; $140k
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <CalendarIcon
          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Closing on January 9, 2020
      </div>
    </>
  )
}

const SampleHeadingTitle = () => {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Hello World
      </h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        Workcation is a property rental website. Etiam ullamcorper massa viverra
        consequat, consectetur id nulla tempus. Fringilla egestas justo massa
        purus sagittis malesuada.
      </p>
    </div>
  )
}

export const SectionHeadingPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'SectionHeading',
        to: '/components/section-heading',
        current: true,
      }}
    >
      <SectionHeading title="Hello World" />
      <SectionHeading title="Hello World" actions={<SampleActions />} />
      <SectionHeading title={<SampleHeadingTitle />} />
      <SectionHeading title="Hello World" tabs={<TabNavigation />} />
      <SectionHeading
        title="Hello World"
        tabs={<TabNavigation />}
        actions={<SampleActions />}
      />
    </ComponentWrapper>
  )
}

export default SectionHeadingPreview

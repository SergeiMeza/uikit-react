import React from 'react'

import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid'

import { Anchor, Breadcrumb, Button, classNames } from '../..'

export type PageHeadingProps = {
  className?: string
  title?: string | JSX.Element
  actions?: JSX.Element
  back?: JSX.Element
  breadcrumb?: JSX.Element
  meta?: JSX.Element
}

const PageHeadingComponent: React.FC<PageHeadingProps> = ({
  className = 'bg-white px-8 py-8',
  title = 'Back End Developer',
  back = (
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
  ),
  breadcrumb = (
    <Breadcrumb
      className="hidden sm:flex"
      type={Breadcrumb.type.simpleWithChevrons}
    />
  ),
  actions = (
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
  ),
  meta = (
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
  ),
}) => {
  return (
    <div className={classNames(className)}>
      {back ? (
        <>
          {back}
          {breadcrumb}
        </>
      ) : (
        { breadcrumb }
      )}
      <div
        className={classNames(
          breadcrumb ? 'mt-2' : '',
          'md:flex md:items-center md:justify-between md:space-x-5',
        )}
      >
        {typeof title === 'string' ? (
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {title}
            </h2>
            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
              {meta}
            </div>
          </div>
        ) : (
          title
        )}

        <div className="mt-4 flex md:mt-0 md:ml-4">{actions}</div>
      </div>
    </div>
  )
}

export const PageHeading = Object.assign(PageHeadingComponent, {})

export default PageHeading

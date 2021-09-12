import React from 'react'

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
  meta = undefined,
  back = undefined,
  breadcrumb = undefined,
  actions = undefined,
}) => {
  return (
    <div className={classNames(className)}>
      {back}
      {breadcrumb}
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

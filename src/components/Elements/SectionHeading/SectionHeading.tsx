import React from 'react'
import { classNames } from '../..'

export type SectionHeadingProps = {
  className?: string
  title?: string | JSX.Element
  tabs?: JSX.Element
  actions?: JSX.Element
}

export const SectionHeadingComponent: React.FC<SectionHeadingProps> = ({
  className = 'bg-white px-8 py-8',
  title = 'Back End Developer',
  tabs = undefined,
  actions = undefined,
}) => {
  return (
    <div className={classNames(className)}>
      <div className="relative pb-5 border-b border-gray-200 sm:pb-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          {typeof title === 'string' ? (
            <h3
              className={classNames(
                !tabs && !actions
                  ? 'mb-4'
                  : 'text-lg leading-6 font-medium text-gray-900',
              )}
            >
              {title}
            </h3>
          ) : (
            title
          )}

          {actions && (
            <div
              className={classNames(
                tabs
                  ? 'md:mt-0 md:absolute md:top-3 md:right-0'
                  : 'sm:mt-0 sm:ml-4 mb-4',
                'mt-3 flex',
              )}
            >
              {actions}
            </div>
          )}
        </div>
        {tabs && <div className="mt-4 sm:mt-2">{tabs}</div>}
      </div>
    </div>
  )
}

export const SectionHeading = Object.assign(SectionHeadingComponent, {})

export default SectionHeading

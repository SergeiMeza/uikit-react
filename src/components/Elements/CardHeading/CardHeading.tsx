import React from 'react'
import { classNames } from '../..'

export type CardHeadingProps = {
  className?: string
  title?: string | JSX.Element
  tabs?: JSX.Element
  actions?: JSX.Element
}

export const CardHeadingComponent: React.FC<CardHeadingProps> = ({
  className = 'bg-white px-4 py-5',
  title = 'Back End Developer',
  actions = undefined,
}) => {
  return (
    <div className={classNames(className, 'border-b border-gray-200 sm:px-6')}>
      <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-4">
          {typeof title === 'string' ? (
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {title}
            </h3>
          ) : (
            title
          )}
        </div>
        <div className="ml-4 mt-4 flex-shrink-0 flex">{actions}</div>
      </div>
    </div>
  )
}

export const CardHeading = Object.assign(CardHeadingComponent, {})

export default CardHeading

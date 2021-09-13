import React from 'react'

import { classNames } from '../..'
import { NavBarProps } from '../../Elements/NavBar/NavBar'

export type StackedLayoutProps = {
  className?: string
  navBar?: JSX.Element
  title?: string | JSX.Element
  stackedLayoutType?: StackedLayoutType
}

enum StackedLayoutType {
  simple = 'simple',
}

const StackedLayoutComponent: React.FC<StackedLayoutProps> = ({
  className = 'min-h-1/4 bg-gray-100',
  navBar = undefined,
  title = undefined,
  stackedLayoutType = StackedLayoutType.simple,
  children,
}) => {
  return (
    <div className={classNames(className)}>
      {navBar}

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {title}
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {children ?? (
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export const StackedLayout = Object.assign(StackedLayoutComponent, {
  type: StackedLayoutType,
})

export default StackedLayout

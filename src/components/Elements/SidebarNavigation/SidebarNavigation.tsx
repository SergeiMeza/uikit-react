import React from 'react'

import { VerticalNavigation } from '../..'

import { VerticalNavigationProps } from '../Navigation/VerticalNavigation/VerticalNavigation'

export type SidebarNavigationProps = {
  icon?: JSX.Element
  bottomSlot?: JSX.Element
}

const SidebarNavigationComponent: React.FC<
  VerticalNavigationProps & SidebarNavigationProps
> = ({
  icon = undefined,
  items,
  secondaryNavigationTitle,
  secondaryItems,
  showIcons,
  onItemSelected,
  bottomSlot = undefined,
}) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">{icon}</div>
        <nav
          className="mt-5 flex-1 px-2 bg-white space-y-1"
          aria-label="Sidebar"
        >
          <VerticalNavigation
            items={items}
            secondaryNavigationTitle={secondaryNavigationTitle}
            secondaryItems={secondaryItems}
            showIcons={showIcons}
            onItemSelected={onItemSelected}
          />
        </nav>
      </div>
      {bottomSlot && (
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          {bottomSlot}
        </div>
      )}
    </div>
  )
}

export const SidebarNavigation = Object.assign(SidebarNavigationComponent, {})

export default SidebarNavigation

import React, { useState } from 'react'

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'

import { NavigationItem } from '../NavigationItem'
import { classNames } from '../../../../helpers/methods'

export type VerticalNavigationProps = {
  items?: NavigationItem[]
  secondaryNavigationTitle?: string
  secondaryItems?: NavigationItem[]
  showIcons?: boolean
  onItemSelected?: (item: NavigationItem) => void
}

/* This example requires Tailwind CSS v2.0+ */
const sampleNavigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true, count: '5' },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  {
    name: 'Projects',
    href: '#',
    icon: FolderIcon,
    current: false,
    count: '19',
  },
  {
    name: 'Calendar',
    href: '#',
    icon: CalendarIcon,
    current: false,
    count: '20+',
  },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

const sampleSecondaryNavigation = [
  { name: 'Website redesign', href: '#', current: false },
  { name: 'GraphQL API', href: '#', current: false },
  { name: 'Customer migration guides', href: '#', current: false },
  { name: 'Profit sharing program', href: '#', current: false },
]

const VerticalNavigationComponent: React.FC<VerticalNavigationProps> = ({
  items = sampleNavigation,
  secondaryNavigationTitle = 'Projects',
  secondaryItems = sampleSecondaryNavigation,
  showIcons = true,
  onItemSelected = (item) => console.log('item selected:', item.name),
}) => {
  const [navItems, setNavItems] = useState<any[]>(items.slice())

  function handleItemChange(value: string) {
    let _navItems = navItems.slice()
    _navItems = _navItems.map((e) => ({ ...e, current: false }))
    let index = _navItems.findIndex((i) => i.name === value)
    _navItems[index].current = true
    setNavItems(_navItems)
    onItemSelected(_navItems[index])
  }

  return (
    <nav aria-label="Sidebar">
      <div className="space-y-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={classNames(
              item.current
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md',
            )}
            type="button"
            aria-current={item.current ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault()
              handleItemChange(item.name)
            }}
          >
            {showIcons && item.icon && (
              <item.icon
                className={classNames(
                  item.current
                    ? 'text-gray-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                )}
                aria-hidden="true"
              />
            )}
            <span className="truncate">{item.name}</span>
            {item.count ? (
              <span
                className={classNames(
                  item.current
                    ? 'bg-white'
                    : 'bg-gray-100 group-hover:bg-gray-200',
                  'ml-auto inline-block py-0.5 px-3 text-xs rounded-full',
                )}
              >
                {item.count}
              </span>
            ) : null}
          </button>
        ))}
      </div>
      {secondaryItems.length > 0 && (
        <div className="mt-8">
          {secondaryNavigationTitle && (
            <h3
              className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              id="projects-headline"
            >
              {secondaryNavigationTitle}
            </h3>
          )}
          <div className="mt-1 space-y-1" aria-labelledby="projects-headline">
            {secondaryItems.map((item) => (
              <button
                key={item.name}
                type="button"
                className="w-full group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault()
                  onItemSelected(item)
                }}
              >
                <span className="truncate">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export const VerticalNavigation = Object.assign(VerticalNavigationComponent, {})

export default VerticalNavigation

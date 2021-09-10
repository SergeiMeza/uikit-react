import React, { ChangeEvent, useState } from 'react'

// import {
//   CreditCardIcon,
//   OfficeBuildingIcon,
//   UserIcon,
//   UsersIcon,
// } from '@heroicons/react/solid'

import { classNames } from '../../../../helpers/methods'
import { NavigationItem } from '../NavigationItem'

export type TabNavigationProps = {
  tabs?: NavigationItem[]
  type?: TabNavigationType
  showIcons?: boolean
  onTabSelected?: (tab: NavigationItem) => void
}

// const sampleTabs = [
//   { name: 'My Account', href: '#', icon: UserIcon, current: false },
//   { name: 'Company', href: '#', icon: OfficeBuildingIcon, current: false },
//   { name: 'Team Members', href: '#', icon: UsersIcon, current: true },
//   { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
// ]

const sampleTabs2 = [
  { name: 'Applied', href: '#', count: '52', current: false },
  { name: 'Phone Screening', href: '#', count: '6', current: false },
  { name: 'Interview', href: '#', count: '4', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false },
]

enum TabNavigationType {
  default = 'default',
  pills = 'pills',
}

const TabNavigationComponent: React.FC<TabNavigationProps> = ({
  tabs = sampleTabs2,
  type = TabNavigationType.default,
  showIcons = false,
  onTabSelected = (tab) => {
    console.log('tab selected:', tab.name)
  },
}) => {
  const [tabItems, setTabItems] = useState<any[]>(tabs.slice())

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    handleItemChange(e.target.value)
  }

  function handleItemChange(value: string) {
    let _tabItems = tabItems.slice()
    _tabItems = _tabItems.map((e) => ({ ...e, current: false }))
    let index = _tabItems.findIndex((i) => i.name === value)
    _tabItems[index].current = true
    setTabItems(_tabItems)
    onTabSelected(_tabItems[index])
  }

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.current)?.name}
          onChange={handleChange}
        >
          {tabItems.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div
          className={classNames(
            type === TabNavigationType.default
              ? 'border-b border-gray-200'
              : '',
          )}
        >
          <nav
            className={classNames(
              type === TabNavigationType.default
                ? '-mb-px flex space-x-8'
                : 'flex space-x-4',
            )}
            aria-label="Tabs"
          >
            {tabItems.map((tab) => (
              <button
                type="button"
                key={tab.name}
                className={
                  type === TabNavigationType.default
                    ? classNames(
                        tab.current
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'group inline-flex items-center',
                        'py-4 px-1 border-b-2 font-medium text-sm',
                      )
                    : classNames(
                        tab.current
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-500 hover:text-gray-700',
                        'px-3 py-2 font-medium text-sm rounded-md',
                      )
                }
                aria-current={tab.current ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  handleItemChange(tab.name)
                }}
              >
                {showIcons && tab.icon && (
                  <tab.icon
                    className={classNames(
                      tab.current
                        ? 'text-primary-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      '-ml-0.5 mr-2 h-5 w-5',
                    )}
                    aria-hidden="true"
                  />
                )}
                <span>{tab.name}</span>
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.current
                        ? 'bg-primary-100 text-primary-600'
                        : 'bg-gray-100 text-gray-900',
                      'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block',
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export const TabNavigation = Object.assign(TabNavigationComponent, {})

export default TabNavigation

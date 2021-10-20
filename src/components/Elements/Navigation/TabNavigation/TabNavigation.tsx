import { useArray } from '@sergeimeza/foundation-react'
import React, { ChangeEvent, useState } from 'react'
import { Anchor } from '../../..'

import { classNames } from '../../../helpers/methods'
import { NavigationItem } from '../NavigationItem'

export type TabNavigationProps = {
  tabs?: NavigationItem[]
  type?: TabNavigationType
  tabItemClassNames?: string
  tabItemSelectedClassNames?: string
  showBadge?: boolean
  showIcons?: boolean
  isNavBar?: boolean
  onTabSelected?: (tab: NavigationItem) => void
}

enum TabNavigationType {
  default = 'default',
  pills = 'pills',
}

const TabNavigationComponent: React.FC<TabNavigationProps> = ({
  tabs = [],
  type = TabNavigationType.default,
  tabItemClassNames = '',
  tabItemSelectedClassNames = '',
  isNavBar = false,
  showIcons = false,
  showBadge = true,
  onTabSelected = (tab) => {
    console.log('tab selected:', tab.name)
  },
}) => {
  const { array: tabItems, set: setTabItems } = useArray(tabs)

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

  let navBarTabNavigation = (
    <>
      {tabItems.map((tab) => (
        <Anchor
          key={tab.name}
          to={tab.to}
          href={tab.href}
          className={classNames(
            tab.current
              ? 'border-primary-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
          )}
        >
          {tab.name}
        </Anchor>
      ))}
    </>
  )

  let standardTabNavigation = (
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
              <Anchor
                type="button"
                key={tab.name}
                to={tab.to}
                href={tab.href}
                onClick={() => {
                  handleItemChange(tab.name)
                }}
                className={
                  type === TabNavigationType.default
                    ? classNames(
                        tab.current
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'group inline-flex items-center',
                        'py-4 px-1 border-b-2 font-medium text-sm',
                        tabItemSelectedClassNames,
                      )
                    : classNames(
                        tab.current
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-500 hover:text-gray-700',
                        'px-3 py-2 font-medium text-sm rounded-md',
                        tabItemClassNames,
                      )
                }
                aria-current={tab.current ? 'page' : undefined}
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
                {showBadge && tab.count ? (
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
              </Anchor>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )

  return isNavBar ? navBarTabNavigation : standardTabNavigation
}

export const TabNavigation = Object.assign(TabNavigationComponent, {
  type: TabNavigationType,
})

export default TabNavigation

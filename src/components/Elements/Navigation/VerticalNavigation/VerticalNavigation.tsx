import React, { useState } from 'react'

import { NavigationItem } from '../NavigationItem'
import { classNames } from '../../../helpers/methods'
import { Anchor } from '../../..'
import { Disclosure } from '@headlessui/react'

export type VerticalNavigationProps = {
  items?: NavigationItem[]
  secondaryNavigationTitle?: string
  secondaryItems?: NavigationItem[]
  showIcons?: boolean
  onItemSelected?: (item: NavigationItem) => void
}

const VerticalNavigationComponent: React.FC<VerticalNavigationProps> = ({
  items = [],
  secondaryNavigationTitle = undefined,
  secondaryItems = undefined,
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
        {navItems.map((item) =>
          !item.children ? (
            <Anchor
              to={item.to}
              href={item.href}
              key={item.name}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-primary-100 text-primary-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
              )}
            >
              {showIcons && item.icon && (
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-primary-500'
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
            </Anchor>
          ) : (
            <Disclosure as="div" key={item.name} className="space-y-1">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500',
                    )}
                  >
                    <svg
                      className={classNames(
                        open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                        'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                      )}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                    </svg>
                    {item.name}
                  </Disclosure.Button>
                  <Disclosure.Panel className="space-y-1">
                    {item.children.map((subItem) => (
                      <Anchor
                        key={subItem.name}
                        to={subItem.to}
                        href={subItem.href}
                        className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      >
                        {subItem.name}
                      </Anchor>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ),
        )}
      </div>
      {secondaryItems && secondaryItems.length > 0 && (
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
            {secondaryItems?.map((item) => (
              <Anchor
                key={item.name}
                to={item.to}
                href={item.href}
                className={classNames(
                  'w-full group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md',
                  'hover:text-gray-900 hover:bg-gray-50',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
                )}
              >
                <span className="truncate">{item.name}</span>
              </Anchor>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export const VerticalNavigation = Object.assign(VerticalNavigationComponent, {})

export default VerticalNavigation

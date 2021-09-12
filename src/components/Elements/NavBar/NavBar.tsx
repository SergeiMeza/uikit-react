import React from 'react'

import { Disclosure } from '@headlessui/react'

import { MenuIcon, XIcon } from '@heroicons/react/outline'

export type NavBarProps = {
  icon?: JSX.Element
  tabNavigation?: JSX.Element
  quickAction?: JSX.Element
  actions?: JSX.Element
  disclosurePanel?: JSX.Element
}

const NavBarComponent: React.FC<NavBarProps> = ({
  icon = undefined,
  tabNavigation = undefined,
  quickAction = undefined,
  actions = undefined,
  disclosurePanel = undefined,
}) => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  {quickAction && (
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  )}
                </div>

                <div className="flex-shrink-0 flex items-center">{icon}</div>

                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-primary-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {tabNavigation}
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">{quickAction}</div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  {actions}
                </div>
                <div className="flex items-center md:hidden">
                  {/* Mobile menu button */}
                  {!quickAction && (
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            {disclosurePanel}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export const NavBar = Object.assign(NavBarComponent, {})

export default NavBar

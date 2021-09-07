import React, { Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  DotsVerticalIcon,
  PencilAltIcon,
} from '@heroicons/react/solid'
import { classNames } from '../../../helpers/methods'

export type DropdownProps = {
  className?: string
  title?: string
  menuButton?: JSX.Element
  type?: DropdownType
}

enum DropdownType {
  custom = 'custom',
  button = 'button',
  minimal = 'minimal',
}

export type MenuItemProps = {
  href?: string
  title?: string
}

const MenuItem: React.FC<MenuItemProps> = ({
  href = '#',
  title = 'Edit',
  children,
}) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            'group flex items-center px-4 py-2 text-sm',
          )}
        >
          {children ?? title}
        </a>
      )}
    </Menu.Item>
  )
}

const MenuSection: React.FC = ({ children }) => {
  return <div className="py-1">{children}</div>
}

const DotsVerticalButton = (
  <Menu.Button className="bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
    <span className="sr-only">Open options</span>
    <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
  </Menu.Button>
)

const DropdownComponent: React.FC<DropdownProps> = ({
  className = '',
  type = DropdownType.button,
  title = 'Options',
  menuButton,
  children,
}) => {
  let textButton = (
    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
      {title}
      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
    </Menu.Button>
  )

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {type === DropdownType.button
          ? textButton
          : type === DropdownType.minimal
          ? DotsVerticalButton
          : type === DropdownType.custom
          ? menuButton
          : DotsVerticalButton}
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          {children ?? (
            <>
              <div className="px-4 py-3">
                <p className="text-sm">Signed in as</p>
                <p className="text-sm font-medium text-gray-900 truncate">
                  tom@example.com
                </p>
              </div>
              <MenuSection>
                <MenuItem>
                  <PencilAltIcon
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Edit
                </MenuItem>
                <MenuItem title="Support" />
              </MenuSection>

              <MenuSection>
                <MenuItem title="Licence" />
              </MenuSection>
              <MenuSection>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full text-left px-4 py-2 text-sm',
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </MenuSection>
            </>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export const Dropdown = Object.assign(DropdownComponent, {
  DotsVerticalButton,
  type: DropdownType,
  MenuSection,
  MenuItem,
})

export default Dropdown

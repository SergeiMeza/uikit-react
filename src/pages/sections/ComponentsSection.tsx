import { classNames } from '../../components'
import { Link } from 'react-router-dom'

const components = [
  {
    name: 'Action Panel',
    initials: 'AP',
    href: '/components/action-panel',
    bgColor: 'bg-red-600',
  },
  {
    name: 'Anchor',
    initials: 'A',
    href: '/components/avatar',
    bgColor: 'bg-rose-600',
  },
  {
    name: 'Avatar',
    initials: 'A',
    href: '/components/avatar',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'Badge',
    initials: 'B',
    href: '/components/badge',
    members: 16,
    bgColor: 'bg-fuchsia-500',
  },
  {
    name: 'Breadcrumb',
    initials: 'B',
    href: '/components/breadcrumb',
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Button',
    initials: 'B',
    href: '/components/button',
    bgColor: 'bg-violet-500',
  },
  {
    name: 'ButtonGroup',
    initials: 'BG',
    href: '/components/button-group',
    bgColor: 'bg-indigo-500',
  },
  {
    name: 'CheckboxGroup',
    initials: 'CG',
    href: '/components/checkbox-group',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Divider',
    initials: 'D',
    href: '/components/divider',
    bgColor: 'bg-lightBlue-500',
  },
  {
    name: 'Dropdown',
    initials: 'D',
    href: '/components/dropdown',
    bgColor: 'bg-sky-500',
  },
  {
    name: 'EmptyState',
    initials: 'ES',
    href: '/components/empty-state',
    bgColor: 'bg-cyan-500',
  },
  {
    name: 'FilePreview',
    initials: 'FP',
    href: '/components/file-preview',
    bgColor: 'bg-teal-500',
  },
  {
    name: 'Input',
    initials: 'I',
    href: '/components/input',
    bgColor: 'bg-emerald-500',
  },
  {
    name: 'Modal',
    initials: 'M',
    href: '/components/modal',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Navigation',
    initials: 'N',
    href: '/components/navigation',
    bgColor: 'bg-lime-500',
  },
  {
    name: 'Notification',
    initials: 'N',
    href: '/components/notification',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'RadioGroup',
    initials: 'RG',
    href: '/components/radio-group',
    bgColor: 'bg-amber-500',
  },
  {
    name: 'SelectMenu',
    initials: 'SM',
    href: '/components/select-menu',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'SlideOver',
    initials: 'SO',
    href: '/components/slide-over',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Table',
    initials: 'T',
    href: '/components/table',
    bgColor: 'bg-warmGray-500',
  },
  {
    name: 'Toggle',
    initials: 'T',
    href: '/components/toggle',
    bgColor: 'bg-trueGray-500',
  },
]
export const ComponentsSection = () => {
  return (
    <div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Components
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {components.map((component) => (
          <li
            key={component.name}
            className="col-span-1 flex shadow-sm rounded-md"
          >
            <div
              className={classNames(
                component.bgColor,
                'py-4 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
              )}
            >
              {component.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <Link
                  to={component.href}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {component.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

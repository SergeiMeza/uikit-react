import { classNames } from '../../components'
import { Link } from 'react-router-dom'

let colors = [
  'bg-rose-600',
  'bg-pink-600',
  'bg-fuchsia-500',
  'bg-purple-500',
  'bg-violet-500',
  'bg-indigo-500',
  'bg-blue-500',
  'bg-sky-500',
  'bg-cyan-500',
  'bg-teal-500',
  'bg-emerald-500',
  'bg-green-500',
  'bg-lime-500',
  'bg-yellow-500',
  'bg-amber-500',
  'bg-orange-500',
  'bg-red-500',
  // 'bg-warmGray-500',
  // 'bg-trueGray-500',
]

const components = [
  {
    name: 'Action Panel',
    initials: 'AP',
    href: '/components/action-panel',
  },
  {
    name: 'Anchor',
    initials: 'A',
    href: '/components/avatar',
  },
  {
    name: 'Avatar',
    initials: 'A',
    href: '/components/avatar',
  },
  {
    name: 'Badge',
    initials: 'B',
    href: '/components/badge',
    members: 16,
  },
  {
    name: 'Breadcrumb',
    initials: 'B',
    href: '/components/breadcrumb',
  },
  {
    name: 'Button',
    initials: 'B',
    href: '/components/button',
  },
  {
    name: 'ButtonGroup',
    initials: 'BG',
    href: '/components/button-group',
  },
  {
    name: 'CardHeading',
    initials: 'CH',
    href: '/components/card-heading',
  },
  {
    name: 'CheckboxGroup',
    initials: 'CG',
    href: '/components/checkbox-group',
  },
  {
    name: 'Divider',
    initials: 'D',
    href: '/components/divider',
  },
  {
    name: 'Dropdown',
    initials: 'D',
    href: '/components/dropdown',
  },
  {
    name: 'EmptyState',
    initials: 'ES',
    href: '/components/empty-state',
  },
  {
    name: 'FilePreview',
    initials: 'FP',
    href: '/components/file-preview',
  },
  {
    name: 'Input',
    initials: 'I',
    href: '/components/input',
  },
  {
    name: 'Modal',
    initials: 'M',
    href: '/components/modal',
  },
  {
    name: 'NavBar',
    initials: 'NB',
    href: '/components/nav-bar',
  },
  {
    name: 'Navigation',
    initials: 'N',
    href: '/components/navigation',
  },
  {
    name: 'Notification',
    initials: 'N',
    href: '/components/notification',
  },
  {
    name: 'PageHeading',
    initials: 'PH',
    href: '/components/page-heading',
  },
  {
    name: 'RadioGroup',
    initials: 'RG',
    href: '/components/radio-group',
  },
  {
    name: 'SectionHeading',
    initials: 'SH',
    href: '/components/section-heading',
  },
  {
    name: 'SelectMenu',
    initials: 'SM',
    href: '/components/select-menu',
  },
  {
    name: 'SlideOver',
    initials: 'SO',
    href: '/components/slide-over',
  },
  {
    name: 'Table',
    initials: 'T',
    href: '/components/table',
  },
  {
    name: 'Toggle',
    initials: 'T',
    href: '/components/toggle',
  },
].map((item, index) => ({ ...item, bgColor: colors[index % colors.length] }))

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

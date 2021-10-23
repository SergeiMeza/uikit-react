import { Anchor, CardHeading, classNames } from '../../components'

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
]

const components = [
  {
    name: 'Action Panel',
    initials: 'AP',
    to: '/components/action-panel',
  },
  {
    name: 'Anchor',
    initials: 'A',
    to: '/components/anchor',
  },
  {
    name: 'Avatar',
    initials: 'A',
    to: '/components/avatar',
  },
  {
    name: 'Badge',
    initials: 'B',
    to: '/components/badge',
    members: 16,
  },
  {
    name: 'Breadcrumb',
    initials: 'B',
    to: '/components/breadcrumb',
  },
  {
    name: 'Button',
    initials: 'B',
    to: '/components/button',
  },
  {
    name: 'ButtonGroup',
    initials: 'BG',
    to: '/components/button-group',
  },
  {
    name: 'CardHeading',
    initials: 'CH',
    to: '/components/card-heading',
  },
  {
    name: 'CheckboxGroup',
    initials: 'CG',
    to: '/components/checkbox-group',
  },
  {
    name: 'Dropdown',
    initials: 'D',
    to: '/components/dropdown',
  },
  {
    name: 'EmptyState',
    initials: 'ES',
    to: '/components/empty-state',
  },
  {
    name: 'FilePreview',
    initials: 'FP',
    to: '/components/file-preview',
  },
  {
    name: 'Input',
    initials: 'I',
    to: '/components/input',
  },
  {
    name: 'Modal',
    initials: 'M',
    to: '/components/modal',
  },
  {
    name: 'NavBar',
    initials: 'NB',
    to: '/components/nav-bar',
  },
  {
    name: 'Navigation',
    initials: 'N',
    to: '/components/navigation',
  },
  {
    name: 'Notification',
    initials: 'N',
    to: '/components/notification',
  },
  {
    name: 'PageHeading',
    initials: 'PH',
    to: '/components/page-heading',
  },
  {
    name: 'Pagination',
    initials: 'P',
    to: '/components/pagination',
  },
  {
    name: 'RadioGroup',
    initials: 'RG',
    to: '/components/radio-group',
  },
  {
    name: 'SectionHeading',
    initials: 'SH',
    to: '/components/section-heading',
  },
  {
    name: 'SelectMenu',
    initials: 'SM',
    to: '/components/select-menu',
  },
  {
    name: 'SidebarNavigation',
    initials: 'SN',
    to: '/components/sidebar-navigation',
  },
  {
    name: 'SlideOver',
    initials: 'SO',
    to: '/components/slide-over',
  },
  {
    name: 'StepsNavigation',
    initials: 'SN',
    to: '/components/steps-navigation',
  },
  {
    name: 'Table',
    initials: 'T',
    to: '/components/table',
  },
  {
    name: 'Toggle',
    initials: 'T',
    to: '/components/toggle',
  },
].map((item, index) => ({ ...item, bgColor: colors[index % colors.length] }))

export const ComponentsSection = () => {
  return (
    <div>
      <CardHeading title="Components" />
      <ul
        role="list"
        className="mt-4 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
                <Anchor
                  to={component.to}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {component.name}
                </Anchor>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ComponentsSection

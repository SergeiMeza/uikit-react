import { CardHeading, classNames } from '../../components'

import { Anchor } from '../../components'

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

const layouts = [
  {
    name: 'Container',
    initials: 'C',
    to: '/layouts/container',
  },
  {
    name: 'Divider',
    initials: 'D',
    to: '/layouts/divider',
  },
  {
    name: 'Stacked Layout',
    initials: 'SL',
    to: '/layouts/stacked-layout',
  },
  {
    name: 'Sidebar Layout',
    initials: 'SL',
    to: '/layouts/sidebar-layout',
  },
  {
    name: 'Sign In',
    initials: 'SI',
    to: '/layouts/sign-in',
  },
  {
    name: 'Stacked Form',
    initials: 'SF',
    to: '/layouts/stacked-form',
  },
  {
    name: 'Two Column Cards Form',
    initials: 'SF',
    to: '/layouts/two-columns-cards-form',
  },
].map((item, index) => ({ ...item, bgColor: colors[index % colors.length] }))

export const LayoutsSection = () => {
  return (
    <div>
      <CardHeading title="Layouts" />
      <ul
        role="list"
        className="mt-4 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {layouts.map((layout) => (
          <li
            key={layout.name}
            className="col-span-1 flex shadow-sm rounded-md"
          >
            <div
              className={classNames(
                layout.bgColor,
                'py-4 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
              )}
            >
              {layout.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <Anchor
                  to={layout.to}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {layout.name}
                </Anchor>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LayoutsSection

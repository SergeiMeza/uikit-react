import { classNames } from '../../components'
import { Link } from 'react-router-dom'

const layouts = [
  {
    name: 'Sign In',
    initials: 'SI',
    href: '/layouts/sign-in',
    bgColor: 'bg-rose-600',
  },
]

export const SampleLayoutsSection = () => {
  return (
    <div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Sample Layouts
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
                <Link
                  to={layout.href}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {layout.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

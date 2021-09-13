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

const pages = [
  {
    name: 'Landing Page',
    initials: 'LP',
    to: '/pages/landing-page',
  },
  {
    name: 'Pricing Page',
    initials: 'PP',
    to: '/pages/pricing-page',
  },
].map((item, index) => ({ ...item, bgColor: colors[index % colors.length] }))

export const PagesSection = () => {
  return (
    <div>
      <CardHeading title="Pages" />
      <ul
        role="list"
        className="mt-4 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {pages.map((page) => (
          <li key={page.name} className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                page.bgColor,
                'py-4 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
              )}
            >
              {page.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <Anchor
                  to={page.to}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {page.name}
                </Anchor>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PagesSection

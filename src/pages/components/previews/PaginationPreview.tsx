import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid'

import { ComponentWrapper } from '../wrappers/ComponentWrapper'

import {
  Anchor,
  Breadcrumb,
  Button,
  classNames,
  Pagination,
} from '../../../components'

const Back = () => {
  return (
    <nav className="sm:hidden" aria-label="Back">
      <Anchor
        to="/"
        className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
      >
        <ChevronLeftIcon
          className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Back
      </Anchor>
    </nav>
  )
}

export const PaginationPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'Pagination',
        to: '/components/pagination',
        current: true,
      }}
    >
      <Pagination />
    </ComponentWrapper>
  )
}

export default PaginationPreview

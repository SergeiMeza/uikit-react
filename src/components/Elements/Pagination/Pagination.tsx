import React from 'react'

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/solid'

import { Anchor, classNames } from '../..'
import { AnchorProps } from '../Anchor/Anchor'

export type PaginationProps = {
  currentPage?: number
  pages?: AnchorProps[]
  previousText?: string
  nextText?: string
  previousProps?: AnchorProps
  nextProps?: AnchorProps
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage = 4,
  pages = Array.from(Array(10).keys()).map((_) => ({ href: '#' })),
  previousText = 'Previous',
  nextText = 'Next',
  previousProps = { href: '#' },
  nextProps = { href: '#' },
}) => {
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        <Anchor
          {...previousProps}
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <ArrowNarrowLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {previousText}
        </Anchor>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pages.map((p, i) => (
          <Anchor
            {...p}
            className={
              i === currentPage
                ? 'border-primary-500 text-primary-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
            }
            key={`p-${i}`}
          >
            {i + 1}
          </Anchor>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <Anchor
          {...nextProps}
          className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          {nextText}
          <ArrowNarrowRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Anchor>
      </div>
    </nav>
  )
}

export const Pagination = Object.assign(PaginationComponent, {})

export default Pagination

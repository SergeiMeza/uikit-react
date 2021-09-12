import { Link } from 'react-router-dom'

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import React from 'react'
import { classNames } from '../..'

const samplePages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export type BreadcrumbProps = {
  type?: BreadcrumbType
  pages?: any[]
  homeName?: string
  homeRef?: string
  homeIcon?: JSX.Element
}

enum BreadcrumbType {
  containedBar = 'containedBar',
  fullWidthBar = 'fullWidthBar',
  simpleWithChevrons = 'simpleWithChevrons',
  simpleWithSlashes = 'simpleWithSlashes',
}

const BreadcrumbComponent: React.FC<BreadcrumbProps> = ({
  type = BreadcrumbType.fullWidthBar,
  pages = samplePages,
  homeName = 'Home',
  homeRef = '#',
  // homeIcon = null,
  homeIcon = <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />,
}) => {
  let containedBar = (
    <nav className="flex" aria-label="Breadcrumb">
      <ol
        role="list"
        className="bg-white rounded-md shadow px-6 flex space-x-4"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link to={homeRef} className="text-gray-400 hover:text-gray-500">
              {homeIcon ? (
                <>
                  {homeIcon}
                  <span className="sr-only">{homeName}</span>
                </>
              ) : (
                <>
                  <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    {homeName}
                  </span>
                </>
              )}
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link
                to={page.href}
                className={classNames(
                  page.current
                    ? 'text-primary-500 hover:text-primary-700'
                    : 'text-gray-500 hover:text-gray-700',
                  'ml-4 text-sm font-medium',
                )}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )

  let fullWidthBar = (
    <nav
      className="bg-white border-b border-gray-200 flex"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link to={homeRef} className="text-gray-400 hover:text-gray-500">
              {homeIcon ? (
                <>
                  {homeIcon}
                  <span className="sr-only">{homeName}</span>
                </>
              ) : (
                <>
                  <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    {homeName}
                  </span>
                </>
              )}
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link
                to={page.href}
                className={classNames(
                  page.current
                    ? 'text-primary-500 hover:text-primary-700'
                    : 'text-gray-500 hover:text-gray-700',
                  'ml-4 text-sm font-medium',
                )}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )

  let simpleWithChevrons = (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link to={homeRef} className="text-gray-400 hover:text-gray-500">
              {homeIcon ? (
                <>
                  {homeIcon}
                  <span className="sr-only">{homeName}</span>
                </>
              ) : (
                <>
                  <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    {homeName}
                  </span>
                </>
              )}
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Link
                to={page.href}
                className={classNames(
                  page.current
                    ? 'text-primary-500 hover:text-primary-700'
                    : 'text-gray-500 hover:text-gray-700',
                  'ml-4 text-sm font-medium',
                )}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )

  let simpleWithSlashes = (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link to={homeRef} className="text-gray-400 hover:text-gray-500">
              {homeIcon ? (
                <>
                  {homeIcon}
                  <span className="sr-only">{homeName}</span>
                </>
              ) : (
                <>
                  <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    {homeName}
                  </span>
                </>
              )}
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                to={page.href}
                className={classNames(
                  page.current
                    ? 'text-primary-500 hover:text-primary-700'
                    : 'text-gray-500 hover:text-gray-700',
                  'ml-4 text-sm font-medium',
                )}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )

  switch (type) {
    case BreadcrumbType.containedBar:
      return containedBar
    case BreadcrumbType.fullWidthBar:
      return fullWidthBar
    case BreadcrumbType.simpleWithChevrons:
      return simpleWithChevrons
    case BreadcrumbType.simpleWithSlashes:
      return simpleWithSlashes
    default:
      return fullWidthBar
  }
}

export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  type: BreadcrumbType,
})

export default Breadcrumb

import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import Button from '../Button/Button'

export type EmptyStateProps = {
  type?: EmptyStateType
  icon?: JSX.Element
  title?: string
  description?: string
  button?: JSX.Element
  onClick?: () => void
}

enum EmptyStateType {
  simple = 'simple',
  dashedBorder = 'dashedBorder',
}

const EmptyStateComponent: React.FC<EmptyStateProps> = ({
  type = EmptyStateType.dashedBorder,
  icon = (
    <svg
      className="mx-auto h-12 w-12 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
      />
    </svg>
  ),
  title = 'Create a new database',
  description = 'Get started by creating a new database',
  button = (
    <Button onClick={() => console.log('on call to action')}>
      <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
      New Project
    </Button>
  ),
  onClick = () => console.log('on call to action'),
}) => {
  const dashedBorderView = (
    <button
      type="button"
      className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      <>
        {icon}
        {title && (
          <span className="mt-2 block text-sm font-medium text-gray-900">
            {title}
          </span>
        )}
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </>
    </button>
  )

  const simpleView = (
    <div className="text-center">
      {icon}
      {title && (
        <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
      )}
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
      <div className="mt-6">{button}</div>
    </div>
  )

  return type === EmptyStateType.dashedBorder ? dashedBorderView : simpleView
}

export const EmptyState = Object.assign(EmptyStateComponent, {})

export default EmptyState
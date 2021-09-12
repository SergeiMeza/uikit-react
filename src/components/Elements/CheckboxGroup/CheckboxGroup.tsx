import React, { ChangeEvent, useState } from 'react'

import { UseFormRegister } from 'react-hook-form'

let sampleData = [
  {
    name: 'comments',
    title: 'Comments',
    description: 'Get notified when someones posts a comment on a posting.',
    checked: false,
  },
  {
    name: 'candidates',
    title: 'Candidates',
    description: 'Get notified when a candidate applies for a job.',
    checked: false,
  },
  {
    name: 'offers',
    title: 'Offers',
    description: 'Get notified when a candidate accepts or rejects an offer.',
    checked: false,
  },
]

export type CheckboxGroupProps = {
  label?: string
  hiddenLabel?: boolean
  items?: any[]
  onItemsChange?: (data: any[]) => void
  register?: UseFormRegister<any>
}

const CheckboxGroupComponent: React.FC<CheckboxGroupProps> = ({
  label = 'Notifications',
  hiddenLabel = false,
  items = sampleData,
  register = undefined,
}) => {
  return (
    <fieldset className="space-y-5">
      {hiddenLabel ? (
        <legend className="sr-only">{label}</legend>
      ) : (
        <legend className="text-base font-medium text-gray-900">{label}</legend>
      )}
      {items.map((item) => (
        <div key={item.name} className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id={item.name}
              aria-describedby={`${item.name}-description`}
              type="checkbox"
              className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
              {...(register ? register(item.name) : {})}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor={item.name} className="font-medium text-gray-700">
              {item.title}
            </label>
            <p id={`${item.name}-description`} className="text-gray-500">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </fieldset>
  )
}

export const CheckboxGroup = Object.assign(CheckboxGroupComponent, {})

export default CheckboxGroup

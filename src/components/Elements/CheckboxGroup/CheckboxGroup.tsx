import React, { ChangeEvent, useState } from 'react'

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
  name?: string
  items?: any[]
  onItemsChange?: (data: any[]) => void
}

const CheckboxGroupComponent: React.FC<CheckboxGroupProps> = ({
  name = 'Notifications',
  items = sampleData,
  onItemsChange = (data) => {
    console.log(data)
  },
}) => {
  const [checkItems, setCheckItems] = useState(items.slice())

  function handleItemChange(element: ChangeEvent<HTMLInputElement>) {
    let _checkItems = checkItems.slice()
    let itemIndex = _checkItems.findIndex(
      (item) => item.name == element.target.name,
    )
    _checkItems[itemIndex].checked = element.target.checked
    setCheckItems(_checkItems)
    onItemsChange(_checkItems)
  }

  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">{name}</legend>
      {checkItems.map((item) => (
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id={item.name}
              aria-describedby={`${item.name}-description`}
              name={item.name}
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              defaultChecked={item.checked}
              onChange={handleItemChange}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">
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

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  Fragment,
  useEffect,
  useState,
} from 'react'
import { classNames } from '../../../helpers/methods'

const sampleOptions = [
  { name: 'USA', value: 'usa' },
  { name: 'Canada', value: 'canada' },
  { name: 'EU', value: 'eu' },
]

export type SelectMenuProps = {
  type?: SelectMenuType
  name?: string
  label?: string
  options?: any[]
  selectedItem?: any
  onItemSelected?: (item: any) => void
}

enum SelectMenuType {
  native = 'native',
  custom = 'custom',
}

const SelectMenuComponent: React.FC<SelectMenuProps> = ({
  type = SelectMenuType.native,
  name = 'location',
  label = 'Location',
  options = sampleOptions,
  selectedItem = options[0],
  onItemSelected = (item: any) => console.log('item selected', item.name),
}) => {
  const [selected, setSelected] = useState(selectedItem)

  useEffect(() => {
    if (selected) {
      onItemSelected(selected)
    }
  }, [selected, onItemSelected])

  function handleNativeChange(element: ChangeEvent<HTMLSelectElement>) {
    let selectedElement = options.find(
      (item) => item.value === element.target.value,
    )
    onItemSelected(selectedElement)
  }

  let nativeSelectMenu = (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue={selectedItem?.value}
        onChange={handleNativeChange}
      >
        {options.map((item) => (
          <option key={item.name} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )

  let customSelectMenu = (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            {label}
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {options.map((options) => (
                  <Listbox.Option
                    key={`${options.name}`}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9',
                      )
                    }
                    value={options}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          )}
                        >
                          {options.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )

  return type === SelectMenuType.native ? nativeSelectMenu : customSelectMenu
}

export const SelectMenu = Object.assign(SelectMenuComponent, {
  type: SelectMenuType,
})

export default SelectMenu

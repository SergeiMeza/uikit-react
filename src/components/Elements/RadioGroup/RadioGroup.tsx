import React, { useState } from 'react'
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import { classNames } from '../../helpers/methods'

const plans = [
  {
    name: 'Hobby',
    ram: '8GB',
    cpus: '4 CPUs',
    disk: '160 GB SSD disk',
    price: '$40',
  },
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '256 GB SSD disk',
    price: '$80',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
    price: '$160',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
    price: '$240',
  },
]

export type RadioGroupProps = {
  type?: RadioGroupType
  items?: any[]
  selectedItem?: any
  onSelectedItem?: (item: any) => void
  renderItem?: (item: any, active: boolean, selected: boolean) => JSX.Element
}

enum RadioGroupType {
  card = 'card',
  list = 'list',
}

const RadioGroupComponent: React.FC<RadioGroupProps> = ({
  type = RadioGroupType.card,
  items = plans,
  selectedItem = plans[0],
  onSelectedItem = (item) => {
    console.log(item.name)
  },
  renderItem = (item, active, selected) => {
    // ## Card
    // return (
    //   <>
    //     <div className="flex items-center">
    //       <div className="text-sm">
    //         <HeadlessRadioGroup.Label
    //           as="p"
    //           className="font-medium text-gray-900"
    //         >
    //           {item.name}
    //         </HeadlessRadioGroup.Label>
    //         <HeadlessRadioGroup.Description as="div" className="text-gray-500">
    //           <p className="sm:inline">
    //             {item.ram} / {item.cpus}
    //           </p>{' '}
    //           <span className="hidden sm:inline sm:mx-1" aria-hidden="true">
    //             &middot;
    //           </span>{' '}
    //           <p className="sm:inline">{item.disk}</p>
    //         </HeadlessRadioGroup.Description>
    //       </div>
    //     </div>
    //     <HeadlessRadioGroup.Description
    //       as="div"
    //       className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
    //     >
    //       <div className="font-medium text-gray-900">{item.price}</div>
    //       <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
    //     </HeadlessRadioGroup.Description>
    //     <div
    //       className={classNames(
    //         selected ? 'border-primary-500' : 'border-transparent',
    //         'absolute -inset-px rounded-lg border-2 pointer-events-none',
    //       )}
    //       aria-hidden="true"
    //     />
    //   </>
    // )

    return (
      <>
        <span
          className={classNames(
            selected
              ? 'bg-primary-600 border-transparent'
              : 'bg-white border-gray-300',
            active ? 'ring-2 ring-offset-2 ring-primary-500' : '',
            'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center',
          )}
          aria-hidden="true"
        >
          <span className="rounded-full bg-white w-1.5 h-1.5" />
        </span>
        <div className="ml-3 flex flex-col">
          <HeadlessRadioGroup.Label
            as="span"
            className={classNames(
              selected ? 'text-primary-900' : 'text-gray-900',
              'block text-sm font-medium',
            )}
          >
            {item.name}
          </HeadlessRadioGroup.Label>
          <HeadlessRadioGroup.Description
            as="span"
            className={classNames(
              selected ? 'text-primary-700' : 'text-gray-500',
              'block text-sm',
            )}
          >
            {item.description}
          </HeadlessRadioGroup.Description>
        </div>
      </>
    )
  },
}) => {
  const [selected, setSelected] = useState<any>(selectedItem)

  const cardWrapperClassNames = (active: boolean) =>
    classNames(
      active ? 'ring-1 ring-offset-2 ring-primary-500' : '',
      'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none',
    )

  const listWrapperClassNames = (index: number, active: boolean) =>
    classNames(
      index === 0 ? 'rounded-tl-md rounded-tr-md' : '',
      index === items.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
      active ? 'bg-primary-50 border-primary-200 z-10' : 'border-gray-200',
      'relative border p-4 flex cursor-pointer focus:outline-none',
    )

  const cardGroupClassNames = 'space-y-4'

  const listGroupClassNames = 'bg-white rounded-md -space-y-px'

  let cardOrListRadioGroup = (
    <HeadlessRadioGroup
      value={selected}
      onChange={(item) => {
        setSelected(item)
        onSelectedItem(item)
      }}
    >
      <HeadlessRadioGroup.Label className="sr-only">
        Server size
      </HeadlessRadioGroup.Label>
      <div
        className={
          type === RadioGroupType.card
            ? cardGroupClassNames
            : listGroupClassNames
        }
      >
        {items.map((item, index) => (
          <HeadlessRadioGroup.Option
            key={item.name}
            value={item}
            className={({ active }) =>
              type === RadioGroupType.card
                ? cardWrapperClassNames(active)
                : listWrapperClassNames(index, active)
            }
          >
            {({ active, checked }) => renderItem(item, active, checked)}
          </HeadlessRadioGroup.Option>
        ))}
      </div>
    </HeadlessRadioGroup>
  )

  return cardOrListRadioGroup
}

export const RadioGroup = Object.assign(RadioGroupComponent, {
  type: RadioGroupType,
})

export default RadioGroup

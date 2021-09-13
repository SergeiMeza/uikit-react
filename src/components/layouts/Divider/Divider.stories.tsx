import { PlusSmIcon } from '@heroicons/react/outline'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../../Elements/Button/Button'

import Divider from './Divider'

export default {
  title: 'Elements/Divider',
  component: Divider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => (
  <>
    <div className="py-20 space-y-20">
      <Divider {...args} />
      <Divider {...args}>
        <Divider.Button onClick={() => console.log('click!')}>
          <PlusSmIcon
            className="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>Button text</span>
        </Divider.Button>
      </Divider>
      <Divider {...args}>{foo}</Divider>
    </div>
  </>
)

const foo = (
  <>
    <button className="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <PlusSmIcon
        className="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
      <span>Button text</span>
    </button>
  </>
)

export const ThemeDivider = Template.bind({})

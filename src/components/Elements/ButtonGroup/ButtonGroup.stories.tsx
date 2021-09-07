import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonGroup from './ButtonGroup'

export default {
  title: 'Elements/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <>
    <div className="space-y-12">
      <div>
        <ButtonGroup />
      </div>
      <div>
        <ButtonGroup.LeftButton className="">
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </ButtonGroup.LeftButton>
        <ButtonGroup.RightButton>
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </ButtonGroup.RightButton>
      </div>
    </div>
  </>
)

export const ThemeButtonGroup = Template.bind({})

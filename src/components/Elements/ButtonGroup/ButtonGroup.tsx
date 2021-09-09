import React from 'react'
import { classNames } from '../../../helpers/methods'

import Button, { ButtonProps } from '../Button/Button'

export type ButtonGroupProps = {
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const ButtonGroupComponent: React.FC<ButtonGroupProps> = ({
  className = '',
  children,
  onMouseEnter = () => {
    console.log('mouse entered item')
  },
  onMouseLeave = () => {
    console.log('mouse leaved item')
  },
}) => {
  return (
    <span
      className={classNames(
        'relative z-0 inline-flex shadow-sm rounded-md',
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children ?? (
        <>
          <LeftButton />
          <MiddleButton />
          <RightButton />
        </>
      )}
    </span>
  )
}

const LeftButton: React.FC<ButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <Button
      className={classNames(
        className,
        'relative px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10',
      )}
      buttonType={Button.buttonType.transparent}
      {...props}
    >
      {children ?? 'Years'}
    </Button>
  )
}

const MiddleButton: React.FC<ButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <Button
      className={classNames(
        className,
        '-ml-px relative px-2 py-2 border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10',
      )}
      buttonType={Button.buttonType.transparent}
      {...props}
    >
      {children ?? 'Months'}
    </Button>
  )
}

const RightButton: React.FC<ButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <Button
      className={classNames(
        className,
        '-ml-px relative px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10',
      )}
      buttonType={Button.buttonType.transparent}
      {...props}
    >
      {children ?? 'Days'}
    </Button>
  )
}

export const ButtonGroup = Object.assign(ButtonGroupComponent, {
  LeftButton,
  MiddleButton,
  RightButton,
})

export default ButtonGroup

import { PlusSmIcon } from '@heroicons/react/solid'
import React from 'react'
import { classNames } from '../../helpers/methods'
import Button, { ButtonProps } from '../Button/Button'

export type DividerProps = {
  title?: string
  titleSize?: DividerTitleSize
  contentPosition?: DividerContentPosition
}

enum DividerContentPosition {
  start = 'justify-start',
  center = 'justify-center',
  end = 'justify-end',
}

enum DividerTitleSize {
  small = 'text-sm text-gray-500',
  medium = 'text-base font-medium text-gray-700',
  large = 'text-lg font-medium text-gray-900',
}

const DividerText: React.FC = ({ children }) => {
  return <span className="px-2 bg-white text-sm text-gray-500">{children}</span>
}

const DividerButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      className="inline-flex items-center py-1.5 shadow-sm"
      buttonType={Button.buttonType.outline}
      shape={Button.shape.round}
      size={Button.size.medium}
      {...props}
    >
      {children ?? (
        <>
          <PlusSmIcon
            className="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>Button text</span>
        </>
      )}
    </Button>
  )
}

const DividerComponent: React.FC<DividerProps> = ({
  title,
  titleSize = DividerTitleSize.small,
  contentPosition = DividerContentPosition.center,
  children,
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className={classNames(contentPosition, 'relative flex')}>
        {children ?? (
          <span className={classNames(titleSize, 'px-2 bg-white')}>
            {title}
          </span>
        )}
      </div>
    </div>
  )
}

export const Divider = Object.assign(DividerComponent, {
  Text: DividerText,
  Button: DividerButton,
  titleSize: DividerTitleSize,
  contentPosition: DividerContentPosition,
})

export default Divider

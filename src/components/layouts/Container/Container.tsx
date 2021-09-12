import React from 'react'
import { classNames } from '../..'

export type ContainerProps = {
  className?: string
  narrowContentConstraint?: string
  containerType?: ContainerType
}

enum ContainerType {
  paddedContent = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  fullWidthMobilePaddedContent = 'max-w-7xl mx-auto sm:px-6 lg:px-8',
  fullWidthMobilePaddedContentBreakpoint = 'container mx-auto px-4 sm:px-6 lg:px-8',
  paddedContentNarrow = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
}

const ContainerComponent: React.FC<ContainerProps> = ({
  className = '',
  containerType = ContainerType.fullWidthMobilePaddedContent,
  narrowContentConstraint = 'max-w-3xl',
  children,
}) => {
  return (
    <div className={classNames(className, containerType)}>
      {containerType === ContainerType.paddedContentNarrow ? (
        <div className={classNames(narrowContentConstraint, 'mx-auto')}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export const Container = Object.assign(ContainerComponent, {
  type: ContainerType,
})

export default Container

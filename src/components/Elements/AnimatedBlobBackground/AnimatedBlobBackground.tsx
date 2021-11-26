import React from 'react'
import { classNames } from '../..'

export type AnimatedBlobBackgroundProps = {
  type?: AnimatedBlobBackgroundType
  colors?: string[]
  content?: JSX.Element
}

enum AnimatedBlobBackgroundType {
  small,
  medium,
  large,
  extraLarge,
}

const AnimatedBlobBackgroundComponent: React.FC<AnimatedBlobBackgroundProps> = ({
  type = AnimatedBlobBackgroundType.small,
  colors = ['bg-purple-300', 'bg-yellow-300', 'bg-pink-300', 'bg-skyBlue-300'],
  content,
  children,
}) => {
  let sampleContent = (
    <div className="space-y-4">
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-48 bg-gray-300 rounded" />
        </div>
        <div>
          <div className="w-24 h-10 rounded-lg bg-purple-300" />
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-56 bg-gray-300 rounded" />
        </div>
        <div>
          <div className="w-24 h-10 rounded-lg bg-yellow-300" />
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-44 bg-gray-300 rounded" />
        </div>
        <div>
          <div className="w-24 h-10 rounded-lg bg-pink-300" />
        </div>
      </div>
    </div>
  )

  let containerWidth =
    type === AnimatedBlobBackgroundType.extraLarge
      ? 'max-w-3xl'
      : type === AnimatedBlobBackgroundType.large
      ? 'max-w-3xl'
      : type === AnimatedBlobBackgroundType.medium
      ? 'max-w-2xl'
      : 'max-w-lg'

  let smallBackground = (
    <>
      <div
        className={classNames(
          colors[0 % colors.length],
          'absolute top-0 -left-8',
          'w-80 h-80 rounded-full',
          'mix-blend-multiply filter blur-2xl opacity-70',
          'animate-blob ease-in-out',
        )}
      />
      <div
        className={classNames(
          colors[1 % colors.length],
          'absolute bottom-0 -right-8',
          'w-80 h-80 rounded-full',
          'mix-blend-multiply filter blur-2xl opacity-70',
          'animate-blob ease-in-out',
          'animation-delay-4000',
        )}
      />
    </>
  )

  let mediumBackground = (
    <>
      <div
        className={classNames(
          colors[0 % colors.length],
          'absolute top-0 -left-2',
          'w-96 h-96 rounded-full',
          'mix-blend-multiply filter blur-2xl opacity-70',
          'animate-blob ease-in-out',
        )}
      />
      <div
        className={classNames(
          colors[1 % colors.length],
          'absolute bottom-0 -right-2',
          'w-96 h-96 rounded-full',
          'mix-blend-multiply filter blur-2xl opacity-70',
          'animate-blob ease-in-out',
          'animation-delay-4000',
        )}
      />
    </>
  )

  let largeBackground = (
    <>
      <div
        className={classNames(
          colors[0 % colors.length],
          'absolute -top-4 -left-4',
          'w-80 h-80 rounded-full',
          'mix-blend-multiply filter blur-2xl opacity-80',
          'animate-blob ease-in-out',
        )}
      />
      <div
        className={classNames(
          colors[1 % colors.length],
          'absolute top-10 right-0 left-0 mx-auto',
          'w-64 h-64 rounded-full',
          'mix-blend-multiply filter blur-3xl opacity-70',
          'animate-blob ease-in-out',
          'animation-delay-2000',
        )}
      />
      <div
        className={classNames(
          colors[2 % colors.length],
          'absolute -bottom-4 -right-4',
          'w-72 h-72 rounded-full',
          'mix-blend-multiply filter blur-2xl opacity-60',
          'animate-blob ease-in-out',
          'animation-delay-4000',
        )}
      />
    </>
  )
  let extraLargeBackground = (
    <>
      <div
        className={classNames(
          colors[0 % colors.length],
          'absolute -top-4 left-8',
          'w-96 h-96 rounded-full',
          'mix-blend-multiply filter blur-2xl opacity-80',
          'animate-blob ease-in-out',
        )}
      />
      <div
        className={classNames(
          colors[1 % colors.length],
          'absolute -top-4 right-8',
          'w-72 h-72 rounded-full',
          'mix-blend-multiply filter blur-3xl opacity-60',
          'animate-blob ease-in-out',
          'animation-delay-2000',
        )}
      />
      <div
        className={classNames(
          colors[3 % colors.length],
          'absolute -bottom-8 right-12',
          'w-80 h-80 rounded-full',
          'mix-blend-multiply filter blur-2xl opacity-70',
          'animate-blob ease-in-out',
          'animation-delay-6000',
        )}
      />
      <div
        className={classNames(
          colors[2 % colors.length],
          'absolute -bottom-4 left-0',
          'w-72 h-72 rounded-full',
          'mix-blend-multiply filter blur-3xl opacity-70',
          'animate-blob ease-in-out',
          'animation-delay-4000',
        )}
      />
    </>
  )

  return (
    <div className="flex items-center justify-center px-16">
      <div className={classNames('relative w-full', containerWidth)}>
        {type === AnimatedBlobBackgroundType.small
          ? smallBackground
          : type === AnimatedBlobBackgroundType.medium
          ? mediumBackground
          : type === AnimatedBlobBackgroundType.large
          ? largeBackground
          : extraLargeBackground}

        <div className="m-8 relative">
          {content ?? children ?? sampleContent}
        </div>
      </div>
    </div>
  )
}

const AnimatedBlobBackground = Object.assign(AnimatedBlobBackgroundComponent, {
  type: AnimatedBlobBackgroundType,
})

export default AnimatedBlobBackground

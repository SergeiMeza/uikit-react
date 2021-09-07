import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { classNames } from '../../../helpers/methods'
import Button from '../Button/Button'

export type SlideOverProps = {
  header?: JSX.Element
  title?: string | JSX.Element
  backgroundOverlay?: boolean
  stickyFooter?: JSX.Element
  closeButtonPosition?: SlideOverCloseButtonPosition
  type?: SlideOverType
  show: boolean
  setShow: (show: boolean) => void
}

enum SlideOverCloseButtonPosition {
  inside = 'inside',
  outside = 'outside',
}

enum SlideOverType {
  wide = 'max-w-2xl',
  default = 'max-w-md',
}

export type SlideOverTitleProps = {
  title?: string
  textColor?: string
}

const SlideOverTitle: React.FC<SlideOverTitleProps> = ({
  title = undefined,
  textColor = 'text-gray-900',
  children,
}) => (
  <Dialog.Title className={classNames('text-lg font-medium', textColor)}>
    {children ?? title}
  </Dialog.Title>
)

export type SlideOverHeaderProps = {
  backgroundColor?: string
  closeButtonColor?: string
  setShow: (show: boolean) => void
}

const SlideOverHeader: React.FC<SlideOverHeaderProps> = ({
  backgroundColor = 'bg-gray-50',
  closeButtonColor = 'text-gray-400 hover:text-gray-500',
  setShow,
  children,
}) => {
  return (
    <div className={classNames('px-4 py-6 sm:px-6', backgroundColor)}>
      <div className="flex items-start justify-between space-x-3">
        {children ?? (
          <div className="space-y-1">
            <SlideOverTitle>New project</SlideOverTitle>
            <p className="text-sm text-gray-500">
              Get started by filling in the information below to create your new
              project.
            </p>
          </div>
        )}
        {/* closeButton */}
        <div className="h-7 flex items-center">
          <button
            type="button"
            className={classNames(closeButtonColor)}
            onClick={() => setShow(false)}
          >
            <span className="sr-only">Close panel</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export type SlideOverStickyFooterProps = {
  border?: boolean
  setShow: (show: boolean) => void
}

const SlideOverStickyFooter: React.FC<SlideOverStickyFooterProps> = ({
  setShow,
  border = false,
  children,
}) => {
  return (
    <div
      className={classNames(
        ...(border ? ['border-t border-gray-200'] : []),
        'flex-shrink-0 px-4 py-4 flex justify-end',
      )}
    >
      {children ?? (
        <>
          <Button
            className="py-2 px-4"
            type={Button.type.outline}
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>
          <Button className="ml-4 py-2 px-4">Save</Button>
        </>
      )}
    </div>
  )
}

const SlideOverComponent: React.FC<SlideOverProps> = ({
  header = undefined,
  title = 'Panel Title',
  backgroundOverlay = true,
  stickyFooter = undefined,
  closeButtonPosition = SlideOverCloseButtonPosition.inside,
  type = SlideOverType.default,
  children,
  show,
  setShow,
}) => {
  let templateContent = (
    <div className="absolute inset-0 px-4 sm:px-6">
      <div
        className="h-full border-2 border-dashed border-gray-200"
        aria-hidden="true"
      />
    </div>
  )

  let defaultHeader = (
    <div className="px-4 py-6 sm:px-6">
      <div className="flex items-start justify-between">
        {typeof title === 'string' ? <SlideOverTitle title={title} /> : title}
        {closeButtonPosition === SlideOverCloseButtonPosition.inside && (
          <div className="ml-3 h-7 flex items-center">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setShow(false)}
            >
              <span className="sr-only">Close panel</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  )

  let customHeader = (
    <SlideOverHeader setShow={setShow}>{header}</SlideOverHeader>
  )

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setShow}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className={classNames(
                ...(backgroundOverlay
                  ? ['bg-gray-500 bg-opacity-75 transition-opacity']
                  : []),
                'absolute inset-0',
              )}
            />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className={classNames('w-screen', type)}>
                {closeButtonPosition ===
                  SlideOverCloseButtonPosition.outside && (
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setShow(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                )}
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  {header ?? defaultHeader}

                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {children ?? templateContent}
                  </div>
                  {stickyFooter}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export const SlideOver = Object.assign(SlideOverComponent, {
  closeButtonPosition: SlideOverCloseButtonPosition,
  type: SlideOverType,
  Title: SlideOverTitle,
  Header: SlideOverHeader,
  Footer: SlideOverStickyFooter,
})

export default SlideOver

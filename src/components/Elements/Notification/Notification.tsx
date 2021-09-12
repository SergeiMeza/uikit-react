import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import React, { Fragment, useEffect } from 'react'
import { classNames } from '../../helpers/methods'

export type NotificationProps = {
  show: boolean
  setShow: (show: boolean) => void
  alignment?: NotificationContentAlignment
  autoDismiss?: boolean
  dismissDelay?: number
  icon?: JSX.Element
  avatar?: JSX.Element
  title?: string | JSX.Element
  content?: string | JSX.Element
  button?: JSX.Element
  onClose?: () => void
}

export type NotificationIconProps = {
  size?: string
  color?: string
}

const NotificationSuccessIcon: React.FC<NotificationIconProps> = ({
  size = 'h-6 w-6',
  color = 'text-green-400',
}) => {
  return (
    <CheckCircleIcon className={classNames(size, color)} aria-hidden="true" />
  )
}

const NotificationFailureIcon: React.FC<NotificationIconProps> = ({
  size = 'h-6 w-6',
  color = 'text-red-400',
}) => {
  return <XCircleIcon className={classNames(size, color)} aria-hidden="true" />
}

enum NotificationContentAlignment {
  top = 'items-top',
  center = 'items-center',
  bottom = 'items-end',
}

const NotificationComponent: React.FC<NotificationProps> = ({
  show,
  setShow,
  autoDismiss = true,
  dismissDelay = 3000,
  alignment = NotificationContentAlignment.top,
  icon = <NotificationSuccessIcon />,
  avatar = undefined,
  title = 'Successfully saved!',
  content = 'Anyone with a link can now view this file.',
  // content = undefined,
  // button = <Button>Undo</Button>,
  button = undefined,
  onClose = () => {},
  children,
}) => {
  useEffect(() => {
    if (show && autoDismiss) {
      setTimeout(() => {
        setShow(false)
        onClose()
      }, dismissDelay)
    }
  }, [autoDismiss, show, dismissDelay, onClose, setShow])

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className={classNames('flex', alignment)}>
                  <div className="flex-shrink-0">{icon ?? avatar}</div>
                  {children ? (
                    <div className="ml-3 w-0 flex-1 pt-0.5">{children}</div>
                  ) : (
                    <div className="flex items-center flex-1">
                      <div className="ml-3 w-0 flex-1">
                        {typeof title === 'string' ? (
                          <p className="text-sm font-medium text-gray-900">
                            {title}
                          </p>
                        ) : (
                          title
                        )}
                        {typeof content === 'string' ? (
                          <p className="mt-1 text-sm text-gray-500">
                            {content}
                          </p>
                        ) : (
                          content
                        )}
                      </div>
                      <div>{button}</div>
                    </div>
                  )}
                  {/* close button */}
                  <div className="ml-4 flex-shrink-0 flex">
                    <div>
                      <button
                        className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        onClick={() => {
                          setShow(false)
                          onClose()
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

export const Notification = Object.assign(NotificationComponent, {
  SuccessIcon: NotificationSuccessIcon,
  FailureIcon: NotificationFailureIcon,
  alignment: NotificationContentAlignment,
})

export default Notification

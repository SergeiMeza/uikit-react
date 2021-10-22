import React, { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import {
  BanIcon,
  BellIcon,
  CheckIcon,
  DocumentTextIcon,
  ExclamationIcon,
  FingerPrintIcon,
  GiftIcon,
  HeartIcon,
  InformationCircleIcon,
  LockClosedIcon,
  LockOpenIcon,
  MailIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  XIcon,
} from '@heroicons/react/outline'
import { classNames } from '../../helpers/methods'
import Button, { ButtonProps } from '../Button/Button'

export type ModalProps = {
  show: boolean
  setShow: (show: boolean) => void
}

export type ModalIconProps = {
  bgColor?: string
  iconColor?: string
  shape?: string
  bgSize?: string
  iconSize?: string
}

const ModalSuccessIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-green-100',
  iconColor = 'text-green-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <CheckIcon className={classNames(iconColor, iconSize)} aria-hidden="true" />
  </div>
)

const ModalFailureIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-red-100',
  iconColor = 'text-red-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <XIcon className={classNames(iconColor, iconSize)} aria-hidden="true" />
  </div>
)

const ModalQuestionMarkIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <QuestionMarkCircleIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

const ModalBellIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <BellIcon className={classNames(iconColor, iconSize)} aria-hidden="true" />
  </div>
)

const ModalInformationIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <InformationCircleIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

const ModalBanIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <BanIcon className={classNames(iconColor, iconSize)} aria-hidden="true" />
  </div>
)

const ModalDocumentIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <DocumentTextIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

const ModalAlertIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-yellow-100',
  iconColor = 'text-yellow-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <ExclamationIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

const ModalGiftIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-green-100',
  iconColor = 'text-green-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <GiftIcon className={classNames(iconColor, iconSize)} aria-hidden="true" />
  </div>
)

const ModalSecurityIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <FingerPrintIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

const ModalHeartIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-red-100',
  iconColor = 'text-red-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <HeartIcon className={classNames(iconColor, iconSize)} aria-hidden="true" />
  </div>
)

const ModalMailIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <MailIcon className={classNames(iconColor, iconSize)} aria-hidden="true" />
  </div>
)

const ModalLockClosedIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <LockClosedIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

const ModalLockOpenIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <LockOpenIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

const ModalSparklesIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-yellow-100',
  iconColor = 'text-yellow-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <SparklesIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

const ModalTrendingUpIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-green-100',
  iconColor = 'text-green-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <TrendingUpIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

const ModalTrendingDownIcon: React.FC<ModalIconProps> = ({
  bgColor = 'bg-red-100',
  iconColor = 'text-red-600',
  shape = 'rounded-full',
  bgSize = 'h-12 w-12',
  iconSize = 'h-6 w-6',
}) => (
  <div
    className={classNames(
      bgColor,
      bgSize,
      shape,
      'mx-auto flex items-center justify-center',
    )}
  >
    <TrendingDownIcon
      className={classNames(iconColor, iconSize)}
      aria-hidden="true"
    />
  </div>
)

type ModalCardProps = {
  icon?: JSX.Element
  title?: string | JSX.Element
  body?: string | JSX.Element
  setShow: (show: boolean) => void
  cta?: JSX.Element
}

const ModalCardButton: React.FC<ButtonProps> = ({
  className = '',
  title = 'Dismiss',
  ...props
}) => (
  <Button
    className={classNames(
      className,
      'inline-flex justify-center w-full px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm',
    )}
    title={title}
    {...props}
  />
)

const ModalCard: React.FC<ModalCardProps> = ({
  icon = <ModalTrendingUpIcon />,
  title = 'Your company products are trending right now',
  body = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.',
  setShow = () => {},
  cta = null,
}) => {
  return (
    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <div>
        {icon}
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            {title}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{body}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        {cta ?? (
          <>
            <ModalCardButton
              buttonType={Button.buttonType.outline}
              onClick={() => setShow(false)}
            />
            <ModalCardButton title="Promote" onClick={() => setShow(false)} />
          </>
        )}
      </div>
    </div>
  )
}

const ModalComponent: React.FC<ModalProps> = ({ show, setShow, children }) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setShow}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom overflow-hidden transform transition-all sm:align-middle sm:max-w-sm sm:w-full">
              {children ?? <ModalCard setShow={setShow} />}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export const Modal = Object.assign(ModalComponent, {
  Card: ModalCard,
  SuccessIcon: ModalSuccessIcon,
  FailureIcon: ModalFailureIcon,
  QuestionMarkIcon: ModalQuestionMarkIcon,
  BellIcon: ModalBellIcon,
  InformationIcon: ModalInformationIcon,
  BanIcon: ModalBanIcon,
  DocumentIcon: ModalDocumentIcon,
  AlertIcon: ModalAlertIcon,
  SecurityIcon: ModalSecurityIcon,
  GiftIcon: ModalGiftIcon,
  HeartIcon: ModalHeartIcon,
  MailIcon: ModalMailIcon,
  LockClosedIcon: ModalLockClosedIcon,
  LockOpenIcon: ModalLockOpenIcon,
  SparklesIcon: ModalSparklesIcon,
  TrendingUpIcon: ModalTrendingUpIcon,
  TrendingDownIcon: ModalTrendingDownIcon,
})

export default Modal

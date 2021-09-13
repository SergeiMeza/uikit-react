import React from 'react'
import { Anchor, classNames } from '../..'

import {
  StepNavigationStatus,
  StepsNavigationItem,
} from '../Navigation/NavigationItem'

import { CheckIcon, CheckCircleIcon } from '@heroicons/react/solid'

export type StepsNavigationProps = {
  steps: StepsNavigationItem[]
  type?: StepsNavigationType
}

enum StepsNavigationType {
  simple = 'simple',
  panels = 'panels',
  bullets = 'bullets',
  panelsBorder = 'panelsBorder',
  circles = 'circles',
  bulletsText = 'bulletsText',
  circlesText = 'circlesText',
}

const StepsNavigationComponent: React.FC<StepsNavigationProps> = ({
  steps = [],
  type = StepsNavigationType.simple,
}) => {
  let stepsNavigation: JSX.Element | null = null

  if (type === StepsNavigationType.simple) {
    stepsNavigation = (
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {steps.map((step) => (
            <li key={step.name} className="md:flex-1">
              {step.status === StepNavigationStatus.complete ? (
                <Anchor
                  href={step.href}
                  to={step.to}
                  className="group pl-4 py-2 flex flex-col border-l-4 border-primary-600 hover:border-primary-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                >
                  <span className="text-xs text-primary-600 font-semibold tracking-wide uppercase group-hover:text-primary-800">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </Anchor>
              ) : step.status === StepNavigationStatus.current ? (
                <Anchor
                  href={step.href}
                  to={step.to}
                  className="pl-4 py-2 flex flex-col border-l-4 border-primary-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                  aria-current="step"
                >
                  <span className="text-xs text-primary-600 font-semibold tracking-wide uppercase">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </Anchor>
              ) : (
                <Anchor
                  href={step.href}
                  to={step.to}
                  className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                >
                  <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </Anchor>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  if (type === StepsNavigationType.panels) {
    stepsNavigation = (
      <nav aria-label="Progress">
        <ol
          role="list"
          className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex-1 md:flex">
              {step.status === StepNavigationStatus.complete ? (
                <Anchor
                  href={step.href}
                  to={step.to}
                  className="group flex items-center w-full"
                >
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-600 rounded-full group-hover:bg-primary-800">
                      <CheckIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </Anchor>
              ) : step.status === StepNavigationStatus.current ? (
                <Anchor
                  href={step.href}
                  to={step.to}
                  className="px-6 py-4 flex items-center text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-primary-600 rounded-full">
                    <span className="text-primary-600">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-primary-600">
                    {step.name}
                  </span>
                </Anchor>
              ) : (
                <Anchor
                  href={step.href}
                  to={step.to}
                  className="group flex items-center"
                >
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </Anchor>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    className="hidden md:block absolute top-0 right-0 h-full w-5"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  if (type === StepsNavigationType.bullets) {
    stepsNavigation = (
      <nav className="flex items-center justify-center" aria-label="Progress">
        <p className="text-sm font-medium">
          Step{' '}
          {steps.findIndex(
            (step) => step.status === StepNavigationStatus.current,
          ) + 1}{' '}
          of {steps.length}
        </p>
        <ol role="list" className="ml-8 flex items-center space-x-5">
          {steps.map((step) => (
            <li key={step.name}>
              {step.status === StepNavigationStatus.complete ? (
                <Anchor
                  href={step.href}
                  to={step.to}
                  className="block w-2.5 h-2.5 bg-primary-600 rounded-full hover:bg-primary-900"
                >
                  <span className="sr-only">{step.name}</span>
                </Anchor>
              ) : step.status === StepNavigationStatus.current ? (
                <Anchor
                  href={step.href}
                  to={step.to}
                  className="relative flex items-center justify-center"
                  aria-current="step"
                >
                  <span
                    className="absolute w-5 h-5 p-px flex"
                    aria-hidden="true"
                  >
                    <span className="w-full h-full rounded-full bg-primary-200" />
                  </span>
                  <span
                    className="relative block w-2.5 h-2.5 bg-primary-600 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </Anchor>
              ) : (
                <Anchor
                  href={step.href}
                  to={step.to}
                  className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
                >
                  <span className="sr-only">{step.name}</span>
                </Anchor>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  if (type === StepsNavigationType.panelsBorder) {
    stepsNavigation = (
      <div className="lg:border-t lg:border-b lg:border-gray-200">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Progress"
        >
          <ol
            role="list"
            className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none"
          >
            {steps.map((step, stepIdx) => (
              <li key={step.id} className="relative overflow-hidden lg:flex-1">
                <div
                  className={classNames(
                    stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                    stepIdx === steps.length - 1
                      ? 'border-t-0 rounded-b-md'
                      : '',
                    'border border-gray-200 overflow-hidden lg:border-0',
                  )}
                >
                  {step.status === StepNavigationStatus.complete ? (
                    <Anchor href={step.href} to={step.to} className="group">
                      <span
                        className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          stepIdx !== 0 ? 'lg:pl-9' : '',
                          'px-6 py-5 flex items-start text-sm font-medium',
                        )}
                      >
                        <span className="flex-shrink-0">
                          <span className="w-10 h-10 flex items-center justify-center bg-primary-600 rounded-full">
                            <CheckIcon
                              className="w-6 h-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                          <span className="text-xs font-semibold tracking-wide uppercase">
                            {step.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </Anchor>
                  ) : step.status === StepNavigationStatus.current ? (
                    <Anchor href={step.href} to={step.to} aria-current="step">
                      <span
                        className="absolute top-0 left-0 w-1 h-full bg-primary-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          stepIdx !== 0 ? 'lg:pl-9' : '',
                          'px-6 py-5 flex items-start text-sm font-medium',
                        )}
                      >
                        <span className="flex-shrink-0">
                          <span className="w-10 h-10 flex items-center justify-center border-2 border-primary-600 rounded-full">
                            <span className="text-primary-600">{step.id}</span>
                          </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                          <span className="text-xs font-semibold text-primary-600 tracking-wide uppercase">
                            {step.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </Anchor>
                  ) : (
                    <Anchor href={step.href} to={step.to} className="group">
                      <span
                        className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          stepIdx !== 0 ? 'lg:pl-9' : '',
                          'px-6 py-5 flex items-start text-sm font-medium',
                        )}
                      >
                        <span className="flex-shrink-0">
                          <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                            <span className="text-gray-500">{step.id}</span>
                          </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                          <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
                            {step.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </Anchor>
                  )}

                  {stepIdx !== 0 ? (
                    <>
                      {/* Separator */}
                      <div
                        className="hidden absolute top-0 left-0 w-3 inset-0 lg:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-full w-full text-gray-300"
                          viewBox="0 0 12 82"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0.5 0V31L10.5 41L0.5 51V82"
                            stroke="currentcolor"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    </>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    )
  }

  if (type === StepsNavigationType.circles) {
    stepsNavigation = (
      <nav aria-label="Progress">
        <ol role="list" className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                'relative',
              )}
            >
              {step.status === StepNavigationStatus.complete ? (
                <>
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="h-0.5 w-full bg-primary-600" />
                  </div>
                  <Anchor
                    href={step.href}
                    to={step.to}
                    className="relative w-8 h-8 flex items-center justify-center bg-primary-600 rounded-full hover:bg-primary-900"
                  >
                    <CheckIcon
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{step.name}</span>
                  </Anchor>
                </>
              ) : step.status === StepNavigationStatus.current ? (
                <>
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <Anchor
                    href={step.href}
                    to={step.to}
                    className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-primary-600 rounded-full"
                    aria-current="step"
                  >
                    <span
                      className="h-2.5 w-2.5 bg-primary-600 rounded-full"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{step.name}</span>
                  </Anchor>
                </>
              ) : (
                <>
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <Anchor
                    href={step.href}
                    to={step.to}
                    className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
                  >
                    <span
                      className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{step.name}</span>
                  </Anchor>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  if (type === StepsNavigationType.bulletsText) {
    stepsNavigation = (
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center" aria-label="Progress">
          <ol role="list" className="space-y-6">
            {steps.map((step) => (
              <li key={step.name}>
                {step.status === StepNavigationStatus.complete ? (
                  <Anchor href={step.href} to={step.to} className="group">
                    <span className="flex items-start">
                      <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                        <CheckCircleIcon
                          className="h-full w-full text-primary-600 group-hover:text-primary-800"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                        {step.name}
                      </span>
                    </span>
                  </Anchor>
                ) : step.status === StepNavigationStatus.current ? (
                  <Anchor
                    href={step.href}
                    to={step.to}
                    className="flex items-start"
                    aria-current="step"
                  >
                    <span
                      className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="absolute h-4 w-4 rounded-full bg-primary-200" />
                      <span className="relative block w-2 h-2 bg-primary-600 rounded-full" />
                    </span>
                    <span className="ml-3 text-sm font-medium text-primary-600">
                      {step.name}
                    </span>
                  </Anchor>
                ) : (
                  <Anchor href={step.href} to={step.to} className="group">
                    <div className="flex items-start">
                      <div
                        className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400" />
                      </div>
                      <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                        {step.name}
                      </p>
                    </div>
                  </Anchor>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    )
  }

  if (type === StepsNavigationType.circlesText) {
    stepsNavigation = (
      <nav aria-label="Progress">
        <ol role="list" className="overflow-hidden">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? 'pb-10' : '',
                'relative',
              )}
            >
              {step.status === StepNavigationStatus.complete ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-primary-600"
                      aria-hidden="true"
                    />
                  ) : null}
                  <Anchor
                    href={step.href}
                    to={step.to}
                    className="relative flex items-start group"
                  >
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-primary-600 rounded-full group-hover:bg-primary-800">
                        <CheckIcon
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                    <span className="ml-4 min-w-0 flex flex-col">
                      <span className="text-xs font-semibold tracking-wide uppercase">
                        {step.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {step.description}
                      </span>
                    </span>
                  </Anchor>
                </>
              ) : step.status === StepNavigationStatus.current ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                      aria-hidden="true"
                    />
                  ) : null}
                  <Anchor
                    href={step.href}
                    to={step.to}
                    className="relative flex items-start group"
                    aria-current="step"
                  >
                    <span className="h-9 flex items-center" aria-hidden="true">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-primary-600 rounded-full">
                        <span className="h-2.5 w-2.5 bg-primary-600 rounded-full" />
                      </span>
                    </span>
                    <span className="ml-4 min-w-0 flex flex-col">
                      <span className="text-xs font-semibold tracking-wide uppercase text-primary-600">
                        {step.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {step.description}
                      </span>
                    </span>
                  </Anchor>
                </>
              ) : (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                      aria-hidden="true"
                    />
                  ) : null}
                  <Anchor
                    href={step.href}
                    to={step.to}
                    className="relative flex items-start group"
                  >
                    <span className="h-9 flex items-center" aria-hidden="true">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                        <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                      </span>
                    </span>
                    <span className="ml-4 min-w-0 flex flex-col">
                      <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                        {step.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {step.description}
                      </span>
                    </span>
                  </Anchor>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  return stepsNavigation
}

export const StepsNavigation = Object.assign(StepsNavigationComponent, {
  stepStatus: StepNavigationStatus,
  type: StepsNavigationType,
})

export default StepsNavigation

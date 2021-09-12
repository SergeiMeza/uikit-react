import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, Input, SelectMenu } from '../../../components'

let stackedFormSchema = yup.object().shape({
  username: yup.string().min(3).max(100).required(),
  about: yup.string().min(1).max(300).required(),
  firstName: yup.string().max(100).required(),
  lastName: yup.string().max(100).required(),
  email: yup.string().email().required(),
  streetAddress: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  zip: yup.string().required(),
  country: yup.string(),
})

type StackedFormData = {
  username: string
  about: string
  firstName: string
  lastName: string
  email: string
  streetAddress: string
  country: string
  state: string
  city: string
  zip: string
  comments: boolean
  candidates: boolean
  offers: boolean
  pushNotifications: string
}

export const StackedFormLayout: React.FC<any> = ({}) => {
  const [payload, setPayload] = useState<any>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StackedFormData>({ resolver: yupResolver(stackedFormSchema) })

  const onSubmit = (data: any) => setPayload(data)

  return (
    <>
      {payload && (
        <pre className="p-4 w-full bg-gray-700 text-gray-50 rounded-lg mb-40">
          {JSON.stringify(payload, null, 2)}
        </pre>
      )}
      <div className="bg-white px-16 py-10">
        <form
          className="space-y-8 divide-y divide-gray-200"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Profile
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <Input
                    label="Username"
                    placeholder=""
                    description=""
                    type={Input.type.text}
                    trimmed
                    autoComplete="username"
                    register={register('username')}
                    error={errors.username?.message}
                  />
                </div>

                <div className="sm:col-span-6">
                  <Input.TextArea
                    label="About"
                    name="about"
                    description="Write a few sentences about yourself."
                    rows={3}
                    register={register('about')}
                    // error={errors.about?.message}
                  />
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Photo
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <Button
                      className="ml-5"
                      type="button"
                      title="Change"
                      buttonType={Button.buttonType.outline}
                      size={Button.size.medium}
                      onClick={() => console.log('onFileUpload')}
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <Input.File
                    label="Cover photo"
                    name="coverPhoto"
                    accept="image/*,.jpeg,.jpg,.png,.gif"
                  />
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Input
                    type="text"
                    label="First name"
                    name="firstName"
                    placeholder=""
                    autoComplete="given-name"
                    description=""
                    register={register('firstName')}
                    error={errors.firstName?.message}
                  />
                </div>

                <div className="sm:col-span-3">
                  <Input
                    type="text"
                    label="Last name"
                    name="lastName"
                    placeholder=""
                    autoComplete="family-name"
                    description=""
                    register={register('lastName')}
                    error={errors.lastName?.message}
                  />
                </div>

                <div className="sm:col-span-4">
                  <Input
                    type={Input.type.email}
                    label="Email address"
                    name="email"
                    placeholder=""
                    autoComplete="email"
                    description=""
                    register={register('email')}
                    error={errors.email?.message}
                  />
                </div>

                <div className="sm:col-span-3">
                  <SelectMenu
                    label="Country / Region"
                    name="country"
                    autoComplete="country"
                    options={[
                      { name: 'United States', value: 'usa' },
                      { name: 'Canada', value: 'canada' },
                      { name: 'Mexico', value: 'mexico' },
                      { name: 'Japan', value: 'japan' },
                    ]}
                    selectedItem={{ name: 'United States', value: 'usa' }}
                    register={register('country')}
                  />
                </div>

                <div className="sm:col-span-6">
                  <Input
                    type="text"
                    autoComplete="street-address"
                    name="streetAddress"
                    label="Street address"
                    placeholder=""
                    description=""
                    register={register('streetAddress')}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    type="text"
                    autoComplete="address-level2"
                    name="city"
                    label="City"
                    placeholder=""
                    description=""
                    register={register('city')}
                    error={errors.city?.message}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    type="text"
                    autoComplete="address-level1"
                    name="state"
                    label="State / Province"
                    placeholder=""
                    description=""
                    register={register('state')}
                    error={errors.state?.message}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    type="text"
                    autoComplete="postal-code"
                    name="zip"
                    label="ZIP / Postal"
                    placeholder=""
                    description=""
                    register={register('zip')}
                    error={errors.zip?.message}
                  />
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Notifications
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </p>
              </div>
              <div className="mt-6">
                <Input.CheckboxGroup
                  label="By Email"
                  items={[
                    {
                      name: 'comments',
                      title: 'Comments',
                      description:
                        'Get notified when someones posts a comment on a posting.',
                      checked: false,
                    },
                    {
                      name: 'candidates',
                      title: 'Candidates',
                      description:
                        'Get notified when a candidate applies for a job.',
                      checked: false,
                    },
                    {
                      name: 'offers',
                      title: 'Offers',
                      description:
                        'Get notified when a candidate accepts or rejects an offer.',
                      checked: false,
                    },
                  ]}
                  register={register}
                />
                <Input.RadioGroup
                  label="Push Notifications"
                  description="These are delivered via SMS to your mobile phone."
                  hiddenLabel={false}
                  register={register('pushNotifications')}
                />
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <Button
                type="button"
                title="Cancel"
                buttonType={Button.buttonType.outline}
                size={Button.size.large}
              />
              <Button
                className="ml-3"
                type="submit"
                title="Save"
                size={Button.size.large}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default StackedFormLayout

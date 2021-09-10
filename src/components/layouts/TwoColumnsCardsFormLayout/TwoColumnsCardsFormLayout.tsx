import React from 'react'
import Button from '../../Elements/Button/Button'
import Input from '../../Elements/Input/Input'
import SelectMenu from '../../Elements/SelectMenu/SelectMenu'

export const TwoColumnsCardsFormLayout: React.FC<any> = ({}) => {
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <Input
                        type={Input.type.text}
                        label="Website"
                        name="companyWebsite"
                        placeholder="www.example.com"
                        autoComplete="url"
                        trimmed
                        prefix="https://"
                        description=""
                      />
                    </div>
                  </div>

                  <div>
                    <Input.TextArea
                      name="about"
                      label="About"
                      rows={3}
                      defaultValue={''}
                      placeholder="you@example.com"
                      description="Brief description of your profile. URLs are hyperlinked."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
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

                  <div>
                    <Input.File
                      label="Cover photo"
                      name="coverPhoto"
                      icon={
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      title={
                        <span>
                          <span className="text-primary-600 hover:text-primary-500">
                            Upload a file
                          </span>{' '}
                          or drag and drop
                        </span>
                      }
                      description="PNG, JPG, GIF up to 10MB"
                      onClick={() => console.log('onFileUpload')}
                      accept="image/png,image/jpeg,image/gif"
                    />
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Button
                    className="inline-flex justify-center"
                    type="submit"
                    title="Save"
                    size={Button.size.large}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <Input
                        type="text"
                        label="First name"
                        name="firstName"
                        placeholder=""
                        autoComplete="given-name"
                        description=""
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <Input
                        type="text"
                        label="Last name"
                        name="lastName"
                        placeholder=""
                        autoComplete="family-name"
                        description=""
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <Input
                        type={Input.type.email}
                        label="Email address"
                        name="email"
                        placeholder=""
                        autoComplete="email"
                        description=""
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
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
                      />
                    </div>

                    <div className="col-span-6">
                      <Input
                        type="text"
                        autoComplete="street-address"
                        name="streetAddress"
                        label="Street address"
                        placeholder=""
                        description=""
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <Input
                        type="text"
                        autoComplete="address-level2"
                        name="city"
                        label="City"
                        placeholder=""
                        description=""
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <Input
                        type="text"
                        autoComplete="address-level1"
                        name="state"
                        label="State / Province"
                        placeholder=""
                        description=""
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <Input
                        type="text"
                        autoComplete="postal-code"
                        name="zip"
                        label="ZIP / Postal"
                        placeholder=""
                        description=""
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Button
                    className="inline-flex justify-center"
                    type="submit"
                    title="Save"
                    size={Button.size.large}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Decide which communications you'd like to receive and how.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
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
                  />
                  <Input.RadioGroup />
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Button
                    className="inline-flex justify-center"
                    type="submit"
                    title="Save"
                    size={Button.size.large}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoColumnsCardsFormLayout

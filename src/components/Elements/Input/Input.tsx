import { ExclamationCircleIcon } from '@heroicons/react/solid'
import React, {
  ButtonHTMLAttributes,
  ChangeEvent,
  HTMLAttributes,
  useRef,
  useState,
} from 'react'
import { classNames } from '../../../helpers/methods'
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup'
import EmptyState, { EmptyStateProps } from '../EmptyState/EmptyState'
import { FilePreview } from '../FIlePreview/FilePreview'

export type InputProps = {
  inputType?: string
  hiddenLabel?: boolean
  label?: string
  name?: string
  placeholder?: string
  description?: string
  value?: string
  trimmed?: boolean
  prefix?: string
  cornerHint?: string | JSX.Element
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

enum InputType {
  text = 'text',
  email = 'email',
  password = 'password',
  search = 'search',
  url = 'url',
}

const InputComponent: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  inputType = InputType.text,
  name = 'email',
  hiddenLabel = false,
  label = 'Email',
  placeholder = 'you@example.com',
  description = "We'll only use this for spam.",
  value = '',
  prefix = '',
  trimmed = false,
  cornerHint = null,
  onChange = (value: any) => console.log(`${name}: ${value}`),
  onFocus = () => console.log('input focus'),
  onBlur = () => console.log('input blur'),
  ...props
}) => {
  const inputRef = useRef<any>(null)
  const [currentValue, setCurrentValue] = useState<string>(value)
  const [error, setError] = useState<string | null>('')

  function handleChange(element: ChangeEvent<HTMLInputElement>) {
    if (trimmed) {
      setCurrentValue(element.target.value.trim())
    } else {
      setCurrentValue(element.target.value.trimStart())
    }
  }

  function handleFocus() {
    console.log('input', name, 'focus')
  }

  function handleBlur() {
    console.log('input', name, 'blur', currentValue)
    if (currentValue !== value) {
      onChange(currentValue.trim())
      inputRef.current.value = currentValue.trim()
    }
  }

  const themeInputComponentWrapperClassNames = classNames(
    error ? 'mt-1 relative rounded-md shadow-sm' : 'mt-1',
  )

  const themeInputWrapperClassNames = classNames(
    error ? '' : ' shadow-sm',
    'flex rounded-md',
  )

  const themeInputClassNames = classNames(
    error
      ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none pr-10 focus:ring-red-500 focus:border-red-500'
      : 'focus:ring-primary-500 focus:border-primary-500',
    prefix ? 'rounded-r-md' : 'rounded-md',
    ' block w-full sm:text-sm border-gray-300',
  )

  const prefixInputClassNames = classNames(
    error
      ? 'border-red-300 bg-red-50 text-red-500'
      : 'border-gray-300 bg-gray-50 text-gray-500',
    'inline-flex items-center px-3 rounded-l-md border border-r-0  text-sm',
  )

  let inputItem = (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className={
            hiddenLabel ? 'sr-only' : 'block text-sm font-medium text-gray-700'
          }
        >
          {label}
        </label>
        {typeof cornerHint === 'string' ? (
          <span className="text-sm text-gray-500" id="email-optional">
            {cornerHint}
          </span>
        ) : (
          cornerHint
        )}
      </div>
      <div className={themeInputComponentWrapperClassNames}>
        <div className={themeInputWrapperClassNames}>
          {prefix && <span className={prefixInputClassNames}>{prefix}</span>}
          <input
            ref={inputRef}
            type={String(inputType)}
            name={name}
            id={name}
            className={themeInputClassNames}
            placeholder={placeholder}
            aria-describedby={error ? `${name}-error` : `${name}-description`}
            value={currentValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete={error ? undefined : props.autoComplete}
            {...props}
          />
        </div>

        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error
        ? error && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {error}
            </p>
          )
        : description && (
            <p
              className="mt-2 text-sm text-gray-500"
              id={`${name}-description`}
            >
              {description}
            </p>
          )}
    </div>
  )

  return inputItem
}

const SecureInput: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ ...props }) => {
  return (
    <InputComponent
      type={InputType.password}
      name="password"
      label="Password"
      placeholder=""
      description=""
      trimmed={true}
      {...props}
    />
  )
}

export type CheckboxInputProps = {
  label?: string
  name?: string
  description?: string
  value?: boolean
  onChange?: (value: boolean) => void
  onFocus?: () => void
  onBlur?: () => void
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label = 'Remember me',
  name = 'rememberMe',
  description,
  value,
  onChange = (checked) => console.log(name, checked),
  onFocus,
  onBlur,
}) => {
  function handleItemChange(element: ChangeEvent<HTMLInputElement>) {
    onChange(element.target.checked)
  }

  return (
    <div className="flex items-center">
      <input
        id={name}
        aria-describedby={`${name}-description`}
        name={name}
        type="checkbox"
        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        defaultChecked={value}
        onChange={handleItemChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
      <p id={`${name}-description`} className="text-gray-500">
        {description}
      </p>
    </div>
  )
}

export type TextAreaInputProps = {
  name?: string
  label?: string
  description?: string
  rows?: number
  defaultValue?: string
}

const TextAreaInput: React.FC<
  TextAreaInputProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  name = 'about',
  label = 'About',
  description = 'Write a few sentences about yourself.',
  rows = 3,
  defaultValue = '',
  ...props
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          id={name}
          name={name}
          rows={rows}
          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border border-gray-300 rounded-md"
          defaultValue={defaultValue}
          {...props}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  )
}

export type RadioGroupInputProps = {
  label?: string
  description?: string
  hiddenLabel?: boolean
  items?: any[]
}

const RadioGroupInput: React.FC<any> = ({
  label = 'Push Notifications',
  description = 'These are delivered via SMS to your mobile phone.',
  hiddenLabel = false,
  items = [
    { name: 'pushNotifications', value: 'pushEverything', label: 'Everything' },
    { name: 'pushNotifications', value: 'pushEmail', label: 'Same as email' },
    {
      name: 'pushNotifications',
      value: 'pushNothing',
      label: 'No push notifications',
    },
  ],
}) => {
  let formRadioGroup = (
    <fieldset className="mt-6">
      <div>
        {hiddenLabel ? (
          <legend className="sr-only">{label}</legend>
        ) : (
          <legend className="text-base font-medium text-gray-900">
            {label}
          </legend>
        )}
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.value} className="flex items-center">
            <input
              id={item.value}
              name={item.name}
              type="radio"
              className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
            />
            <label
              htmlFor={item.value}
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )

  return formRadioGroup
}

export type FileInputProps = {
  label?: string
  name?: string
  hiddenLabel?: boolean
  multiple?: boolean
  accept?: string
  renderFiles?: (file: File) => JSX.Element
}

export const FileInput: React.FC<
  FileInputProps & EmptyStateProps & React.DOMAttributes<HTMLDivElement>
> = ({
  label = '',
  hiddenLabel = false,
  name = '',
  multiple = false,
  accept = undefined,
  ...props
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  function handleFileInputChange(e: ChangeEvent<HTMLInputElement>) {
    let files = Array.from(e.target.files ?? [])
    if (files.length) {
      setSelectedFiles(files ?? selectedFiles)
    }
  }

  return (
    <div>
      {hiddenLabel ? (
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
      ) : (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <EmptyState
        className="mt-1"
        icon={
          props.icon ?? (
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
          )
        }
        title={
          props.title ?? (
            <span>
              <span className="text-primary-600 hover:text-primary-500">
                Upload a file
              </span>{' '}
              or drag and drop
            </span>
          )
        }
        description={props.description ?? 'PNG, JPG, GIF up to 10MB'}
        onClick={() => {
          fileInputRef?.current?.click()
        }}
        onDragOver={(e) => {
          e.preventDefault()
        }}
        onDrop={(e) => {
          if (multiple) {
            setSelectedFiles(Array.from(e.dataTransfer.files))
          } else {
            setSelectedFiles([Array.from(e.dataTransfer.files)[0]])
          }
          e.preventDefault()
        }}
      >
        {selectedFiles.length > 0 ? (
          <div
            className={classNames(
              multiple ? 'grid grid-cols-3 gap-x-4' : 'flex',
            )}
          >
            {selectedFiles.map((file) => (
              <FilePreview key={file.name} file={file} />
            ))}
          </div>
        ) : null}
      </EmptyState>
      <input
        ref={fileInputRef}
        type="file"
        name={name}
        multiple={multiple}
        onChange={handleFileInputChange}
        accept={accept}
        hidden
      />
    </div>
  )
}

export const Input = Object.assign(InputComponent, {
  type: InputType,
  Secure: SecureInput,
  Checkbox: CheckboxInput,
  TextArea: TextAreaInput,
  RadioGroup: RadioGroupInput,
  CheckboxGroup: CheckboxGroup,
  File: FileInput,
})

export default Input

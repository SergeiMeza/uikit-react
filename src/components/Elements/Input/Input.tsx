import { ExclamationCircleIcon } from '@heroicons/react/solid'
import React, { ChangeEvent, useRef, useState } from 'react'

export type InputProps = {
  inputType?: string
  hiddenLabel?: boolean
  label?: string
  name?: string
  placeholder?: string
  description?: string
  value?: string
  trimmed?: boolean
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
  trimmed = false,
  cornerHint = null,
  onChange = (value: any) => console.log(`${name}: ${value}`),
  onFocus = () => console.log('input focus'),
  onBlur = () => console.log('input blur'),
  ...props
}) => {
  const inputRef = useRef<any>(null)
  const [currentValue, setCurrentValue] = useState<string>(value)
  const [error, setError] = useState<string | null>(null)

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

  const themeInputWrapperClassName = 'mt-1'
  const errorInputWrapperClassName = 'mt-1 relative rounded-md shadow-sm'

  const themeInputClassName =
    'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'

  const errorInputClassName =
    'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md'

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
      <div
        className={
          error ? errorInputWrapperClassName : themeInputWrapperClassName
        }
      >
        <input
          ref={inputRef}
          type={String(inputType)}
          name={name}
          id={name}
          className={error ? errorInputClassName : themeInputClassName}
          placeholder={placeholder}
          aria-describedby={error ? `${name}-error` : `${name}-description`}
          value={currentValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={error ? undefined : props.autoComplete}
          {...props}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error ? (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      ) : (
        <p className="mt-2 text-sm text-gray-500" id={`${name}-description`}>
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
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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

export const Input = Object.assign(InputComponent, {
  type: InputType,
  Secure: SecureInput,
  Checkbox: CheckboxInput,
})

export default Input

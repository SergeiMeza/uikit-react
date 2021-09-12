import { Input } from '../../../components'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

export const InputPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'Input',
        to: '/components/input',
        current: true,
      }}
    >
      <div className="flex flex-col space-y-8 divide-gray-300 divide-y">
        <div className="flex flex-col space-y-4 pt-4">
          <h4 className="text-sm text-gray-600 font-bold">Input</h4>
          <Input />
        </div>
        <div className="flex flex-col space-y-4 pt-4">
          <h4 className="text-sm text-gray-600 font-bold">Secure Input</h4>
          <Input.Secure />
        </div>
        <div className="flex flex-col space-y-4 pt-4">
          <h4 className="text-sm text-gray-600 font-bold">Checkbox Input</h4>
          <Input.Checkbox />
        </div>
        <div className="flex flex-col space-y-4 pt-4">
          <h4 className="text-sm text-gray-600 font-bold">TextArea Input</h4>
          <Input.TextArea />
        </div>
        <div className="flex flex-col space-y-4 pt-4">
          <h4 className="text-sm text-gray-600 font-bold">RadioGroup Input</h4>
          <Input.RadioGroup />
        </div>
        <div className="flex flex-col space-y-4 pt-4">
          <h4 className="text-sm text-gray-600 font-bold">Checkbox Input</h4>
          <Input.Checkbox />
        </div>
        <div className="flex flex-col space-y-4 pt-4">
          <h4 className="text-sm text-gray-600 font-bold">File Input</h4>
          <Input.File />
        </div>
      </div>
    </ComponentWrapper>
  )
}

export default InputPreview

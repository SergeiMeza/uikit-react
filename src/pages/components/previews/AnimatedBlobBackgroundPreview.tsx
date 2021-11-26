import { AnimatedBlobBackground, Code } from '../../../components'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

const AnimatedBlobBackgroundPreview = () => {
  let previewCode1 = `import { AnimatedBlobBackground } from "@sergeimeza/uikit-react"
  
function Example() {

  return (
    <AnimatedBlobBackground
      type={AnimatedBlobBackground.type.small}
      colors={['bg-purple-300', 'bg-orange-300']}
    >
      { // ...Content }
    </AnimatedBlobBackground>
  )
}

export default Example`

  let previewCode2 = `import { AnimatedBlobBackground } from "@sergeimeza/uikit-react"
  
function Example() {

  return (
    <AnimatedBlobBackground
      type={AnimatedBlobBackground.type.medium}
    >
      { // ...Content }
    </AnimatedBlobBackground>
  )
}

export default Example`

  let previewCode3 = `
export type AnimatedBlobBackgroundProps = {
  type?: AnimatedBlobBackgroundType // see the enum AnimatedBlobBackgroundType
  colors?: string[] // optional
  content?: JSX.Element // you can also use children
}

enum AnimatedBlobBackgroundType {
  small, // 2x1
  medium, // 2x1
  large, // 3x1
  extraLarge, // 2x2
}
`

  return (
    <ComponentWrapper
      component={{
        name: 'AnimatedBlobBackground',
        to: '/components/animated-blob-background',
        current: true,
      }}
    >
      <div className="pt-20 space-y-20">
        <AnimatedBlobBackground
          type={AnimatedBlobBackground.type.small}
          colors={['bg-purple-300', 'bg-orange-300']}
        />
        <div className="pb-10">
          <Code>{previewCode1}</Code>
        </div>
        <AnimatedBlobBackground
          type={AnimatedBlobBackground.type.medium}
          colors={['bg-blue-300', 'bg-red-300']}
        />
        <div className="pb-10">
          <Code>{previewCode2}</Code>
        </div>
        <AnimatedBlobBackground
          type={AnimatedBlobBackground.type.large}
          colors={['bg-purple-300', 'bg-blue-300', 'bg-red-300']}
        />
        <AnimatedBlobBackground
          type={AnimatedBlobBackground.type.extraLarge}
          colors={[
            'bg-purple-300',
            'bg-blue-300',
            'bg-red-300',
            'bg-orange-300',
          ]}
        >
          <div className="flex items-center justify-center">
            <img
              src="https://qoals.com/assets/images/hero.svg"
              alt="dashboard"
            />
          </div>
        </AnimatedBlobBackground>

        <div className="py-20">
          <Code>{previewCode3}</Code>
        </div>
      </div>
    </ComponentWrapper>
  )
}

export default AnimatedBlobBackgroundPreview

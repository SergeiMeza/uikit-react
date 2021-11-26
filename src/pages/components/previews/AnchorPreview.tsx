import { Anchor, Code } from '../../../components'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

const AnchorPreview = () => {
  let previewCode1 = `import { Anchor } from "@sergeimeza/uikit-react"
  
// Using react-router-dom
function Example() {

  return (
    <Anchor
      className="text-primary-500 hover:text-primary-700 focus:ring-2 focus:ring-primary-500 px-1 rounded-lg"
      to="/components"
    >
      Go back
    </Anchor>
  )
}

export default Example`

  let previewCode2 = `import { Anchor } from "@sergeimeza/uikit-react"
  
// using <a></a> tag
function Example() {
  
  return (
    <Anchor
      className="text-primary-500 hover:text-primary-700 focus:ring-2 focus:ring-primary-500 px-1 rounded-lg"
      href="https://www.github.com/sergeimeza"
      target="_blank"
      referrerPolicy="strict-origin-when-cross-origin"
    >
      Visit my Github Account
    </Anchor>
  )
}

export default Example`

  return (
    <ComponentWrapper
      component={{
        name: 'Anchor',
        to: '/components/anchor',
        current: true,
      }}
    >
      <div>
        <Anchor
          className="font-medium text-primary-500 hover:text-primary-700 focus:ring-2 focus:ring-primary-500 px-1 rounded-lg"
          to="/components"
        >
          Go back
        </Anchor>
      </div>

      <div>
        <Code>{previewCode1}</Code>
      </div>

      <div>
        <Anchor
          className="font-medium text-primary-500 hover:text-primary-700 focus:ring-2 focus:ring-primary-500 px-1 rounded-lg"
          href="https://www.github.com/sergeimeza"
          target="_blank"
          referrerPolicy="strict-origin-when-cross-origin"
        >
          Visit my Github Account
        </Anchor>
      </div>

      <div>
        <Code>{previewCode2}</Code>
      </div>
    </ComponentWrapper>
  )
}

export default AnchorPreview

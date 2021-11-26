import { Code } from '../../../components'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

const CodePreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'Code',
        to: '/components/code',
        current: true,
      }}
    >
      <Code className="language-javascript">
        {`
        function main(name) {
          return \`hello \${name}\`
        }

        main("React.js")
        `}
      </Code>
    </ComponentWrapper>
  )
}

export default CodePreview

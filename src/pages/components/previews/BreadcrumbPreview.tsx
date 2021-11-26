import { Breadcrumb, Code } from '../../../components'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

export const BreadcrumbPreview = () => {
  const previewCode1 = `import { PageHeading, Breadcrumb } from "@sergeimeza/uikit-react"

const component = {
  name: 'ActionPanel',
  to: '/components/action-panel',
  current: true,
}

function Example({ component }) {

  return (
    <PageHeading
      title={component.name}
      back={
        <nav className="sm:hidden" aria-label="Back">
          <Anchor
            to="/components"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Back
          </Anchor>
        </nav>
      }
      breadcrumb={
        <Breadcrumb
          className="hidden sm:flex"
          type={Breadcrumb.type.simpleWithChevrons}
          pages={[
            { name: 'Components', to: '/components', current: false },
            component,
          ]}
          homeTo="/"
        />
      }
    />
  )
}


export default Example`

  const previewCode2 = `
export type BreadcrumbPage = {
  name: string
  current: boolean
  to?: string
  href?: string
}

export type BreadcrumbProps = {
  className?: string
  type?: BreadcrumbType
  pages?: (BreadcrumbPage & any)[]
  homeName?: string
  homeRef?: string
  homeTo?: string
  homeIcon?: JSX.Element
}

enum BreadcrumbType {
  containedBar = 'containedBar',
  fullWidthBar = 'fullWidthBar',
  simpleWithChevrons = 'simpleWithChevrons',
  simpleWithSlashes = 'simpleWithSlashes',
}`

  return (
    <ComponentWrapper
      component={{
        name: 'Breadcrumb',
        to: '/components/breadcrumb',
        current: true,
      }}
    >
      <div>
        <Breadcrumb type={Breadcrumb.type.simpleWithChevrons} />
      </div>

      <div>
        <Code>{previewCode1}</Code>
      </div>
      <div>
        <Code>{previewCode2}</Code>
      </div>
    </ComponentWrapper>
  )
}

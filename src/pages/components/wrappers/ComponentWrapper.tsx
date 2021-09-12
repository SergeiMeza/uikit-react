import { ChevronLeftIcon } from '@heroicons/react/solid'
import { Anchor, Breadcrumb, PageHeading } from '../../../components'
import Container from '../../../components/layouts/Container/Container'

export const ComponentWrapper: React.FC<any> = ({
  component = {
    name: 'ActionPanel',
    to: '/components/action-panel',
    current: true,
  },
  children,
}) => {
  return (
    <Container className="space-y-10 py-10">
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

      {children}
    </Container>
  )
}

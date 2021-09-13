import { ChevronLeftIcon } from '@heroicons/react/solid'
import { Anchor, Breadcrumb, Container, PageHeading } from '../../../components'

export const LayoutWrapper: React.FC<any> = ({
  layout = {
    name: 'Sign In',
    to: '/layouts/sign-in',
    current: true,
  },
  children,
}) => {
  return (
    <Container className="space-y-10 py-10">
      <PageHeading
        title={layout.name}
        back={
          <nav className="sm:hidden" aria-label="Back">
            <Anchor
              to="/layouts"
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
              { name: 'Layouts', to: '/layouts', current: false },
              layout,
            ]}
            homeTo="/"
          />
        }
      />

      {children}
    </Container>
  )
}

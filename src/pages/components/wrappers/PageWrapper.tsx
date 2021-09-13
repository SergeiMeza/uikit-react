import { ChevronLeftIcon } from '@heroicons/react/solid'
import { Anchor, Breadcrumb, Container, PageHeading } from '../../../components'

export const PageWrapper: React.FC<any> = ({
  page = {
    name: 'Container',
    to: '/pages/container',
    current: true,
  },
  children,
}) => {
  return (
    <Container className="space-y-10 py-10">
      <PageHeading
        title={page.name}
        back={
          <nav className="sm:hidden" aria-label="Back">
            <Anchor
              to="/pages"
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
            pages={[{ name: 'Pages', to: '/pages', current: false }, page]}
            homeTo="/"
          />
        }
      />

      {children}
    </Container>
  )
}

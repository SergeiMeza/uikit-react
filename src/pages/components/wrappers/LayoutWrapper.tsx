import { Breadcrumb } from '../../../components'
import Container from '../../../components/layouts/Container/Container'

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
      <Breadcrumb
        type={Breadcrumb.type.fullWidthBar}
        pages={[{ name: 'Layouts', to: '/layouts', current: false }, layout]}
        homeTo="/"
      />
      {children}
    </Container>
  )
}

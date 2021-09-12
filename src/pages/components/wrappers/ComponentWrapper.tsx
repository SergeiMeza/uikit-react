import { Breadcrumb } from '../../../components'
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
      <Breadcrumb
        type={Breadcrumb.type.fullWidthBar}
        pages={[
          { name: 'Components', to: '/components', current: false },
          component,
        ]}
        homeTo="/"
      />
      {children}
    </Container>
  )
}

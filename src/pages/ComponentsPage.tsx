import React from 'react'
import { Breadcrumb, Container } from '../components'

import { ComponentsSection } from './sections/ComponentsSection'

const ComponentsPage: React.FC<any> = () => {
  return (
    <Container className="py-10">
      <Breadcrumb
        homeTo="/"
        pages={[{ name: 'Components', to: '/components', current: true }]}
      />
      <div className="my-10">
        <ComponentsSection />
      </div>
    </Container>
  )
}

export default ComponentsPage

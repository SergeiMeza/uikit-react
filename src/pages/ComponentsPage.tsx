import React from 'react'
import { Breadcrumb } from '../components'

import Container from '../components/layouts/Container/Container'
import { ComponentsSection } from './sections/ComponentsSection'

const ComponentsPage: React.FC<any> = () => {
  return (
    <Container className="py-10">
      <Breadcrumb
        homeRef="/"
        pages={[{ name: 'Components', href: '/components', current: true }]}
      />
      <ComponentsSection />
    </Container>
  )
}

export default ComponentsPage

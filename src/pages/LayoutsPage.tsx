import React from 'react'
import { Breadcrumb, Divider } from '../components'

import Container from '../components/layouts/Container/Container'
import { SampleLayoutsSection } from './sections/SampleLayoutsSection'

const ComponentsPage: React.FC<any> = () => {
  return (
    <Container className="py-10">
      <Breadcrumb
        homeRef="/"
        pages={[{ name: 'Sample Layouts', href: '/layouts', current: true }]}
      />
      <div className="my-10">
        <SampleLayoutsSection />
      </div>
    </Container>
  )
}

export default ComponentsPage

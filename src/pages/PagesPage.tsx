import React from 'react'
import { Breadcrumb, Container } from '../components'

import PagesSection from './sections/PagesSection'

const PagesPage: React.FC<any> = () => {
  return (
    <Container className="py-10">
      <Breadcrumb
        homeTo="/"
        pages={[{ name: 'Sample Pages', to: '/pages', current: true }]}
      />
      <div className="my-10">
        <PagesSection />
      </div>
    </Container>
  )
}

export default PagesPage

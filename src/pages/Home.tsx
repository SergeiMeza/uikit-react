import { ResizableContainer } from '../components/layouts/ResizableContainer'
import { BrandSidebarLightHeader } from '../components/sidebar-layouts/BrandSidebarLightHeader'
import { DarkSidebarLightHeader } from '../components/sidebar-layouts/DarkSidebarLightHeader'
import { BrandedNavCompactWhitePageHeader } from '../components/stacked-layouts/BrandedNavCompactWhitePageHeader'
import { DarkNavOverlap } from '../components/stacked-layouts/DarkNavOverlap'
import { DarkNavWhitePageHeader } from '../components/stacked-layouts/DarkNavWhitePageHeader'
import { LightNavBottomBorder } from '../components/stacked-layouts/LightNavBottomBorder'
import { LightNavGrayBackground } from '../components/stacked-layouts/LightNavGrayBackground'
import { TwoRowNavOverlap } from '../components/stacked-layouts/TwoRowNavOverlap'
import { FullWidthThreeColumn } from '../components/multi-column-layouts/FullWidthThreeColumn'
import { FullWidthSecondaryColumnRight } from '../components/multi-column-layouts/FullWidthSecondaryColumnRight'

import Button from '../components/Elements/Button/Button'
import Notification from '../components/Elements/Notification/Notification'
import { useState } from 'react'

const StackedLayouts = () => {
  return (
    <div>
      <div className="border-b border-gray-400">
        <LightNavBottomBorder />
      </div>
      <div className="border-b border-gray-400">
        <LightNavGrayBackground />
      </div>
      <div className="border-b border-gray-400">
        <DarkNavWhitePageHeader />
      </div>
      <div className="border-b border-gray-400">
        <BrandedNavCompactWhitePageHeader />
      </div>
      <div className="border-b border-gray-400">
        <DarkNavOverlap />
      </div>
      <div className="border-b border-gray-400">
        <TwoRowNavOverlap />
      </div>
    </div>
  )
}

const SidebarLayouts = () => {
  return (
    <div>
      <div className="border-b border-gray-400">
        <BrandSidebarLightHeader />
      </div>
      <div className="border-b border-gray-400">
        <DarkSidebarLightHeader />
      </div>
    </div>
  )
}

const MultiColumnLayouts = () => {
  return (
    <div>
      <div className="border-b border-gray-400">
        <FullWidthThreeColumn />
      </div>
      <div className="border-b border-gray-400">
        <FullWidthSecondaryColumnRight />
      </div>
    </div>
  )
}

const Test = () => {
  return (
    <ResizableContainer>
      <LightNavBottomBorder />
    </ResizableContainer>
  )
}

export const Home = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
      <Button onClick={() => setShow(true)}>Show</Button>
      <Notification show={show} setShow={setShow} />
    </div>
  )
}

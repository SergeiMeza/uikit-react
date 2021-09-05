import { BrandSidebarLightHeader } from './components/sidebar-layouts/BrandSidebarLightHeader'
import { BrandedNavCompactWhitePageHeader } from './components/stacked-layouts/BrandedNavCompactWhitePageHeader'
import { DarkNavOverlap } from './components/stacked-layouts/DarkNavOverlap'
import { DarkNavWhitePageHeader } from './components/stacked-layouts/DarkNavWhitePageHeader'
import { LightNavBottomBorder } from './components/stacked-layouts/LightNavBottomBorder'
import { LightNavGrayBackground } from './components/stacked-layouts/LightNavGrayBackground'
import { TwoRowNavOverlap } from './components/stacked-layouts/TwoRowNavOverlap'

export const Home = () => {
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
      <div className="border-b border-gray-400">
        <BrandSidebarLightHeader />
      </div>
    </div>
  )
}

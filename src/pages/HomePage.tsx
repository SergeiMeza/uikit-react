import { Container, Divider } from '../components'

import ComponentsSection from './sections/ComponentsSection'
import LayoutsSection from './sections/LayoutsSection'
import PagesSection from './sections/PagesSection'

// const StackedLayouts = () => {
//   return (
//     <div className="space-y-4">
//       <div className="border-b border-gray-400">
//         <LightNavBottomBorder />
//       </div>
//       <div className="border-b border-gray-400">
//         <LightNavGrayBackground />
//       </div>
//       <div className="border-b border-gray-400">
//         <DarkNavWhitePageHeader />
//       </div>
//       <div className="border-b border-gray-400">
//         <BrandedNavCompactWhitePageHeader />
//       </div>
//       <div className="border-b border-gray-400">
//         <DarkNavOverlap />
//       </div>
//       <div className="border-b border-gray-400">
//         <TwoRowNavOverlap />
//       </div>
//     </div>
//   )
// }

// const SidebarLayouts = () => {
//   return (
//     <div>
//       <div className="border-b border-gray-400">
//         <BrandSidebarLightHeader />
//       </div>
//       <div className="border-b border-gray-400">
//         <DarkSidebarLightHeader />
//       </div>
//     </div>
//   )
// }

// const MultiColumnLayouts = () => {
//   return (
//     <div>
//       <div className="border-b border-gray-400">
//         <FullWidthThreeColumn />
//       </div>
//       <div className="border-b border-gray-400">
//         <FullWidthSecondaryColumnRight />
//       </div>
//     </div>
//   )
// }

const HomePage = () => {
  return (
    <Container className="py-10">
      <ComponentsSection />
      <Divider className="my-10" />
      <LayoutsSection />
      <Divider className="my-10" />
      <PagesSection />
    </Container>
  )
}

export default HomePage

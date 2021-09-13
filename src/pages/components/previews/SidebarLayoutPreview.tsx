import { LayoutWrapper } from '../wrappers/LayoutWrapper'

import {
  PageHeading,
  SidebarLayout,
  SidebarNavigation,
} from '../../../components'
import { NavigationItem } from '../../../components/Elements/Navigation/NavigationItem'

const SampleIcon = () => (
  <img
    className="h-8 w-auto"
    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
    alt="Workflow"
  />
)

const sampleNavigation2: NavigationItem[] = [
  { name: 'Dashboard', to: '/', current: true },
  {
    name: 'Team',
    current: false,
    children: [
      { name: 'Overview', to: '/' },
      { name: 'Members', to: '/' },
      { name: 'Calendar', to: '/' },
      { name: 'Settings', to: '/' },
    ],
  },
  {
    name: 'Projects',
    current: false,
    children: [
      { name: 'Overview', to: '/' },
      { name: 'Members', to: '/' },
      { name: 'Calendar', to: '/' },
      { name: 'Settings', to: '/' },
    ],
  },
  {
    name: 'Calendar',
    current: false,
    children: [
      { name: 'Overview', to: '/' },
      { name: 'Members', to: '/' },
      { name: 'Calendar', to: '/' },
      { name: 'Settings', to: '/' },
    ],
  },
  {
    name: 'Documents',
    current: false,
    children: [
      { name: 'Overview', to: '/' },
      { name: 'Members', to: '/' },
      { name: 'Calendar', to: '/' },
      { name: 'Settings', to: '/' },
    ],
  },
  {
    name: 'Reports',
    current: false,
    children: [
      { name: 'Overview', to: '/' },
      { name: 'Members', to: '/' },
      { name: 'Calendar', to: '/' },
      { name: 'Settings', to: '/' },
    ],
  },
]

const sampleSecondaryNavigation: NavigationItem[] = [
  { name: 'Website redesign', to: '/', current: false },
  { name: 'GraphQL API', to: '/', current: false },
  { name: 'Customer migration guides', to: '/', current: false },
  { name: 'Profit sharing program', to: '/', current: false },
]

const SampleSidebarNavigation = () => (
  <SidebarNavigation
    icon={<SampleIcon />}
    items={sampleNavigation2}
    secondaryNavigationTitle="Projects"
    secondaryItems={sampleSecondaryNavigation}
  />
)

const SampleHeading = () => (
  <PageHeading
    className="bg-white px-4 pt-5 sm:pt-4 h-16"
    title={
      <h2 className="text-xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
        Web Developer
      </h2>
    }
  />
)
export const SidebarLayoutPreview = () => {
  return (
    <LayoutWrapper
      layout={{
        name: 'Sidebar Layout',
        to: '/layouts/sidebar-layout',
        current: true,
      }}
    >
      <SidebarLayout
        header={<SampleHeading />}
        sidebarNavigation={<SampleSidebarNavigation />}
        title="Dashboard"
      />
    </LayoutWrapper>
  )
}

export default SidebarLayoutPreview

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'

import { Anchor, SidebarNavigation } from '../../../components'
import { NavigationItem } from '../../../components/Elements/Navigation/NavigationItem'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

const SampleIcon = () => (
  <img
    className="h-8 w-auto"
    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
    alt="Workflow"
  />
)

const sampleNavigation: NavigationItem[] = [
  { name: 'Dashboard', to: '/', icon: HomeIcon, current: true, count: '5' },
  { name: 'Team', icon: UsersIcon, to: '/', count: '3', current: false },
  {
    name: 'Projects',
    to: '/',
    icon: FolderIcon,
    current: false,
    count: '19',
  },
  {
    name: 'Calendar',
    to: '/',
    icon: CalendarIcon,
    current: false,
    count: '20+',
  },
  { name: 'Documents', to: '/', icon: InboxIcon, current: false },
  { name: 'Reports', to: '/', icon: ChartBarIcon, current: false },
]

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

const SampleBottomSlot = () => {
  return (
    <Anchor to="/" className="flex-shrink-0 w-full group block">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-9 w-9 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            Tom Cook
          </p>
          <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
            View profile
          </p>
        </div>
      </div>
    </Anchor>
  )
}

export const SidebarNavigationPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'SidebarNavigation',
        to: '/components/sidebar-navigation',
        current: true,
      }}
    >
      <div className="flex">
        <div className="w-72 bg-white">
          <SidebarNavigation
            icon={<SampleIcon />}
            items={sampleNavigation}
            showIcons={false}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-72 bg-white">
          <SidebarNavigation
            icon={<SampleIcon />}
            items={sampleNavigation}
            bottomSlot={<SampleBottomSlot />}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-72 bg-white">
          <SidebarNavigation
            icon={<SampleIcon />}
            items={sampleNavigation}
            secondaryNavigationTitle="Projects"
            secondaryItems={sampleSecondaryNavigation}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-72 bg-white">
          <SidebarNavigation
            icon={<SampleIcon />}
            items={sampleNavigation2}
            secondaryNavigationTitle="Projects"
            secondaryItems={sampleSecondaryNavigation}
          />
        </div>
      </div>
    </ComponentWrapper>
  )
}

export default SidebarNavigationPreview

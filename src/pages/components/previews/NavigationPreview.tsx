import {
  CreditCardIcon,
  OfficeBuildingIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/solid'

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
} from '@heroicons/react/outline'

import { TabNavigation, VerticalNavigation } from '../../../components'
import { NavigationItem } from '../../../components/Elements/Navigation/NavigationItem'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

const sampleNavigation: NavigationItem[] = [
  { name: 'Dashboard', to: '/', icon: HomeIcon, current: true, count: '5' },
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

const sampleTabs: NavigationItem[] = [
  { name: 'My Account', to: '/', icon: UserIcon, current: false },
  { name: 'Company', to: '/', icon: OfficeBuildingIcon, current: false },
  { name: 'Team Members', to: '/', icon: UsersIcon, current: true },
  { name: 'Billing', to: '/', icon: CreditCardIcon, current: false },
]

const sampleTabs2: NavigationItem[] = [
  { name: 'Applied', to: '/', count: '52', current: false },
  { name: 'Phone Screening', to: '/', count: '6', current: false },
  { name: 'Interview', to: '/', count: '4', current: true },
  { name: 'Offer', to: '/', current: false },
  { name: 'Disqualified', to: '/', current: false },
]

export const NavigationPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'Navigation',
        to: '/components/navigation',
        current: true,
      }}
    >
      <TabNavigation tabs={sampleTabs} />
      <TabNavigation tabs={sampleTabs2} />
      <TabNavigation tabs={sampleTabs} type={TabNavigation.type.pills} />
      <TabNavigation tabs={sampleTabs2} type={TabNavigation.type.pills} />
      <div className="flex">
        <div className="w-72 bg-white">
          <VerticalNavigation items={sampleNavigation} />
        </div>
      </div>
      <div className="flex">
        <div className="w-72 bg-white">
          <VerticalNavigation
            items={sampleNavigation}
            secondaryNavigationTitle="Projects"
            secondaryItems={sampleSecondaryNavigation}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-72 bg-white">
          <VerticalNavigation items={sampleNavigation2} />
        </div>
      </div>
    </ComponentWrapper>
  )
}

export default NavigationPreview

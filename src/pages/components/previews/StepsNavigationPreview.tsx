import { StepsNavigation } from '../../../components'
import {
  StepNavigationStatus,
  StepsNavigationItem,
} from '../../../components/Elements/Navigation/NavigationItem'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

const sampleSteps: StepsNavigationItem[] = [
  {
    id: 'Step 1',
    name: 'Job details',
    to: '/',
    status: StepNavigationStatus.complete,
  },
  {
    id: 'Step 2',
    name: 'Application form',
    to: '/',
    status: StepNavigationStatus.current,
  },
  {
    id: 'Step 3',
    name: 'Preview',
    to: '/',
    status: StepNavigationStatus.upcoming,
  },
]
const sampleSteps2: StepsNavigationItem[] = [
  {
    id: '01',
    name: 'Job details',
    to: '/',
    status: StepNavigationStatus.complete,
  },
  {
    id: '02',
    name: 'Application form',
    to: '/',
    status: StepNavigationStatus.current,
  },
  {
    id: '03',
    name: 'Preview',
    to: '/',
    status: StepNavigationStatus.upcoming,
  },
]

const sampleSteps3: StepsNavigationItem[] = [
  {
    id: '01',
    name: 'Job Details',
    description: 'Vitae sed mi luctus laoreet.',
    to: '/',
    status: StepNavigationStatus.complete,
  },
  {
    id: '02',
    name: 'Application form',
    description: 'Cursus semper viverra.',
    to: '/',
    status: StepNavigationStatus.current,
  },
  {
    id: '03',
    name: 'Preview',
    description: 'Penatibus eu quis ante.',
    to: '/',
    status: StepNavigationStatus.upcoming,
  },
]

const sampleSteps4: StepsNavigationItem[] = [
  { name: 'Step 1', to: '/', status: StepNavigationStatus.complete },
  { name: 'Step 2', to: '/', status: StepNavigationStatus.complete },
  { name: 'Step 3', to: '/', status: StepNavigationStatus.current },
  { name: 'Step 4', to: '/', status: StepNavigationStatus.upcoming },
  { name: 'Step 5', to: '/', status: StepNavigationStatus.upcoming },
]

export const StepsNavigationPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'StepsNavigation',
        to: '/components/steps-navigation',
        current: true,
      }}
    >
      <div className="mb-10">
        <h4 className="mb-8 font-bold text-sm text-gray-700">Simple</h4>
        <StepsNavigation steps={sampleSteps} />
      </div>
      <div className="mb-10">
        <h4 className="mb-8 font-bold text-sm text-gray-700">Panels</h4>
        <StepsNavigation
          steps={sampleSteps2}
          type={StepsNavigation.type.panels}
        />
      </div>
      <div className="mb-10">
        <h4 className="mb-8 font-bold text-sm text-gray-700">Bullets</h4>
        <StepsNavigation
          steps={sampleSteps}
          type={StepsNavigation.type.bullets}
        />
      </div>
      <div className="mb-10">
        <h4 className="mb-8 font-bold text-sm text-gray-700">
          Panels with border
        </h4>
        <StepsNavigation
          steps={sampleSteps3}
          type={StepsNavigation.type.panelsBorder}
        />
      </div>
      <div className="mb-10">
        <h4 className="mb-8 font-bold text-sm text-gray-700">Circles</h4>
        <StepsNavigation
          steps={sampleSteps4}
          type={StepsNavigation.type.circles}
        />
      </div>
      <div className="mb-10">
        <h4 className="mb-8 font-bold text-sm text-gray-700">
          Bullets and Text
        </h4>
        <StepsNavigation
          steps={sampleSteps4}
          type={StepsNavigation.type.bulletsText}
        />
      </div>
      <div className="mb-10">
        <h4 className="mb-8 font-bold text-sm text-gray-700">
          Circles and Text
        </h4>
        <StepsNavigation
          steps={sampleSteps4}
          type={StepsNavigation.type.circlesText}
        />
      </div>
    </ComponentWrapper>
  )
}

export default StepsNavigationPreview

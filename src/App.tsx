import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApplicationUIRoutes } from './routes/ApplicationUIRoutes'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import ComponentsPage from './pages/ComponentsPage'
import {
  ActionPanel,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  CheckboxGroup,
  Divider,
  Dropdown,
  EmptyState,
  Input,
  RadioGroup,
  SelectMenu,
  Table,
  TabNavigation,
  VerticalNavigation,
} from './components'
import ButtonGroup from './components/Elements/ButtonGroup/ButtonGroup'
import { ComponentWrapper } from './pages/components/wrappers/ComponentWrapper'
import { ModalPreview } from './pages/components/previews/ModalPreview'
import { NotificationPreview } from './pages/components/previews/NotificationPreview'
import { SlideOverPreview } from './pages/components/previews/SlideOverPreview'
import { TogglePreview } from './pages/components/previews/TogglePreview'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Switch>
          <Route path="/components">
            <Switch>
              <Route path="/components/action-panel">
                <ComponentWrapper
                  component={{
                    name: 'ActionPanel',
                    href: '/components/action-panel',
                    current: true,
                  }}
                >
                  <ActionPanel />
                </ComponentWrapper>
              </Route>
              <Route path="/components/avatar">
                <ComponentWrapper
                  component={{
                    name: 'Avatar',
                    href: '/components/avatar',
                    current: true,
                  }}
                >
                  <Avatar />
                </ComponentWrapper>
              </Route>
              <Route path="/components/badge">
                <ComponentWrapper
                  component={{
                    name: 'Badge',
                    href: '/components/badge',
                    current: true,
                  }}
                >
                  <Badge />
                </ComponentWrapper>
              </Route>
              <Route path="/components/breadcrumb">
                <ComponentWrapper
                  component={{
                    name: 'Breadcrumb',
                    href: '/components/breadcrumb',
                    current: true,
                  }}
                >
                  <Breadcrumb />
                </ComponentWrapper>
              </Route>
              <Route path="/components/button">
                <ComponentWrapper
                  component={{
                    name: 'Button',
                    href: '/components/button',
                    current: true,
                  }}
                >
                  <Button>Hello world</Button>
                </ComponentWrapper>
              </Route>
              <Route path="/components/button-group">
                <ComponentWrapper
                  component={{
                    name: 'ButtonGroup',
                    href: '/components/button-group',
                    current: true,
                  }}
                >
                  <ButtonGroup />
                </ComponentWrapper>
              </Route>
              <Route path="/components/checkbox-group">
                <ComponentWrapper
                  component={{
                    name: 'CheckboxGroup',
                    href: '/components/checkbox-group',
                    current: true,
                  }}
                >
                  <CheckboxGroup />
                </ComponentWrapper>
              </Route>
              <Route path="/components/divider">
                <ComponentWrapper
                  component={{
                    name: 'Divider',
                    href: '/components/divider',
                    current: true,
                  }}
                >
                  <Divider />
                </ComponentWrapper>
              </Route>
              <Route path="/components/dropdown">
                <ComponentWrapper
                  component={{
                    name: 'Dropdown',
                    href: '/components/dropdown',
                    current: true,
                  }}
                >
                  <Dropdown />
                </ComponentWrapper>
              </Route>
              <Route path="/components/empty-state">
                <ComponentWrapper
                  component={{
                    name: 'EmptyState',
                    href: '/components/empty-state',
                    current: true,
                  }}
                >
                  <EmptyState />
                </ComponentWrapper>
              </Route>
              <Route path="/components/file-preview">
                <ComponentWrapper
                  component={{
                    name: 'FilePreview',
                    href: '/components/file-preview',
                    current: true,
                  }}
                >
                  <Input.File />
                </ComponentWrapper>
              </Route>
              <Route path="/components/input">
                <ComponentWrapper
                  component={{
                    name: 'Input',
                    href: '/components/input',
                    current: true,
                  }}
                >
                  <Input />
                </ComponentWrapper>
              </Route>
              <Route path="/components/modal">
                <ModalPreview />
              </Route>
              <Route path="/components/navigation">
                <ComponentWrapper
                  component={{
                    name: 'Navigation',
                    href: '/components/navigation',
                    current: true,
                  }}
                >
                  <TabNavigation />
                  <div className="flex">
                    <div className="w-72 bg-white">
                      <VerticalNavigation />
                    </div>
                  </div>
                </ComponentWrapper>
              </Route>
              <Route path="/components/notification">
                <NotificationPreview />
              </Route>
              <Route path="/components/radio-group">
                <ComponentWrapper
                  component={{
                    name: 'RadioGroup',
                    href: '/components/radio-group',
                    current: true,
                  }}
                >
                  <RadioGroup />
                </ComponentWrapper>
              </Route>
              <Route path="/components/select-menu">
                <ComponentWrapper
                  component={{
                    name: 'SelectMenu',
                    href: '/components/select-menu',
                    current: true,
                  }}
                >
                  <SelectMenu />
                </ComponentWrapper>
              </Route>
              <Route path="/components/slide-over">
                <SlideOverPreview />
              </Route>
              <Route path="/components/table">
                <ComponentWrapper
                  component={{
                    name: 'Table',
                    href: '/components/table',
                    current: true,
                  }}
                >
                  <Table />
                </ComponentWrapper>
              </Route>
              <Route path="/components/toggle">
                <TogglePreview />
              </Route>
              <Route exact path="/components">
                <ComponentsPage />
              </Route>
            </Switch>
          </Route>
          <Route path="/pricing">
            <PricingPage />
          </Route>
          <Route path="/application-ui">
            <ApplicationUIRoutes />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

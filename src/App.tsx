import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApplicationUIRoutes } from './routes/ApplicationUIRoutes'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import ComponentsPage from './pages/ComponentsPage'
import {
  ButtonGroup,
  CheckboxGroup,
  Container,
  Divider,
  Dropdown,
  EmptyState,
  Input,
  RadioGroup,
  SelectMenu,
  Table,
} from './components'

import { ComponentWrapper } from './pages/components/wrappers/ComponentWrapper'
import { LayoutWrapper } from './pages/components/wrappers/LayoutWrapper'
import { PageWrapper } from './pages/components/wrappers/PageWrapper'

import ModalPreview from './pages/components/previews/ModalPreview'
import NotificationPreview from './pages/components/previews/NotificationPreview'
import SlideOverPreview from './pages/components/previews/SlideOverPreview'
import TogglePreview from './pages/components/previews/TogglePreview'

import LayoutsPage from './pages/LayoutsPage'
import SignInLayout from './pages/layouts/SignInLayout/SignInLayout'
import Anchor from './components/Elements/Anchor/Anchor'
import ButtonsPreview from './pages/components/previews/ButtonsPreview'
import InputPreview from './pages/components/previews/InputsPreview'

import StackedFormLayout from './pages/layouts/StackedFormLayout/StackedFormLayout'
import TwoColumnsCardsFormLayout from './pages/layouts/TwoColumnsCardsFormLayout/TwoColumnsCardsFormLayout'

import AnimatedBlobBackgroundPreview from './pages/components/previews/AnimatedBlobBackgroundPreview'
import CardHeadingPreview from './pages/components/previews/CardHeadingPreview'
import CodePreview from './pages/components/previews/CodePreview'
import NavBarPreview from './pages/components/previews/NavBarPreview'
import NavigationPreview from './pages/components/previews/NavigationPreview'
import PageHeadingPreview from './pages/components/previews/PageHeadingPreview'
import PaginationPreview from './pages/components/previews/PaginationPreview'
import SectionHeadingPreview from './pages/components/previews/SectionHeadingPreview'
import SidebarNavigationPreview from './pages/components/previews/SidebarNavigationPreview'
import StepsNavigationPreview from './pages/components/previews/StepsNavigationPreview'
import StackedLayoutPreview from './pages/components/previews/StackedLayoutPreview'
import SidebarLayoutPreview from './pages/components/previews/SidebarLayoutPreview'

import PagesPage from './pages/PagesPage'
import { ActionPanelPreview } from './pages/components/previews/ActionPanelPreview'
import AnchorPreview from './pages/components/previews/AnchorPreview'
import { AvatarPreview } from './pages/components/previews/AvatarPreview'
import { BadgePreview } from './pages/components/previews/BadgePreview'
import { BreadcrumbPreview } from './pages/components/previews/BreadcrumbPreview'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Switch>
          <Route path="/pages">
            <Switch>
              <Route path="/pages/landing-page">
                <PageWrapper
                  page={{
                    name: 'Landing Page',
                    to: '/pages/landing-page',
                    current: true,
                  }}
                >
                  <LandingPage />
                </PageWrapper>
              </Route>
              <Route path="/pages/pricing-page">
                <PageWrapper
                  page={{
                    name: 'Pricing Page',
                    to: '/pages/pricing-page',
                    current: true,
                  }}
                >
                  <PricingPage />
                </PageWrapper>
              </Route>
              <Route exact path="/pages">
                <PagesPage />
              </Route>
            </Switch>
          </Route>
          <Route path="/layouts">
            <Switch>
              <Route path="/layouts/container">
                <LayoutWrapper
                  layout={{
                    name: 'Container',
                    to: '/layouts/container',
                    current: true,
                  }}
                >
                  <Container className="bg-gray-200 h-96 py-10">
                    Hello World
                  </Container>
                </LayoutWrapper>
              </Route>
              <Route path="/layouts/divider">
                <LayoutWrapper
                  layout={{
                    name: 'Divider',
                    to: '/layouts/divider',
                    current: true,
                  }}
                >
                  <Divider />
                </LayoutWrapper>
              </Route>
              <Route path="/layouts/stacked-layout">
                <StackedLayoutPreview />
              </Route>
              <Route path="/layouts/sidebar-layout">
                <SidebarLayoutPreview />
              </Route>
              <Route path="/layouts/sign-in">
                <LayoutWrapper
                  layout={{
                    name: 'Sign In',
                    to: '/layouts/sign-in',
                    current: true,
                  }}
                >
                  <SignInLayout />
                </LayoutWrapper>
              </Route>
              <Route path="/layouts/stacked-form">
                <LayoutWrapper
                  layout={{
                    name: 'Stacked Form',
                    to: '/layouts/stacked-form',
                    current: true,
                  }}
                >
                  <StackedFormLayout />
                </LayoutWrapper>
              </Route>
              <Route path="/layouts/two-columns-cards-form">
                <LayoutWrapper
                  layout={{
                    name: 'Two Column Cards Form',
                    to: '/layouts/two-columns-cards-form',
                    current: true,
                  }}
                >
                  <TwoColumnsCardsFormLayout />
                </LayoutWrapper>
              </Route>
              <Route exact path="/layouts">
                <LayoutsPage />
              </Route>
            </Switch>
          </Route>
          <Route path="/components">
            <Switch>
              <Route path="/components/action-panel">
                <ActionPanelPreview />
              </Route>
              <Route path="/components/anchor">
                <AnchorPreview />
              </Route>
              <Route path="/components/animated-blob-background">
                <AnimatedBlobBackgroundPreview />
              </Route>
              <Route path="/components/avatar">
                <AvatarPreview />
              </Route>
              <Route path="/components/badge">
                <BadgePreview />
              </Route>
              <Route path="/components/breadcrumb">
                <BreadcrumbPreview />
              </Route>
              <Route path="/components/button">
                <ButtonsPreview />
              </Route>
              <Route path="/components/button-group">
                <ComponentWrapper
                  component={{
                    name: 'ButtonGroup',
                    to: '/components/button-group',
                    current: true,
                  }}
                >
                  <ButtonGroup />
                </ComponentWrapper>
              </Route>
              <Route path="/components/card-heading">
                <CardHeadingPreview />
              </Route>
              <Route path="/components/checkbox-group">
                <ComponentWrapper
                  component={{
                    name: 'CheckboxGroup',
                    to: '/components/checkbox-group',
                    current: true,
                  }}
                >
                  <CheckboxGroup />
                </ComponentWrapper>
              </Route>
              <Route path="/components/code">
                <CodePreview />
              </Route>
              <Route path="/components/dropdown">
                <ComponentWrapper
                  component={{
                    name: 'Dropdown',
                    to: '/components/dropdown',
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
                    to: '/components/empty-state',
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
                    to: '/components/file-preview',
                    current: true,
                  }}
                >
                  <Input.File />
                </ComponentWrapper>
              </Route>
              <Route path="/components/input">
                <InputPreview />
              </Route>
              <Route path="/components/modal">
                <ModalPreview />
              </Route>
              <Route path="/components/nav-bar">
                <NavBarPreview />
              </Route>
              <Route path="/components/navigation">
                <NavigationPreview />
              </Route>
              <Route path="/components/notification">
                <NotificationPreview />
              </Route>
              <Route path="/components/page-heading">
                <PageHeadingPreview />
              </Route>
              <Route path="/components/pagination">
                <PaginationPreview />
              </Route>
              <Route path="/components/section-heading">
                <SectionHeadingPreview />
              </Route>
              <Route path="/components/radio-group">
                <ComponentWrapper
                  component={{
                    name: 'RadioGroup',
                    to: '/components/radio-group',
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
                    to: '/components/select-menu',
                    current: true,
                  }}
                >
                  <SelectMenu />
                </ComponentWrapper>
              </Route>
              <Route path="/components/sidebar-navigation">
                <SidebarNavigationPreview />
              </Route>
              <Route path="/components/slide-over">
                <SlideOverPreview />
              </Route>
              <Route path="/components/steps-navigation">
                <StepsNavigationPreview />
              </Route>
              <Route path="/components/table">
                <ComponentWrapper
                  component={{
                    name: 'Table',
                    to: '/components/table',
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

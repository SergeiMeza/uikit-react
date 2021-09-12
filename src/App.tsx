import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApplicationUIRoutes } from './routes/ApplicationUIRoutes'
import { Home } from './pages/Home'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pricing">
          <PricingPage />
        </Route>
        <Route path="/application-ui">
          <ApplicationUIRoutes />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

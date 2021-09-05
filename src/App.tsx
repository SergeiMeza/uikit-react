import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApplicationUIRoutes } from './routes/ApplicationUIRoutes'
import { Home } from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/application-ui">
          <ApplicationUIRoutes />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { ApplicationShellsRoutes } from './ApplicationShellsRoutes'

export const ApplicationUIRoutes = () => {
  let match = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/application-shells`}>
          <ApplicationShellsRoutes />
        </Route>
      </Switch>
    </div>
  )
}

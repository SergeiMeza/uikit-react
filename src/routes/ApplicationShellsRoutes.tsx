import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { StackedLayouts } from '../pages/sections/StackedLayouts'

export const ApplicationShellsRoutes = () => {
  let match = useRouteMatch()
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/stacked`}>
          <StackedLayouts />
        </Route>
      </Switch>
    </div>
  )
}

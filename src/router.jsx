import * as React from 'react'
import { Router, browserHistory, Route, Redirect } from 'react-router'
import { Layout } from './layout'
import { Login } from './component/login'
import { Home } from './component'
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Redirect from='/' to='login'/>
        <Route path='/' component={Layout}>
          <Route path='home' component={Home} />
          <Route path='login' component={Login} />
        </Route>
      </Router>
    )
  }
}
export { AppRouter }

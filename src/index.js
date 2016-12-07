import React from 'react'
import { render } from 'react-dom'
import {
  Router,
  Route,
  browserHistory
} from 'react-router'
import AuthService from './utils/AuthService'
import App from './components/app/App'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Admin from './components/admin/Admin'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
import Login from './components/login/Login'
import './style/semantic/semantic.min.css'
import './style/main.css'

const auth = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

// OnEnter for callback url to parse access_token
const parseAuthHash = (nextState, replace) => {
  if (nextState.location.hash) {
    auth.parseHash(nextState.location.hash)
    replace({ pathname: '/' })
  }
}

render((
  <Router history={browserHistory}>
    <Route path='/' component={App} auth={auth}>
      <Route path='/about' component={About} />
      <Route path='/blog' component={Blog} />
      <Route path='/admin' component={Admin} onEnter={requireAuth} />
      <Route path='/contact' component={Contact} />
      <Route path='/resume' component={Resume} />
      <Route path='/login' component={Login} onEnter={parseAuthHash} />
    </Route>
  </Router>
), document.getElementById('root'))

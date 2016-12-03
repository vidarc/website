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
import './style/semantic/semantic.min.css'
import './style/main.css'

const auth = new AuthService(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN);

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
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
    </Route>
  </Router>
), document.getElementById('root'))

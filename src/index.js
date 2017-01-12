import React from 'react'
import { render } from 'react-dom'
import {
  IndexRoute,
  Router,
  Route,
  browserHistory
} from 'react-router'
import App from './components/app/App'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Admin from './components/admin/Admin'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Resume from './components/resume/Resume'
import Login from './components/login/Login'
import Auth from './utils/Auth'
import './style/main.css'
import './style/semantic/semantic.min.css'

const auth = new Auth()

const requireAuth = (nextState, replace) => {
  if (!auth.isLoggedin()) {
    replace({
      pathname: 'login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const requireAdmin = (nextState, replace) => {
  requireAuth()

  if (!auth.isAdmin()) {
    replace({
      pathname: 'home',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={browserHistory}>
    <Route path='/' component={App} auth={auth}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='blog' component={Blog} />
      <Route path='contact' component={Contact} />
      <Route path='resume' component={Resume} />
      <Route path='admin' component={Admin} onEnter={requireAdmin} />
      <Route path='login' component={Login} />
    </Route>
  </Router>
), document.getElementById('root'))

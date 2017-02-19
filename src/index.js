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
import Admin from './components/admin/Admin'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Playground from './components/playground/Playground'
import Art from './components/playground/art/Art'
import Resume from './components/resume/Resume'
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
      <Route path='admin' component={Admin} onEnter={requireAdmin} />
      <Route path='blog' component={Blog} />
      <Route path='contact' component={Contact} />
      <Route path='login' component={Login} />
      <Route path='playground' component={Playground}>
        <Route path='art' component={Art} />
      </Route>
      <Route path='resume' component={Resume} />
    </Route>
  </Router>
), document.getElementById('root'))

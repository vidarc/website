import About from './components/About/'
import Admin from './components/Admin'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Resume from './components/Resume'

import Projects from './components/Projects'
import Art from './components/Projects/Art'
import Reddit from './components/Projects/Reddit'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/admin',
    component: Admin,
  },
  {
    path: '/blog',
    component: Blog,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/projects',
    component: Projects,
    routes: [
      {
        path: '/projects/art',
        component: Art,
      },
      {
        path: '/projects/reddit',
        component: Reddit,
      },
    ],
  },
  {
    path: '/resume',
    component: Resume,
  },
]

export default routes

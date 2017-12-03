import About from './components/About/'
import Admin from './components/Admin'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Resume from './components/Resume'

import Projects, { ProjectsEntry } from './components/Projects'
import Art from './components/Projects/Art'
import Reddit from './components/Projects/Reddit'

const routes = [
  {
    key: 0,
    path: '/',
    component: Home,
    exact: true,
  },
  {
    key: 1,
    path: '/about',
    component: About,
  },
  {
    key: 2,
    path: '/admin',
    component: Admin,
  },
  {
    key: 3,
    path: '/blog',
    component: Blog,
  },
  {
    key: 4,
    path: '/contact',
    component: Contact,
  },
  {
    key: 5,
    path: '/login',
    component: Login,
  },
  {
    key: 6,
    path: '/projects',
    component: Projects,
    routes: [
      {
        key: 7,
        path: '/projects',
        component: ProjectsEntry,
        exact: true,
      },
      {
        key: 8,
        path: '/projects/art',
        component: Art,
      },
      {
        key: 9,
        path: '/projects/reddit',
        component: Reddit,
      },
    ],
  },
  {
    key: 10,
    path: '/resume',
    component: Resume,
  },
]

export default routes

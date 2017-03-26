import About from './components/about/About'
import Admin from './components/admin/Admin'
import Art from './components/playground/art/Art'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Playground from './components/playground/Playground'
import Resume from './components/resume/Resume'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/playground',
    component: Playground,
    routes: [
      {
        path: '/playground/art',
        component: Art
      }
    ]
  },
  {
    path: '/resume',
    component: Resume
  }
]

export default routes

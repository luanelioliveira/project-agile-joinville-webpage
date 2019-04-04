import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import Jobs from '@/components/Jobs/Jobs'
import Contact from '@/components/Contact/Contact'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
];


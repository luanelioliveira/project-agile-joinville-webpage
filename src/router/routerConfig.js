import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Jobs from '@/components/jobs/Jobs'
import Contact from '@/components/contact/Contact'
import Profile from '@/components/user/Profile'
import Signin from '@/components/user/Signin'

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


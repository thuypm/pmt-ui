import Vue from 'vue'
import Router from 'vue-router'
import PrivateLayout from '@/layouts/PrivateLayout'
// import Chat from '@/pages/container/Chat'
import Signin from '@/pages/Signin'
import AllGroup from '@/pages/AllGroup';
import Notice from '@/pages/Notice';
import Group from '@/pages/Group';
import Signup from '@/pages/Signup'
import File from '@/pages/File'
import Meeting from '@/pages/Meeting'

import Exercise from '@/pages/Exercise'
// import ExStudent from '@/pages/container/ExStudent'
// import ExAdmin from '@/pages/container/ExAdmin'
// import Error from '@/pages/container/Error'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PrivateLayout,
      redirect: "/all-group",
      beforeEnter: (to, from, next) => {
        if (localStorage.token)
          return next()
        else
          next('/signin')
      },
      children:
        [
          //   {
          //     path: 'chat',
          //     name: 'chat',
          //     component: Chat
          //   },
          {
            path: 'all-group',
            name: 'allGroup',
            component: AllGroup
          },

          {
            path: 'file',
            name: 'file',
            component: File
          },
          {
            path: 'notification',
            name: 'notification',
            component: Notice
          },
          {
            path: 'group',
            name: 'group',
            component: Group
          },
          {
            path: 'exercise',
            name: 'exercise',
            component: Exercise
          },
          {
            path: 'meeting',
            name: 'meeting',
            component: Meeting
          },
          //   {
          //     path: 'exStudent/:id',
          //     name: 'Exercise',
          //     component: ExStudent
          //   },
          //   {
          //     path: 'exAdmin/:id',
          //     name: 'Manage',
          //     component: ExAdmin
          //   },
        ]
    },

    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    // {
    //   path: '*',
    //   name: 'error',
    //   component: Error
    // },
  ],

})
// router.beforeEach((to, from, next) => {
//   switch (to.fullPath) {
//     case '/signin':
//       {
//         if (localStorage.token != undefined)
//           next('/')
//         else
//           next();
//         break;
//       };
//     case '/signup':
//       {
//         if (localStorage.token != undefined) {
//           alert('vui lòng đăng xuất trước');
//           next('/')
//         }
//         else
//           next();
//         break;
//       };
//     default: {
//       if (localStorage.token != undefined)
//         next()
//       else
//         next('/signin')
//       break;
//     }
//   }
// })
export default router;
import Vue from 'vue';
import Router from 'vue-router';
import home from '@/ddwb/Home.vue'
import base1 from '@/ddwb/base1.vue'
import company from '@/ddwb/company.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name:'home',
      component: home
    },
    // {
    //     path: '/base',
    //     name:'base',
    //     component: base,
    //     hidden: true,
    // },

    //   {
    //     path: '/Plot',
    //     name:'plot',
    //     component: plot,
    //     hidden: true,
    //   },
      {
        path: '/base',
        name:'base',
        component: base1,
        hidden: true,
      },
      {
        path: '/company',
        name: 'company',
        component: company,
        hidden: true
      }
    // {
    //   path: '/',
    //   component: () => import('@/kanban/Load.vue'),
    // },
    // {
    //   path: '/load',
    //   name: 'load',
    //   component: () => import('@/kanban/Load.vue'),
    // },
    // {
    //   path: '/home',
    //   name:'home',
    //   component: () => import('@/kanban/Home.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/newhome',
    //   name:'newhome',
    //   component: () => import('@/kanban/newHome.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/sky',
    //   name:'sky',
    //   component: () => import('@/kanban/sky.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/ground',
    //   name:'ground',
    //   component: () => import('@/kanban/ground.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/crop',
    //   name:'crop',
    //   component: () => import('@/kanban/crop.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/person',
    //   name:'person',
    //   component: () => import('@/kanban/person.vue'),
    //   hidden: true,
    // },

  ],
});

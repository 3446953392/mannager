import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: '主页',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: '主页', icon: 'dashboard' }
  //   }]
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/list',
    children: [{
      path: 'list',
      name: 'List',
      component: () => import('@/views/table/index'),
      meta: { title: '活动列表', icon: 'table' }
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '添加活动',
        component: () => import('@/views/form/index'),
        meta: { title: '添加活动', icon: 'form' }
      }
    ]
  },
  {
    path: '/chart',
    component: Layout,
    children: [
      {
        path: 'chart',
        name: '参与情况',
        component: () => import('@/views/chart/mix-chart'),
        meta: { title: '活动数据', icon: 'chart' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table/index'),
        name: 'DynamicTable',
        meta: { title: '用户数据', icon: 'peoples' }
      }
    ]
  },
  {
    path: '/line',
    component: Layout,
    children: [
      {
        path: 'line',
        name: '流量数据',
        component: () => import('@/views/chart/line'),
        meta: { title: '流量数据', icon: 'example' }
      }
    ]
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/list',
  //   children: [{
  //     path: 'list',
  //     name: 'List',
  //     component: () => import('@/views/table/x'),
  //     meta: { title: '操作日志', icon: 'list' }
  //   }]
  // },
  {
    path: '/role',
    component: Layout,
    children: [
      {
        path: 'role',
        name: '用户权限',
        component: () => import('@/views/permission/role'),
        meta: { title: '用户权限', icon: 'lock' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

import type { RouteRecordRaw } from 'vue-router'

export const ROUTES = [
  {
    path: '/',
    children: [
      {
        path: '',
        component: () => import('@/pages/page.vue'),
      },
      {
        path: 'primevue-forms',
        component: () => import('@/pages/primevue-forms/page.vue'),
      },
      {
        path: 'vee-validate',
        component: () => import('@/pages/vee-validate/page.vue'),
        children: [
          {
            path: 'case-component',
            component: () => import('@/pages/vee-validate/case-component/page.vue'),
          },
          {
            path: 'case-composable',
            component: () => import('@/pages/vee-validate/case-composable/page.vue'),
          },
        ],
      },
    ],
  },
] satisfies RouteRecordRaw[]

export const ROUTER_CATEGORIES = ROUTES[0]
  .children
  .map(({ path }) => ({
    name: path.replaceAll('/', ' '),
    path: `/${path}`,
  }))

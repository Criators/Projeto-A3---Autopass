import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainMenu.vue'),
    children: [{ path: '', component: () => import('pages/SideMenuPage.vue') }],
  },
  {
    path: '/QRCode',
    component: () => import('layouts/QrCodeLayout.vue'),
    children: [
      { path: 'step1', component: () => import('src/pages/SideMenuPage.vue') },
      { path: 'processing', component: () => import('pages/Loading.vue') },
    ],
  },
  {
    path: '/TOP',
    component: () => import('layouts/TOPLayout.vue'),
    children: [
      { path: 'step1', component: () => import('src/pages/SideMenuPage.vue') },
      { path: 'processing', component: () => import('pages/Loading.vue') },
    ],
  },
  {
    path: '/BilheteUnico',
    component: () => import('layouts/BilheteLayout.vue'),
    children: [
      { path: 'step1', component: () => import('src/pages/SideMenuPage.vue') },
      { path: 'processing', component: () => import('pages/Loading.vue') },
    ],
  },
  {
    path: '/Help',
    component: () => import('layouts/Help.vue'),
    children: [{ path: '', component: () => import('pages/Help.vue') }],
  },
  {
    path: '/WrongPass',
    component: () => import('layouts/WrongPassLayout.vue'),
    children: [{ path: '', component: () => import('pages/WrongPass.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

import { RouteRecordRaw } from 'vue-router';
import SideMenuPage from 'pages/SideMenuPage.vue';
import QrCodeLayout from 'layouts/QrCodeLayout.vue';
import MainMenu from 'src/layouts/MainMenu.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainMenu,
    children: [{ path: '', component: SideMenuPage }],
    props: true,
  },
  {
    path: '/QRCode',
    component: QrCodeLayout,
    children: [{ path: '', component: SideMenuPage }],
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

import { RouteRecordRaw } from 'vue-router';
import SideMenuPage from 'pages/SideMenuPage.vue';
import QrCodeLayout from 'layouts/QrCodeLayout.vue';
import TOPLayoutVue from 'src/layouts/TOPLayout.vue';
import BilheteLayoutVue from 'layouts/BilheteLayout.vue';
import HelpLayout from 'layouts/HelpLayout.vue';
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
    children: [
      { path: '', component: SideMenuPage },
      { path: 'processing', component: SideMenuPage },
    ],
  },
  {
    path: '/TOP',
    component: TOPLayoutVue,
    children: [
      { path: '', component: SideMenuPage },
      { path: 'processing', component: () => import('pages/Loading.vue') },
    ],
  },
  {
    path: '/BilheteUnico',
    component: BilheteLayoutVue,
    children: [
      { path: '', component: SideMenuPage },
      { path: 'processing', component: () => import('pages/Loading.vue') },
    ],
  },
  {
    path: '/Help',
    component: HelpLayout,
    children: [{ path: '', component: () => import('src/pages/HelpPage.vue') }],
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

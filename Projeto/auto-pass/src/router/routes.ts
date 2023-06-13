import { RouteRecordRaw } from 'vue-router';
import QrCodeLayout from 'layouts/QrCodeLayout.vue';
import TOPLayoutVue from 'src/layouts/TOPLayout.vue';
import BilheteLayoutVue from 'layouts/BilheteLayout.vue';
import HelpLayout from 'layouts/HelpLayout.vue';
import EndLayout from 'src/layouts/EndLayout.vue';
import MainMenu from 'src/layouts/MainMenu.vue';

import SideMenuPage from 'pages/SideMenuPage.vue';
import LoadingPage from 'src/pages/LoadingPage.vue';
import RechargeTypePage from 'src/pages/RechargeTypePage.vue';
import DesiredValuePage from 'src/pages/DesiredValuePage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainMenu,
    children: [{ path: '', component: SideMenuPage }],
    props: true,
  },
  {
    path: '/InvPrintSuccess',
    component: EndLayout,
    children: [{ path: '', component: LoadingPage }],
  },
  {
    path: '/Thanks',
    component: EndLayout,
    children: [{ path: '', component: LoadingPage }],
  },
  {
    path: '/QRCode',
    component: QrCodeLayout,
    children: [
      { path: '', component: SideMenuPage },
      {
        path: 'Processing',
        component: LoadingPage,
      },
      {
        path: 'InsertCard',
        component: LoadingPage,
      },
      {
        path: 'Processing2',
        component: LoadingPage,
      },
      {
        path: 'InsertPass',
        component: LoadingPage,
      },
      {
        path: 'Approved',
        component: LoadingPage,
      },
      {
        path: 'RemoveDebit',
        component: LoadingPage,
      },
      {
        path: 'Printing',
        component: LoadingPage,
      },
      {
        path: 'PrintSuccess',
        component: LoadingPage,
      },
      {
        path: 'InvoiceQuestion',
        component: SideMenuPage,
      },
    ],
  },
  {
    path: '/TOP',
    component: TOPLayoutVue,
    children: [
      { path: '', component: SideMenuPage },
      {
        path: 'Processing',
        component: LoadingPage,
      },
      {
        path: 'InsertTCard',
        component: LoadingPage,
      },
      {
        path: 'RechargeType',
        component: RechargeTypePage,
      },
      {
        path: 'DesiredValue',
        component: DesiredValuePage,
      },
      {
        path: 'InsertMoney',
        component: SideMenuPage,
      },
      {
        path: 'ValueAccepted',
        component: LoadingPage,
      },
      {
        path: 'InsertCard',
        component: LoadingPage,
      },
      {
        path: 'InsertPass',
        component: LoadingPage,
      },
      {
        path: 'Approved',
        component: LoadingPage,
      },
      {
        path: 'RemoveDebit',
        component: LoadingPage,
      },
      {
        path: 'RemoveTCard',
        component: LoadingPage,
      },
      {
        path: 'InvoiceQuestion',
        component: SideMenuPage,
      },
    ],
  },
  {
    path: '/BilheteUnico',
    component: BilheteLayoutVue,
    children: [
      { path: '', component: SideMenuPage },
      {
        path: 'Processing',
        component: LoadingPage,
      },
      {
        path: 'InsertTCard',
        component: LoadingPage,
      },
      {
        path: 'RechargeType',
        component: RechargeTypePage,
      },
      {
        path: 'DesiredValue',
        component: DesiredValuePage,
      },
      {
        path: 'InsertMoney',
        component: SideMenuPage,
      },
      {
        path: 'ValueAccepted',
        component: LoadingPage,
      },
      {
        path: 'InsertCard',
        component: LoadingPage,
      },
      {
        path: 'InsertPass',
        component: LoadingPage,
      },
      {
        path: 'Approved',
        component: LoadingPage,
      },
      {
        path: 'RemoveDebit',
        component: LoadingPage,
      },
      {
        path: 'RemoveTCard',
        component: LoadingPage,
      },
      {
        path: 'InvoiceQuestion',
        component: SideMenuPage,
      },
    ],
  },
  {
    path: '/Help',
    component: HelpLayout,
    children: [{ path: '', component: () => import('src/pages/HelpPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

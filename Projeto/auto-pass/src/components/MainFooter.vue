<template>
  <footer>
    <div
      class="flex items-center"
      :style="{ opacity: isSideMenuInfo ? '0' : '100%' }"
    >
      <img :src="AutoPassIcon" />
    </div>
    <div class="flex items-center">
      <div class="footer-icon"><img :src="QrIcon" /></div>
      <div class="footer-icon"><img :src="EloIcon" /></div>
      <div class="footer-icon"><img :src="CardIcon" /></div>
      <div class="footer-icon"><img :src="TopIcon" /></div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import QrIcon from '../assets/icons/QrCode.png';
import AutoPassIcon from '../assets/icons/autopass.png';
import TopIcon from '../assets/icons/TOP.png';
import CardIcon from '../assets/icons/card.png';
import EloIcon from '../assets/icons/elo.png';
import { useRouter } from 'vue-router';

function isSideMenu(routes: string[]) {
  const route = !!routes[2] ? routes[2] : routes[1];
  const NotSideMenuList = [
    'Help',
    'Processing',
    'Processing2',
    'RemoveDebit',
    'Printing',
    'PrintSuccess',
    'InvPrintSuccess',
    'Thanks',
    'InsertCard',
    'InsertTCard',
    'InsertPass',
    'Approved',
    'RechargeType',
  ];
  return !NotSideMenuList.includes(route);
}

export default defineComponent({
  name: 'MainFooter',
  data: function () {
    return {
      QrIcon: QrIcon,
      AutoPassIcon: AutoPassIcon,
      TopIcon: TopIcon,
      CardIcon: CardIcon,
      EloIcon: EloIcon,
    };
  },
  setup() {
    const router = useRouter();
    const pathList = ref(router.currentRoute.value.path.split('/'));

    const isSideMenuInfo = ref(isSideMenu(pathList.value));

    watch(
      () => router.currentRoute.value.fullPath,
      () => {
        pathList.value = router.currentRoute.value.path.split('/');
        isSideMenuInfo.value = isSideMenu(pathList.value);
      }
    );
    return { isSideMenuInfo };
  },
});
</script>

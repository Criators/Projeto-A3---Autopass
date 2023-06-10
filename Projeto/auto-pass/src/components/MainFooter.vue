<template>
  <footer>
    <div
      class="flex items-center"
      :style="{ opacity: isSideMenu ? '0' : '100%' }"
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
import { defineComponent } from 'vue';
import QrIcon from '../assets/icons/QrCode.png';
import AutoPassIcon from '../assets/icons/autopass.png';
import TopIcon from '../assets/icons/TOP.png';
import CardIcon from '../assets/icons/card.png';
import EloIcon from '../assets/icons/elo.png';
export default defineComponent({
  name: 'MainFooter',
  props: {
    isSideMenu: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      QrIcon: QrIcon,
      AutoPassIcon: AutoPassIcon,
      TopIcon: TopIcon,
      CardIcon: CardIcon,
      EloIcon: EloIcon,
    };
  },
});
</script>

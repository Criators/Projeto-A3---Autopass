<template>
  <div>
    <ButtonsMenu class="buttons-menu" :buttonList="getMenuOptions()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonsMenu from './ButtonsMenu.vue';
import OptionsTypeJson from '../assets/OptionsType.json';
export default defineComponent({
  name: 'SideMenu',
  data() {
    return {
      OptionsTypes: OptionsTypeJson,
    };
  },
  components: {
    ButtonsMenu,
  },
  methods: {
    getMenuOptions() {
      switch (this.$route.path) {
        case '/QRCode':
          return this.OptionsTypes.qrCode;
        case '/TOP':
          return this.OptionsTypes.topCard;
        case '/BilheteUnico':
          return this.OptionsTypes.bilhete;
        default:
          return this.OptionsTypes.startMenu;
      }
    },
  },
});
</script>

<template>
  <div class="scroll round-border">
    <QuantityCalc
      :style="{ display: $route.path == '/QRCode' ? 'block' : 'none' }"
    />
    <div v-for="button in buttonList" :key="button.key">
      <SideMenuButton
        :text="button.text"
        :route="button.route"
        class="side-menu-button"
      />
    </div>
    <InsertMoney
      class=""
      :style="{
        display: $route.path.includes('/InsertMoney') ? 'block' : 'none',
      }"
    />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, watch, ref } from 'vue';
import SideMenuButton from 'src/components/SideMenuButton.vue';
import QuantityCalc from './QuantityCalc.vue';
import InsertMoney from './InsertMoney.vue';
import { useRouter } from 'vue-router';
import { useAltStore } from 'src/stores/alt-info-stores';
export interface Button {
  key: number;
  text: string;
  route: string;
}

export default defineComponent({
  name: 'ButtonsMenu',
  components: {
    SideMenuButton,
    QuantityCalc,
    InsertMoney,
  },
  props: {
    hasQuantity: {
      type: Boolean,
      default: false,
    },
    buttonList: {
      type: Array as PropType<Button[]>,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const countdown = ref(5);
    const altStore = useAltStore();

    const startCountDown = () => {
      const interval = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
          clearInterval(interval);
          countdown.value = 5;
          router.push('ValueAccepted');
        }
      }, 1000);
    };

    props.buttonList;
    watch(
      () => router.currentRoute.value.fullPath,
      () => {
        if (router.currentRoute.value.path.includes('InsertMoney')) {
          if (altStore.curAlt == 'Débito') router.push('InsertCard');
          else startCountDown();
        }
      }
    );
  },
});
</script>

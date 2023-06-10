<template>
  <div>
    <QuantityCalc
      :style="{ display: $route.path == '/QRCode' ? 'block' : 'none' }"
    ></QuantityCalc>
    <div v-for="button in buttonList" :key="button.key">
      <SideMenuButton
        :text="button.text"
        :route="button.route"
        class="side-menu-button"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import SideMenuButton from 'src/components/SideMenuButton.vue';
import QuantityCalc from './QuantityCalc.vue';
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
    props.buttonList;
  },
});
</script>

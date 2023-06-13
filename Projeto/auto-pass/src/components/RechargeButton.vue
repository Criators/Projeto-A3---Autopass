<template>
  <div>
    <button
      class="recharge-button menu-btn menu-btn__clickable round-border without-border"
      @click="toNextRoute"
    >
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import '../css/RechargeType.css';
export default defineComponent({
  name: 'RechargeButton',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  setup() {
    const router = useRouter();
    const toNextRoute = () => {
      router.push('DesiredValue');
    };
    return { toNextRoute };
  },
});
</script>

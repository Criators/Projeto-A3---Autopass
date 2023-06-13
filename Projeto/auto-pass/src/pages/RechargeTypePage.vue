<template>
  <div>
    <div class="recharge-title">Escolha qual será a forma de recarga.</div>
    <RechargeTypeMenu :cardType="route" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RechargeTypeMenu from 'src/components/RechargeTypeMenu.vue';
export default defineComponent({
  name: 'RechargeTypePage',
  data() {
    return {
      route: this.$route.path.includes('TOP') ? 'TOP' : 'Bilhete',
    };
  },
  components: { RechargeTypeMenu },
});
</script>

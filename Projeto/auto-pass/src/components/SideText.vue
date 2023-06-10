<template>
  <div class="side-text">
    <div class="side-text-button side-text-title">{{ text }}</div>
    <div class="side-text-button autopass-icon">
      <div><img :src="AutoPassIcon" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AutoPassIcon from '../assets/icons/autopass.png';
export default defineComponent({
  name: 'SideText',
  props: {
    text: {
      type: String,
      default: 'BANANA',
    },
  },
  data: function () {
    return {
      AutoPassIcon: AutoPassIcon,
    };
  },
});
</script>

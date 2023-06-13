<template>
  <button
    @click="goBack()"
    class="menu-btn menu-btn__clickable pos-fixed round-border without-border"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BackButton',
  methods: {
    goBack() {
      clearInterval(this.$props.interval as number);
      this.$router.go(-1);
    },
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    interval: {
      type: Number as PropType<number | null>,
    },
  },
});
</script>

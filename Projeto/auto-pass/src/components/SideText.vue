<template>
  {{ text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideText',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
});
</script>

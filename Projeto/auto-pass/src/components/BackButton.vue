<template>
  <button
    @click="goBack()"
    class="menu-btn menu-btn__clickable pos-fixed round-border without-border"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackButton',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

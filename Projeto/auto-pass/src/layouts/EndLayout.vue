<template>
  <router-view />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from 'src/components/MainFooter.vue';

export default defineComponent({
  name: 'EndLayout',
  components: { MainFooter },
});
</script>

<template>
  <BackButton label="Voltar" />
  <router-view />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from 'src/components/MainFooter.vue';
import BackButton from 'src/components/BackButton.vue';

export default defineComponent({
  name: 'BilheteLayout',
  components: { MainFooter, BackButton },
});
</script>

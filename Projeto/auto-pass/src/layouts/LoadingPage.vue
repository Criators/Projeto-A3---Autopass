<template>
  <div>
    <BackButton label="Cancelar" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackButton from 'src/components/BackButton.vue';
import '../css/Help.css';

export default defineComponent({
  name: 'LoadingPage',
  components: { BackButton },
});
</script>

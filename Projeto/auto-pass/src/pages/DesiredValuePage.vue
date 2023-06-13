<template>
  <div class="side-menu-container">
    <SideMenu class="side-menu round-border" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from 'src/components/SideMenu.vue';
import '../css/side-menu.css';
export default defineComponent({
  name: 'DesiredValuePage',
  data() {
    return {};
  },
  components: { SideMenu },
});
</script>

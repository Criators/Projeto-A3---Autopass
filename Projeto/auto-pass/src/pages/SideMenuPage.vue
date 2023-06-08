<template>
  <div>
    <SideMenu class="side-menu" />
    <SideText />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from 'src/components/SideMenu.vue';
import SideText from 'src/components/SideText.vue';
import 'src/css/style.css';

export default defineComponent({
  name: 'SideMenuPage',
  components: {
    SideMenu: SideMenu,
    SideText: SideText,
  },
});
</script>

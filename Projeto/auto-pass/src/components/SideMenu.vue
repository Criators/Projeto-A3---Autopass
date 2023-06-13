<template>
  <div>
    <ButtonsMenu class="buttons-menu" :buttonList="getMenuOptions()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonsMenu, { Button } from './ButtonsMenu.vue';
import OptionsTypeJson from '../assets/OptionsType.json';
export default defineComponent({
  name: 'SideMenu',
  data() {
    return {
      OptionsTypes: OptionsTypeJson,
    };
  },
  components: {
    ButtonsMenu,
  },
  methods: {
    getMenuOptions() {
      const JsonData = OptionsTypeJson.find((route) =>
        route.name.includes(this.$route.path)
      );
      const data =
        JsonData == null
          ? ([{ key: 1, text: '', route: '' }] as Button[])
          : (JsonData.data as Button[]);
      return data;
    },
  },
});
</script>

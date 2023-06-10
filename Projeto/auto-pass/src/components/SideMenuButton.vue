<template>
  <div
    :class="
      route == ''
        ? 'side-menu-button side-menu-button--normal side-menu-button--color roud-border'
        : 'side-menu-button side-menu-button--normal side-menu-button--color round-border clickable'
    "
    @click="changeRoute(route)"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideMenuButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    props.route, props.text;
  },
  methods: {
    changeRoute(route: string) {
      if (route != '') {
        console.log(route);
        this.$router.push(route);
      }
    },
  },
});
</script>

<template>
  <div
    :class="
      route == ''
        ? 'side-menu-button side-menu-button--normal side-menu-button--color roud-border'
        : 'side-menu-button side-menu-button--normal side-menu-button--color round-border clickable'
    "
    @click="changeRoute(route, text)"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { useAltStore } from 'src/stores/alt-info-stores';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

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
    const altStore = useAltStore();
    const router = useRouter();
    const changeRoute = (route: string, text: string) => {
      if (route != '') {
        if (route.includes('/InsertTCard')) {
          altStore.defineAlt(text);
        }
        if (route.includes('/InsertMoney')) {
          altStore.defineValue(text);
        }
        router.push(route);
      }
    };
    props.route, props.text;
    return { changeRoute };
  },
});
</script>

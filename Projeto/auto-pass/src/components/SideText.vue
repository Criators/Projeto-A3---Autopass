<template>
  <div class="side-text">
    <div class="side-text-button side-text-title">{{ MyData.title }}</div>
    <div class="desc-text">{{ MyData.desc }}</div>
    <div class="side-text-button autopass-icon">
      <div><img :src="AutoPassIcon" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import AutoPassIcon from '../assets/icons/autopass.png';
import { useRouter } from 'vue-router';
import SideTexts from '../assets/SideTexts.json';
interface SideTextData {
  title: string;
  desc: string;
}

function getText(route: string): SideTextData {
  console.log(route + 'AQ');
  const SideText = SideTexts.find((curRoute) => curRoute.name.includes(route));
  const data = {
    title: !!SideText?.data.title ? SideText?.data.title : '',
    desc: !!SideText?.data.desc ? SideText?.data.desc : '',
  } as SideTextData;
  console.log(data);
  return data;
}

export default defineComponent({
  name: 'SideText',
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      AutoPassIcon: AutoPassIcon,
    };
  },
  setup(props) {
    const router = useRouter();
    const pathList = ref(props.route.split('/'));

    const MyData = ref(
      getText(!!pathList.value[2] ? pathList.value[2] : pathList.value[1])
    );

    watch(
      () => router.currentRoute.value.fullPath,
      () => {
        pathList.value = router.currentRoute.value.path.split('/');
        MyData.value = getText(
          !!pathList.value[2] ? pathList.value[2] : pathList.value[1]
        );
      }
    );
    return {
      MyData,
    };
  },
});
</script>

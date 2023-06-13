<template>
  <div>
    <BackButton :interval="myInterval" label="Cancelar" />
    <div class="loading-container loading-content">
      <div class="loading-content">{{ MyData.text }}</div>
      <div class="loading-content">
        <img class="loading-image" :src="MyData.imgSrc" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import BackButton from 'src/components/BackButton.vue';
import RedirectList from '../assets/RoadMapping.json';
import LoadScreens from '../assets/LoadScreens.json';
import { useAltStore } from 'src/stores/alt-info-stores';
import '../css/Loading.css';

interface myData {
  imgSrc: string;
  text: string;
}
function getLoad(route: string): myData {
  console.log(route);
  const LoadScreen = LoadScreens.find((loadRoute) =>
    loadRoute.name.includes(route)
  );
  const data = {
    imgSrc: !!LoadScreen?.data.imgSrc ? LoadScreen?.data.imgSrc : '',
    text: !!LoadScreen?.data.text ? LoadScreen?.data.text : '',
  } as myData;
  return data;
}
export default defineComponent({
  name: 'LoadingPage',
  setup() {
    const router = useRouter();
    const altStore = useAltStore();
    const countdown = ref(5);
    const pathList = ref(router.currentRoute.value.path.split('/'));
    const isLoadScreen = ref(
      LoadScreens.find((loadRoute) =>
        loadRoute.name.includes(
          !!pathList.value[2] ? pathList.value[2] : pathList.value[1]
        )
      ) == null
    );
    const MyData = ref(
      getLoad(!!pathList.value[2] ? pathList.value[2] : pathList.value[1])
    );
    const myInterval = ref<number | null>(null);
    const startCountDown = () => {
      altStore.defineRoute(router.currentRoute.value.fullPath);
      myInterval.value = window.setInterval(() => {
        countdown.value--;
        console.log(countdown.value);
        if (countdown.value <= 0) {
          clearInterval(myInterval.value as number);
          myInterval.value = null;
          const curRoad = RedirectList.find((index) =>
            index.name.includes(pathList.value[1])
          );
          const redirectRoute = curRoad?.data.find((curRoute) =>
            curRoute.route.includes(
              !!pathList.value[2] ? pathList.value[2] : ''
            )
          )?.redirect;
          const nextRoute = redirectRoute == null ? '' : redirectRoute;
          router.push(nextRoute);
        }
      }, 1000);
    };
    watch(
      () => router.currentRoute.value.fullPath,
      () => {
        pathList.value = router.currentRoute.value.path.split('/');
        MyData.value = getLoad(
          !!pathList.value[2] ? pathList.value[2] : pathList.value[1]
        );
        countdown.value = 5;
        isLoadScreen.value =
          LoadScreens.find((loadRoute) =>
            loadRoute.name.includes(
              !!pathList.value[2] ? pathList.value[2] : pathList.value[1]
            )
          ) != null;
        console.log(isLoadScreen.value);
        if (
          altStore.lastRoute !== router.currentRoute.value.fullPath &&
          isLoadScreen.value
        )
          startCountDown();
      }
    );

    onMounted(startCountDown);
    return {
      MyData,
      pathList,
      myInterval,
    };
  },
  components: { BackButton },
});
</script>

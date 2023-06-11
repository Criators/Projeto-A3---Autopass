<template>
  <div>
    <BackButton label="Cancelar" />
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
import '../css/Loading.css';

//TODO:Passar parametros pelo router no botão de Dinheiro/Debito

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
    const countdown = ref(5);
    const pathList = ref(router.currentRoute.value.path.split('/'));
    const MyData = ref(
      getLoad(!!pathList.value[2] ? pathList.value[2] : pathList.value[1])
    );
    const startCountDown = () => {
      const interval = setInterval(() => {
        countdown.value--;
        console.log(countdown.value);
        if (countdown.value <= 0) {
          clearInterval(interval);
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
        startCountDown();
      }
    );

    onMounted(startCountDown);
    return {
      MyData,
      pathList,
    };
  },
  components: { BackButton },
});
</script>

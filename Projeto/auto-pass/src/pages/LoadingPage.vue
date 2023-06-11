<template>
  <div>
    <BackButton label="Cancelar" />
    <div class="loading-container">
      <div>{{ MyData.text }}</div>
      <div><img :src="MyData.imgSrc" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import BackButton from 'src/components/BackButton.vue';
import DebitIcon from 'src/assets/icons/Debit.png';
import RedirectList from '../assets/RoadMapping.json';

//TODO:Passar parametros pelo router no botão de Dinheiro/Debito

//TODO:Converter getLoad para pegar dados do JSON (same energy do RoadMapping)

interface myData {
  imgSrc: string;
  text: string;
}
function getLoad(route: string): myData {
  if (route.includes('/Processing'))
    return { imgSrc: DebitIcon, text: 'Aguarde' };
  else if (route.includes('/InsertCard'))
    return { imgSrc: DebitIcon, text: 'Insira seu cartão de débito' };
  else if (route.includes('/InsertPass'))
    return { imgSrc: DebitIcon, text: 'Digite a senha...' };
  else if (route.includes('/InsertTCard'))
    return {
      imgSrc: DebitIcon,
      text: 'Insira seu cartão de transporte...',
    };
  else if (route.includes('/Approved'))
    return { imgSrc: DebitIcon, text: 'Valor Aceito!' };
  else throw new Error('Route Not Found');
}
export default defineComponent({
  name: 'LoadingPage',
  data() {
    return {
      DebitIcon: DebitIcon,
    };
  },
  setup() {
    const router = useRouter();
    const countdown = ref(5);
    const pathList = router.currentRoute.value.path.split('/');
    const MyData = ref(getLoad(router.currentRoute.value.path));
    const startCountDown = () => {
      const interval = setInterval(() => {
        countdown.value--;
        console.log(countdown.value);
        if (countdown.value === 0) {
          clearInterval(interval);
          const curRoad = RedirectList.find((index) =>
            index.name.includes(pathList[1])
          );
          const redirectRoute = curRoad?.data.find((curRoute) =>
            curRoute.route.includes(pathList[2])
          )?.redirect;
          const nextRoute = redirectRoute == null ? '' : redirectRoute;
          router.push(nextRoute);
        }
      }, 1000);
    };
    watch(
      () => router.currentRoute.value.fullPath,
      () => {
        MyData.value = getLoad(router.currentRoute.value.path);
        startCountDown();
      }
    );

    onMounted(startCountDown);
    return {
      MyData,
    };
  },
  components: { BackButton },
});
</script>

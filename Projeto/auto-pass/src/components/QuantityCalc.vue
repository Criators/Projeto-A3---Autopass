<template>
  <div>
    <table>
      <div>{{ quantity }}</div>
      <div>
        <button @click="add()">+</button>
        <button @click="sub()">-</button>
      </div>
    </table>
    <div>R${{ quantity * 4.4 }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'QuantityCalc',
  data() {
    return {
      quantity: ref(0),
      minQt: 0,
      maxQt: 7,
    };
  },
  methods: {
    add() {
      if (this.quantity < this.maxQt) this.quantity++;
    },
    sub() {
      if (this.quantity > this.minQt) this.quantity--;
    },
  },
});
</script>

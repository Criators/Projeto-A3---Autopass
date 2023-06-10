<template>
  <div>
    <table class="calc-container">
      <tr>
        <td>
          <div
            class="qt-num side-menu-button side-menu-button--color round-border"
          >
            {{ quantity }} Unidade
          </div>
        </td>
        <td>
          <tr>
            <button
              class="qt-item side-menu-button side-menu-button--color round-border without-border clickable"
              @click="add()"
            >
              +
            </button>
          </tr>
          <tr>
            <button
              class="qt-item side-menu-button side-menu-button--color round-border without-border clickable"
              @click="sub()"
            >
              -
            </button>
          </tr>
        </td>
      </tr>
    </table>
    <div class="qt-item side-menu-button side-menu-button--color round-border">
      R${{ (quantity * 4.4).toString().replace('.', ',').substring(0, 5) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import '../css/QtCalc.css';

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

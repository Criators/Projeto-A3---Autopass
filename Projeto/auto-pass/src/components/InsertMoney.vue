<template>
  <div>
    <div class="inserted-value menu-btn round-border">{{ curValue }}</div>
    <div class="inserted-value money-left menu-btn round-border">
      <div class="table-row table-border flex">
        <div class="table-cell table-cell__border">Inserido</div>
        <div class="table-cell">Falta</div>
      </div>
      <div class="flex">
        <div class="table-cell table-cell__border">R$0,00</div>
        <div class="table-cell">{{ curValue }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useAltStore } from 'src/stores/alt-info-stores';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'InsertMoney',
  setup() {
    const altStore = useAltStore();

    return {
      curValue: computed(() => altStore.curValue),
    };
  },
});
</script>

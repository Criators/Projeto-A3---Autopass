<template>
  <div class="table-container round-border">
    <div
      class="table-menu"
      :style="{ display: cardType == 'TOP' ? 'block' : 'none' }"
    >
      <div class="flex table-border table-row">
        <div class="table-cell-right-border">V.T</div>
        <div class="table-cell-right-border">Comum</div>
        <div>Escolar</div>
      </div>
      <div class="flex table-row sub-desc-text-size">
        <div class="table-cell-right-border">
          <div>Saldo: R$20,00</div>
        </div>
        <div class="table-cell-right-border">
          <div>Saldo: R$20,00</div>
          <div>Valor máximo para comprar</div>
        </div>
        <div><div>Saldo: R$20,00</div></div>
      </div>
      <div class="flex table-row">
        <div class="table-cell-right-border"></div>
        <div class="table-cell-right-border">
          <RechargeButton label="Comprar" />
        </div>
        <div></div>
      </div>
    </div>
    <div
      class="table-menu"
      :style="{ display: cardType == 'Bilhete' ? 'block' : 'none' }"
    >
      <div class="flex table-border table-row">
        <div class="table-cell-right-border">Comum</div>
        <div class="table-cell-right-border">V.T</div>
        <div class="table-cell-right-border">Escolar</div>
        <div class="table-cell-right-border">Compra Web</div>
        <div>Temporal</div>
      </div>
      <div class="flex table-row sub-desc-text-size">
        <div class="table-cell-right-border">
          <div>Saldo: R$20,00</div>
          <div>Valor máximo para comprar: R$2485,00</div>
        </div>
        <div class="table-cell-right-border">
          <div>Saldo: R$20,00</div>
        </div>
        <div class="table-cell-right-border">
          <div>Saldo: R$20,00</div>
        </div>
        <div class="table-cell-right-border"></div>
        <div>
          <div>Temporal 1</div>
          <div>VE D GRT. Ônibus VÁLIDADE EXPIRADA</div>
          <div>Temporal 2</div>
          <div>VE D GRT. Trilho VÁLIDADE EXPIRADA</div>
        </div>
      </div>
      <div class="flex table-row">
        <div class="table-cell-right-border">
          <RechargeButton label="Comprar" />
        </div>
        <div class="table-cell-right-border">
          <RechargeButton label="Comprar" />
        </div>
        <div class="table-cell-right-border">
          <RechargeButton label="Comprar" />
        </div>
        <div class="table-cell-right-border">
          <RechargeButton label="Comprar" />
        </div>
        <div>
          <RechargeButton label="Comprar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RechargeButton from './RechargeButton.vue';
import '../css/RechargeType.css';
export default defineComponent({
  name: 'RechargeTypeMenu',
  components: {
    RechargeButton,
  },
  props: {
    cardType: {
      type: String,
      default: 'TOP',
    },
  },
});
</script>

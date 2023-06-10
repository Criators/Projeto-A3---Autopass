<template>
  <div>
    <BackButton label="Voltar" />
    <div class="help-container">
      <div class="help-info round-border">
        <p class="desc-text-size">Número Para Ligação:</p>
        <p class="sub-desc-text-size">(xx) xxxx-xxxx</p>
        <p class="desc-text-size">Número Para Contato pelo Whatsapp:</p>
        <p class="sub-desc-text-size">(xx) x xxxx-xxxx</p>
        <p class="desc-text-size">E-mail Para Contato:</p>
        <p class="sub-desc-text-size">xxxx@gmail.com</p>
      </div>
      <div class="help-info round-border">
        <p class="desc-text-size">Informações Gerais:</p>
        <p class="sub-desc-text-size">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackButton from 'src/components/BackButton.vue';
import '../css/Help.css';

export default defineComponent({
  name: 'HelpPage',
  components: { BackButton },
});
</script>

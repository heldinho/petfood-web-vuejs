<template>
  <div class="checkout">
    <div class="row mx-0">
      <div class="col-6"></div>
      <div class="col-6">
        <DadosEntrega />
        <DadosPagamento />
      </div>
    </div>
  </div>
</template>

<script>
import DadosEntrega from '../components/form-checkout/DadosEntrega'
import DadosPagamento from '../components/form-checkout/DadosPagamento'
export default {
  components: {
    DadosEntrega,
    DadosPagamento
  }
}
</script>

<style lang="scss" scoped>
.checkout {
  background: rgba(0, 0, 0, 0.02);
}
</style>

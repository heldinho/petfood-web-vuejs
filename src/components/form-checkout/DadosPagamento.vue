<template>
  <div class="dados-pagamento">
    <div class="row">
      <div class="col-12 mb-3">
        <h4 class="text-left">Dados Pagamento</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <input
            type="tel"
            class="form-control form-control-sm"
            placeholder="Número do Cartão"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Validade"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="CVV"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Nome do Títular"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="CPF / CNPJ do Títular"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="form-group box-total">
          <strong>Total:</strong>
          <strong>R$ 79,90</strong>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <button class="btn button-primary btn-block btn-sm">
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dados-pagamento {
  margin: 20px auto;
  width: 500px;
  h4 {
    padding-bottom: 10px;
    border-bottom: 4px solid #06d6a0;
    width: 185px;
    letter-spacing: 3px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }

  .box-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    strong {
      letter-spacing: 3px;
    }
  }
}
</style>

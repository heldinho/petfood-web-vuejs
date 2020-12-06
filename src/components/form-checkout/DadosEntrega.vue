<template>
  <div class="dados-entrega">
    <div class="row">
      <div class="col-12 mb-3">
        <h4 class="text-left">Dados Entrega</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <input type="tel" class="form-control" placeholder="CEP" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Cidade" />
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="UF" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Logradouro" />
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <input type="tel" class="form-control" placeholder="Número" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Bairro" />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Complemento" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dados-entrega {
  margin: 20px auto;
  width: 500px;
  h4 {
    padding-bottom: 10px;
    border-bottom: 4px solid #06d6a0;
    width: 152px;
    letter-spacing: 3px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>

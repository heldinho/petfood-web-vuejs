<template>
  <div class="register">
    <br />
    <br />
    <div class="form-container">
      <div class="row mx-0 mt-5">
        <div class="col-6">
          <div class="box-form">
            <div class="form-group">
              <h4>Falta pouco para fazer seu Pet feliz.</h4>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Nome Completo"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control form-control-sm"
                placeholder="E-Mail"
              />
            </div>
            <div class="form-group">
              <input
                type="tel"
                class="form-control form-control-sm"
                placeholder="Telefone"
              />
            </div>
            <div class="form-group">
              <input
                type="tel"
                class="form-control form-control-sm"
                placeholder="CPF"
              />
            </div>
            <div class="form-group">
              <input type="date" class="form-control form-control-sm" />
            </div>
            <div class="form-group">
              <button class="btn button-primary btn-block btn-sm">
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="box-image-register">
            <img :src="illustration" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import illustration from '../assets/illustration.png'
export default {
  data: () => ({
    illustration: illustration
  })
}
</script>

<style lang="scss" scoped>
.register {
  height: calc(100vh - 60px);
  background: rgba(0, 0, 0, 0.02);
  .form-container {
    .box-form {
      border-radius: 5px;
      width: 500px;
      padding: 30px;
      background: #fff;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    }
    .box-image-register {
      width: 500px;
    }
  }
}
</style>

<template>
  <div class="header-container">
    <div class="box-logo ml-3">
      <router-link to="/">
        <img :src="Logo" class="img-fluid" />
      </router-link>
    </div>
    <div>Teste</div>
  </div>
</template>

<script>
import Logo from '../assets/logo.png'
export default {
  data: () => ({
    Logo: Logo
  })
}
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid #f1f1f1;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);

  .box-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

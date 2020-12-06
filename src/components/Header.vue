<template>
  <div class="header-container">
    <div>
      <img :src="Logo" />
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
}
</style>

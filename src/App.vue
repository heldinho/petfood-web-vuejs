<template>
  <div id="app">
    <Header />
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
.btn.focus,
.btn:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 255, 157, 0.25) !important;
}

.form-control:focus {
  border-color: #06d6a0 !important;
  box-shadow: 0 0 0 0.2rem rgba(0, 255, 157, 0.25) !important;
}

.button-primary {
  background: #06d6a0;
  color: #fff;
  letter-spacing: 3px;
  font-weight: 600;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100vh - 60px);
  user-select: none !important;
}

.body {
  margin-top: 60px;
  height: calc(100vh - 60px);
}
</style>

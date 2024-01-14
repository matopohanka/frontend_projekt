<template>
  <div id="app">
    <HeaderNavigation />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("/images/back1.jpg") no-repeat center center fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
}
#nadpis{
  color: orange;
}
</style>

<script>
import HeaderNavigation from './components/HeaderNavigation.vue';

export default {
  components: {
    HeaderNavigation,
  },
};
</script>
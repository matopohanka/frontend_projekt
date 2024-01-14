<template>
  <header>
    <nav>
      <router-link to="/" :class="{ 'active': isActive('/') }">Domov</router-link>
      <router-link to="/about" :class="{ 'active': isActive('/about') }">O nás</router-link>
      <router-link to="/contact" :class="{ 'active': isActive('/contact') }">Recenzie</router-link>
      <router-link to="/menu" :class="{ 'active': isActive('/menu') }">Menu</router-link>
      <router-link to="/objednavka" :class="{ 'active': isActive('/objednavka') }">Objednávka</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderNavigation',
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  color: black;
  background-color: orange;
  z-index: 2;
  display: flex;
  justify-content: center; 
  align-items: center; 
}

nav {
  display: flex;
  justify-content: space-between; 
  
}

router-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

router-link:hover,
router-link:active {
  color: white;
}

.active {
  background-color: orangered;
  color: white;
}
</style>

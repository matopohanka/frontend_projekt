<template>
  <div>
    <div class="nadpis">
      <h1>Vitajte u nás!</h1>
    </div>
    <div class="image-container">
      <button @click="redirectToMenu" class="menu-button">Prejdite priamo k menu!</button>
      <img class="obrazok" src="/images/back.jpg" alt="Background">
    </div>
  </div>
</template>

<style>
  .nadpis {
  text-align: center;
  font-size: 24px;
  padding-top: 60px;
  color: white;
  background-color: orange;
  width: 50%; 
  margin: 0 auto; 
  border-radius: 10px;
  
}
  .image-container {
    position: relative;
  }

  .obrazok {
    width: 100%;
    max-height: 700px;
    margin-top: 20px; 
    border-radius: 10px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  }

  .menu-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    font-size: 18px;
    background-color: orangered;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .menu-button:hover {
    background-color: darkorange;
  }
</style>

<script>
export default {
  methods: {
    redirectToMenu() {
      this.$router.push('/menu');
    },
  },
};
</script>

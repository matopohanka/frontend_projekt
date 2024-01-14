<template>
  <div>
    <div v-if="adminData" class="admin-container">
      <h1>Prijaté objednávky:</h1>
      <div v-for="(order, index) in adminData.orders" :key="index" class="order-container">
        <div>
          <h2>{{ order.contactInfo.meno }}</h2>
          <p>Email: {{ order.contactInfo.email }}</p>
          <p>Telefón: {{ order.contactInfo.telefon }}</p>
          <p>Adresa: {{ order.contactInfo.adresa }}</p>
          <p>Celková cena objednávky: {{ order.totalOrderPrice }}</p>
          <ul>
            <li v-for="(pizza, pizzaIndex) in order.orders" :key="pizzaIndex">
              {{ pizza.name }} - {{ pizza.cena }} - {{ pizza.description }}
            </li>
          </ul>
          <button @click="deleteOrder(index)">Zmazať objednávku</button>
        </div>
        <hr /> 
      </div>

      <h1>Recenzie:</h1>
      <div v-for="(recenzia, index) in recenzieData" :key="index" class="recenzia-container">
        <div>
          <h2>{{ recenzia.meno }}</h2>
          <p>Hodnotenie: {{ recenzia.hodnotenie }}</p>
          <p>Komentár: {{ recenzia.komentar }}</p>
          <button @click="deleteRecenzia(index)">Zmazať recenziu</button>
        </div>
        <hr /> 
      </div>
    </div>
    <p v-else>žiadne údaje zatiaľ</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminData: null,
      recenzieData: null,
    };
  },
  mounted() {
    const adminDataString = localStorage.getItem('adminData');
    const recenzieDataString = localStorage.getItem('recenzieData');

    if (adminDataString) {
      try {
        this.adminData = JSON.parse(adminDataString);
      } catch (error) {
        console.error('Chyba pri parsovaní adminData:', error);
      }
    }

    if (recenzieDataString) {
      try {
        this.recenzieData = JSON.parse(recenzieDataString);
      } catch (error) {
        console.error('Chyba pri parsovaní recenzieData:', error);
      }
    }
  },
  methods: {
    deleteOrder(index) {
      this.adminData.orders.splice(index, 1);
      localStorage.setItem('adminData', JSON.stringify(this.adminData));
    },
    deleteRecenzia(index) {
      this.recenzieData.splice(index, 1);
      localStorage.setItem('recenzieData', JSON.stringify(this.recenzieData));
    },
  },
};
</script>

<style scoped>
.admin-container {
  background-color: #FFA500; 
  border-radius: 10px; 
  padding: 20px; 
}

.order-container, .recenzia-container {
  margin-bottom: 20px; 
}

button {
  background-color: #FF6347; 
  color: #fff; 
  padding: 5px 10px; 
  border: none; 
  cursor: pointer; 
  border-radius: 5px;
  margin-top: 10px; 
}
</style>

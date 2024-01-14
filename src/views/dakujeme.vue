<template>
  <div class="cnadpis"><h1>Ďakujeme za vašu objednávku!</h1></div>
  <div class="dakujeme">
    <table>
      <tr>
        <th>Názov jedla</th>
        <th>Popis jedla</th>
        <th>Cena jedla</th>
      </tr>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ order.name }}</td>
          <td>{{ order.description }}</td>
          <td>{{ order.cena }}€</td>
        </tr>
      </tbody>
    </table>

    <h3>Kontaktné údaje:</h3>
    <p>Meno: {{ contactInfo && contactInfo.meno }}</p>
    <p>Email: {{ contactInfo && contactInfo.email }}</p>
    <p>Tel. číslo: {{ contactInfo && contactInfo.telefon }}</p>
    <p>Adresa: {{ contactInfo && contactInfo.adresa }}</p>
    <h1>Celková cena objednávok: {{ totalOrderPrice }}€</h1>
    <h2>Platba možná iba v hotovosti..</h2>
    <button @click="admindataa">HOTOVO</button>
  </div>
</template>

<script>
import { useOrderStore } from '../stores/store';

export default {
  methods: {
    admindataa() {
      const orderStore = useOrderStore();
      const existingOrders = JSON.parse(localStorage.getItem('adminData')) || { orders: [] };
      if (!existingOrders.orders) {
        existingOrders.orders = [];
      }
      existingOrders.orders.push({
        orders: this.orders,
        contactInfo: this.contactInfo,
        totalOrderPrice: this.totalOrderPrice,
      });
      localStorage.setItem('adminData', JSON.stringify(existingOrders));
      orderStore.clearSelectedMeal();
      orderStore.clearOrders();
      orderStore.clearContactInfo();
      this.$router.push({ name: 'home' });
    },
  },

  computed: {
    orders() {
      return useOrderStore().getAllOrders();
    },
    contactInfo() {
      return useOrderStore().getContactInfo();
    },
    totalOrderPrice() {
      return this.orders.reduce((total, order) => total + order.cena, 0);
    },
  },
};
</script>


<style>
.cnadpis {
  background-color: orange;
  color: white;
  border-radius: 10px;
  width: 200px;
  margin: 0 auto 20px;
  padding-top: 400px0px;
}
.dakujeme {
  padding-top: 70px;
  text-align: center;
  background-color: orange;
  color: white;
  width: 500px;
  border-radius: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  background-color: orange;
  color: white; 
}
</style>
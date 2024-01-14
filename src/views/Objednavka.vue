<template>
  <div class="objednavky-container">
    <div class="cnadpis">
      <h1>Vaše objednávky</h1>
    </div>
    <div v-if="orders.length > 0" class="objednavky-list">
      <div v-for="(order, index) in orders.slice(0, 5)" :key="index" class="objednavka">
        <h3>Objednávka č. {{ index + 1 }}</h3>
        <p>Názov jedla: {{ order.name }}</p>
        <p>Popis jedla: {{ order.description }}</p>
        <p>Cena jedla: {{ order.cena }}€</p>
        <button @click="removeOrder(index)" class="zmazat-button">Zmazať objednávku</button>
      </div>
      <div class="doplnujuce-informacie">
        <h3>Doplňte informácie pre pokračovanie:</h3>
        <input type="text" v-model="meno" placeholder="Meno" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="tel" v-model="telefon" placeholder="Tel. číslo" />
        <input type="text" v-model="adresa" placeholder="Adresa" />
        <button @click="pokracovat" class="pokracovat-button">Pokračovať</button>
      </div>
    </div>
    <div class="cnadpis" v-else>
      <p>Zatiaľ nemáte žiadne objednávky. </p>
    </div>
    <div v-if="orders.length >= 5 && areContactInfoFilled" class="kontakt-info">
      <h3>Kontaktné údaje:</h3>
      <p>Meno: {{ meno }}</p>
      <p>Email: {{ email }}</p>
      <p>Tel. číslo: {{ telefon }}</p>
      <p>Adresa: {{ adresa }}</p>
    </div>
    <div v-if="orders.length >= 5 && !areContactInfoFilled" class="info-upozornenie">
      <p>Prosím vyplňte všetky kontaktné údaje.</p>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from '../stores/store';

export default {
  data() {
    return {
      orderStore: useOrderStore(),
      meno: '',
      email: '',
      telefon: '',
      adresa: '',
    };
  },
  computed: {
    orders() {
      return this.orderStore.orders;
    },
    areContactInfoFilled() {
      return this.meno && this.isValidEmail(this.email) && this.isValidPhoneNumber(this.telefon) && this.adresa;
    },
  },
  methods: {
    pokracovat() {
      if (this.areContactInfoFilled) {
        this.orderStore.setContactInfo({
          meno: this.meno,
          email: this.email,
          telefon: this.telefon,
          adresa: this.adresa,
        });
        this.$router.push({ name: 'dakujeme' });
      }
    },
    isValidEmail(email) {
      return email.includes('@gmail.com');
    },
    isValidPhoneNumber(telefon) {
      return telefon.length >= 10 && telefon.startsWith('421');
    },
    removeOrder(index) {
      this.orderStore.removeOrder(index);
    },
  },
};
</script>

<style scoped>
.objednavky-container {
  text-align: center;
  margin-top: 70px;
}

.cnadpis {
  background-color: orange;
  color: white;
  border-radius: 10px;
  width: 200px;
  margin: 0 auto 20px;
  padding: 10px;
}

.objednavky-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.objednavka {
  padding: 20px;
  margin-bottom: 20px;
  background-color: orange;
  color: white;
  border-radius: 10px;
  width: 30%;
}

.zmazat-button {
  background-color: #ff5733;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.doplnujuce-informacie {
  margin-top: 20px;
  color: white;
  background-color: orange;
  width: 75%;
  border-radius: 10px;
}

.doplnujuce-informacie input {
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.pokracovat-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.kontakt-info {
  margin-top: 20px;
}

.info-upozornenie {
  color: #ff5733;
  margin-top: 20px;
}
</style>

<template>
  <div class="menu">
    <div class="nadpis">
      <h1>Menu</h1>
      <div class="order-count" v-if="ordersCount > 0">
        {{ ordersCount }}
      </div>
    </div>
    <br>
    <div class="jedla">
      <div v-for="meal in mealsData.meals" :key="meal.id" class="meal-link">
        <div class="meal" :class="{ 'selected': isSelected(meal.id) }" @click="addToOrder(meal)">
          <div class="status-indicator" :class="{ 'green': !isOrderFull && isSelected(meal.id), 'red': isOrderFull }"></div>
          <div class="image-container">
            <img :src="`/images/${meal.image}`" :alt="meal.name">
          </div>
          <div class="meal-info">
            <h2>{{ meal.name }}</h2>
            <h3>{{ meal.description }} ponúkamé za {{ meal.cena }}€</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mealsData from '../data.json';
import { useOrderStore } from '../stores/store';

export default {
  data() {
    return {
      mealsData: mealsData,
    };
  },
  computed: {
    isOrderFull() {
      const orderStore = useOrderStore();
      return orderStore.orders.length >= 5;
    },
    selectedMeal() {
      const orderStore = useOrderStore();
      return orderStore.selectedMeal;
    },
    ordersCount() {
      const orderStore = useOrderStore();
      return orderStore.orders.length;
    },
  },
  methods: {
    addToOrder(meal) {
      const orderStore = useOrderStore();
      const order = {
        name: meal.name,
        cena: meal.cena,
        description: meal.description,
      };

      if (this.isOrderFull) {
        console.log('Objednávky sú plné');
        return;
      }

      orderStore.addOrder(order);
      orderStore.setSelectedMeal(meal);

      setTimeout(() => {
        orderStore.clearSelectedMeal(); 
      }, 1000);
    },
    isSelected(mealId) {
      const orderStore = useOrderStore();
      return orderStore.selectedMeal && orderStore.selectedMeal.id === mealId;
    },
  },
};
</script>



<style scoped>

.nadpis {
  display: block;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.order-count {
  background-color: orangered;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 0px; 
}

.jedla {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.meal-link {
  flex: 0 0 30%; 
  margin-bottom: 20px;
}

.meal {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
}

.meal:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.image-container {
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  border-bottom: 2px solid #eee;
}

.meal img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px 10px 0 0;
  transition: transform 0.3s;
}

.meal:hover img {
  transform: scale(1.1);
}

.meal-info {
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
}

.meal h2 {
  margin: 0;
  font-size: 24px;
  color: orangered;
}

.meal h3 {
  margin: 5px 0;
  font-size: 18px;
  color: #333;
}

.selected {
  border: 5px solid orange;
}
</style>

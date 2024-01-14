import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    selectedMeal: null,
    orders: [],
    contactInfo: null,
  }),
  actions: {
    onInit() {
      const savedOrders = localStorage.getItem('orders');
      if (savedOrders) {
        this.orders = JSON.parse(savedOrders);
      }

      const savedContactInfo = localStorage.getItem('contactInfo');
      if (savedContactInfo) {
        this.contactInfo = JSON.parse(savedContactInfo);
      }
    },
    setSelectedMeal(meal) {
      this.selectedMeal = meal;
    },
    clearSelectedMeal() {
      this.selectedMeal = null;
    },
    addOrder(order) {
      order.contactInfo = this.contactInfo;
      this.orders.push(order);
      localStorage.setItem('orders', JSON.stringify(this.orders));
      localStorage.removeItem('contactInfo');
    },
    setContactInfo(contactInfo) {
      this.contactInfo = contactInfo;
      localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    },
    clearContactInfo() {
      this.contactInfo = null;
      localStorage.removeItem('contactInfo');
    },
    clearOrders() {
      this.orders = [];
      localStorage.removeItem('orders');
    },
    getAllOrders() {
      return this.orders;
    },
    getContactInfo() {
      return this.contactInfo;
    },
    removeOrder(index) {
      if (index >= 0 && index < this.orders.length) {
        this.orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(this.orders));
      }
    },
  },
});

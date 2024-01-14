<template>
  <div>
    <h1 class="cnadpis">Recenzie</h1>
    <form class="recenzie-form" @submit.prevent="odoslatRecenziu">
      <div class="form-group">
        <label for="meno">Meno:</label>
        <input type="text" v-model="meno" required>
      </div>
      <div class="form-group">
        <label for="hodnotenie">Hodnotenie:</label>
        <select v-model="hodnotenie" required>
          <option value="5">5 - Vynikajúce</option>
          <option value="4">4 - Veľmi dobré</option>
          <option value="3">3 - Dobré</option>
          <option value="2">2 - Priemerné</option>
          <option value="1">1 - Slabé</option>
        </select>
      </div>
      <div class="form-group">
        <label for="komentar">Komentár:</label>
        <textarea v-model="komentar" required></textarea>
      </div>
      <button type="submit">Odoslať recenziu</button>
    </form>

    <table class="recenzie-table" v-if="recenzieData.length > 0">
      <thead>
        <tr>
          <th>Meno</th>
          <th>Hodnotenie</th>
          <th>Komentár</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(recenzia, index) in recenzieData" :key="index">
          <td>{{ recenzia.meno }}</td>
          <td>{{ recenzia.hodnotenie }}</td>
          <td>{{ recenzia.komentar }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meno: '',
      hodnotenie: '5',
      komentar: '',
      recenzieData: [], 
    };
  },
  created() {
    const storedRecenzie = JSON.parse(localStorage.getItem('recenzieData'));
    if (storedRecenzie) {
      this.recenzieData = storedRecenzie;
    }
  },
  methods: {
    odoslatRecenziu() {
      console.log('Recenzia odoslaná:', this.meno, this.hodnotenie, this.komentar);
      this.recenzieData.push({
        meno: this.meno,
        hodnotenie: this.hodnotenie,
        komentar: this.komentar,
      });

      localStorage.setItem('recenzieData', JSON.stringify(this.recenzieData));
      this.meno = '';
      this.hodnotenie = '5';
      this.komentar = '';
    },
  },
};
</script>

<style scoped>
.cnadpis {
  background-color: orange;
  color: white;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
}

.recenzie-form {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  background-color: orange;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: white;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: orangered;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.recenzie-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: orange;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.recenzie-table th {
  background-color: orange;
  color: white;
  padding: 10px;
  text-align: left;
}

.recenzie-table td {
  color: white;
  padding: 10px;
  text-align: left;
}

</style>
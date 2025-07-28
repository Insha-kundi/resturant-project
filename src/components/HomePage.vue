<template>
    <HeaderSec />
    <!-- <h1> Hi, {{ name }} Welcome to Restaurant Platform</h1> -->
  
    <table border="1" v-if="resturant.length">
      <thead>
        <tr>
          <td style="font-weight: 600; font-size: 18px;">Id</td>
          <td style="font-weight: 600; font-size: 18px;">Name Of Restaurant</td>
          <td style="font-weight: 600; font-size: 18px;">Contact</td>
          <td style="font-weight: 600; font-size: 18px;">Address</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in resturant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>
  
    <p v-else>No restaurants found.</p>
  </template>
  
  <script>
  import HeaderSec from './HeaderSec.vue';
  import axios from 'axios';
  
  export default {
    name: 'HomePage',
    components: {
      HeaderSec
    },
    data() {
      return {
        name: '',
        resturant: []
      };
    },
    async mounted() {
      const userStr = localStorage.getItem('user-info');
  
      if (!userStr) {
        this.$router.push({ name: 'SignUp' });
        return;
      }
  
      const user = JSON.parse(userStr);
      this.name = user.name;
  
      try {
        const result = await axios.get('http://localhost:3000/resturant');
        this.resturant = result.data;
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  td {
    width: 200px;
    height: 50px;
  }
  </style>
  
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
          <td style="font-weight: 600; font-size: 18px;">Edit Resturant</td>
          <td style="font-weight: 600; font-size: 18px;">Delete Resturant</td>

          

        </tr>
      </thead>
      <tbody>
        <tr v-for="item in resturant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.address }}</td>
          <td><router-link :to="'/update-rest/'+item.id"> Edit </router-link></td>
          <td><a href="#" @click.prevent="confirmDelete(item.id)"> Delete </a></td>




        </tr>
      </tbody>
    </table>
    <p v-else>No restaurants found.</p>



    <div v-if="showDeletePopup" class = "popup-overlay">

<div class="popup">
<p> Sabr Sabr pehly Dekyn , Ap Delete Karna Chahty hyn a Task  </p>
<button @click="deleteTask()"> Yes </button>
<button @click="cancelDeletion()"> No </button>
</div>
</div>



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
        resturant: [],
        showDeletePopup: false,
        resturantToDelete: null
      };
    },

    methods:{


confirmDelete(id) {

this.resturantToDelete = id;
this.showDeletePopup= true;


},
// Task deletions function 

 async deleteTask() {

try{
  await axios.delete("http://localhost:3000/resturant/"+this.resturantToDelete);
  
  this.resturant = this.resturant.filter(item=>item.id!==this.resturantToDelete);

  this.resturantToDelete= null;
  this.showDeletePopup = false;
 }
 catch(error)
{

  console.error('Deletion Faild', error);

}

//  if(taskToDelete.value !== null){

//      todoList.value.splice(taskToDelete.value, 1);
     
//  }

//  showDeletePopup.value = false;
//  taskToDelete.value = null;
},

// cancel deletion 

cancelDeletion() {

 this.showDeletePopup= false;
 this.resturantToDelete = null;
},

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


  /* popup styles */



/* Popup Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
.popup button {
  margin: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}


  </style>
  
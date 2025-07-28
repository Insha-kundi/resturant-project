<template>

<HeaderSec/>
<h1>Welcome to Our Update Resturant Platfrom</h1>


<form action="" class="add-form">

<input type="text" name="name" id="" placeholder="Enter Name of Resturant" v-model="resturant.name" @keyup.enter="updateResturant(resturant)">
<input type="text" name="contact" id="" placeholder="Enter Contact of Resturant" v-model="resturant.contact" @keyup.enter="updateResturant(resturant)">

<input type="text" name="address" id="" placeholder="Enter Address of Resturant" v-model="resturant.address" @keyup.enter="updateResturant(resturant)">

<button @click="updateResturant(resturant)"  type="button">Update Resturant</button>

</form>

</template>


<script>
import HeaderSec from './HeaderSec.vue'
import axios from 'axios';

export default {

    name: 'UpdateRest',
    components : {

        HeaderSec
    },

    data(){

return{
    resturant:{
    
        name: '',
        contact: '',
        address: ''

    }
}
},


methods: {

   async updateResturant(){

        const result = await axios.put("http://localhost:3000/resturant/"+this.$route.params.id, {

name:this.resturant.name,
contact:this.resturant.contact,
address:this.resturant.address
});

console.warn("result", result)

if(result.status==200){

    this.$router.push({ name: 'HomePage' });

}

    }
},

  async mounted(){

        
let user = localStorage.getItem('user-info');
if(!user){
    
    this.$router.push({name: 'SignUp'}) }
    

    const result = await axios.get('http://localhost:3000/resturant/'+this.$route.params.id);

    // console.warn(result.data);

    this.resturant=result.data
}

    
}

</script>



<style scoped>




</style>
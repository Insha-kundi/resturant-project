<template>

<HeaderSec/>
<h1>Please Add Your Resturant and Boom</h1>

<form action="" class="add-form">

    <input type="text" name="name" id="" placeholder="Enter Name of Resturant" v-model="resturant.name">
    <input type="text" name="contact" id="" placeholder="Enter Contact of Resturant" v-model="resturant.contact">

    <input type="text" name="address" id="" placeholder="Enter Address of Resturant" v-model="resturant.address">

    <button @click="AddResturant" type="button">Add Resturant</button>

</form>


</template>


<script>
import HeaderSec from './HeaderSec.vue'
import axios from 'axios';

export default {

    name: 'AddRest',
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


    methods:{
    

      async AddResturant(){

            let result = await axios.post("http://localhost:3000/resturant", {

                name:this.resturant.name,
                contact:this.resturant.contact,
                address:this.resturant.address
});

console.warn("result", result)

if(result.status==201){

                   
localStorage.setItem("user-info", JSON.stringify(result.data))
this.$router.push({name: 'HomePage'})
}




        }


},

    mounted(){

        
let user = localStorage.getItem('user-info');
if(!user){
    
    this.$router.push({name: 'SignUp'}) }
    
}
    
}




</script>



<style scoped>




</style>
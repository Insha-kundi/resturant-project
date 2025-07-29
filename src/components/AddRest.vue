<template>

<HeaderSec/>
<h1>Please Add Your Resturant and Boom</h1>

<form action="" class="add-form">

    <input type="text" name="name" id="" placeholder="Enter Name of Resturant" v-model="resturant.name" v-on:keyup.enter="AddResturant()">
    <span v-if="errors.name" style="color:red">{{ errors.name }}</span>

    <input type="text" name="contact" id="" placeholder="Enter Contact of Resturant" v-model="resturant.contact" v-on:keyup.enter="AddResturant()">
    <span v-if="errors.contact" style="color:red">{{ errors.contact }}</span>


    <input type="text" name="address" id="" placeholder="Enter Address of Resturant" v-model="resturant.address" v-on:keyup.enter="AddResturant()">

    <span v-if="errors.address" style="color:red">{{ errors.address }}</span>

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
                address: '',
                

            },
            errors : {}
        }
    },


    methods:{

        validateForm(){

            this.errors = {};
            if(!this.resturant.name.trim()){

                this.errors.name = "Enter Resturant Name";
            }

            if(!this.resturant.contact.trim()){

this.errors.contact = "Enter Resturant Contact";
}

if(!this.resturant.address.trim()){

this.errors.address = "Enter Resturant Address";
}

return Object.keys(this.errors).length === 0;

        },
        
        
        async AddResturant(){


            if (!this.validateForm()) {
        // stop submission if invalid
        return;
      }
      try{


          
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

        catch(error){

            console.error("Add Resturant Failed", error);

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
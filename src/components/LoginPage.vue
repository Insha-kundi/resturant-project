<template>

<h1>Login</h1>


<div class="Login-page">

    <input type="email" v-model="email" placeholder="Enter Your Email">

    <input type="password" v-model="password" placeholder="Enter Your Password">

     <button @click="LogIn">Login</button>

     <router-link to="/sign-up">Sign Up</router-link>

</div>


</template>


<script>
import axios from 'axios';


export default{


    name: 'LoginPage',

    data(){

        return{
            email: '',
            password: ''
        }
    },

    /**
     * 
     */
    methods: {
        
      async  LogIn()
        {

            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`)
          
                if(result.status==200 && result.data.length>0){

                   
localStorage.setItem("user-info", JSON.stringify(result.data[0]))
this.$router.push({name: 'HomePage'})
}
}
        
    },

    mounted(){

        
let user = localStorage.getItem('user-info');
if(user){
    
    this.$router.push({name: 'HomePage'}) }
    
}


};


</script>

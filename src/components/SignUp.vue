<template>


<img src="" alt="">

<h1>Sign Up</h1>

<div class="register">

    <input type="text" v-model="name" placeholder="Enter Your Name">
    <input type="email" v-model="email" placeholder="Enter Your Email">

    <input type="password" v-model="password" placeholder="Enter Your Password">

     <button @click="SignUp">Sign Up</button>

     <router-link to="/login-page">Login Here</router-link>

</div>


</template>

<script>

import axios from 'axios';

export default{

    name: 'SignUp',

    data(){

        return{

            name: '',
            email: '',
            password: ''

        }
    },
    /**
     * 
     */
    methods:{

       async SignUp() {


        console.warn("SignUp", this.name, this.email, this.password)


        let result = await axios.post("http://localhost:3000/users", {

                    email: this.email,
                    password:  this.password,
                    name: this.name
                });
            

                console.warn(result);
                if(result.status==201){

                   
                    localStorage.setItem("user-info", JSON.stringify(result.data))
                    this.$router.push({name: 'HomePage'})
                }



            
        }
    } ,

    mounted(){

        
        let user = localStorage.getItem('user-info');
        if(user){
            
            this.$router.push({name: 'HomePage'}) }
            
        }
            
    }

     

</script >

<style scoped>

.register{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.register input{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 30px;
    /* color: blue; */
    border: 1px solid green;
    padding: 10px;
    margin: .5rem;
}

.register button{

    padding: 12px 40px 12px 40px;
    font-weight: 600;
    font-size: 18px;
    background: rgb(165, 167, 66);
    color: white;
    border: 1px solid white;
}


</style>
<template>

  <h1>Login</h1>


  <div class="Login-page">

    <span v-if="loginError" style="color:red">{{ loginError }}</span>


    <input type="email" v-model="email" placeholder="Enter Your Email">
    <span v-if="errors.email" style="color:red">{{ errors.email }}</span>


    <input type="password" v-model="password" placeholder="Enter Your Password">
    <span v-if="errors.password" style="color:red">{{ errors.password }}</span>

    <button @click="LogIn()">Login</button>


    <router-link to="/sign-up">Sign Up</router-link>

  </div>


</template>


<script>
import axios from 'axios';


export default {


  name: 'LoginPage',

  data() {

    return {
      email: '',
      password: '',
      errors: '',
      loginError: '',
    }
  },



  /**
   * 
   */
  methods: {

    validateForm() {
      this.errors = {};

      if (!this.email.trim()) {
        this.errors.email = "Email is required.";
      } else if (!/^\S+@\S+\.\S+$/.test(this.email)) {
        this.errors.email = "Invalid email format.";
      }

      if (!this.password.trim()) {
        this.errors.password = "Password is required.";
      } else if (this.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters.";
      }

      return Object.keys(this.errors).length === 0;
    },


    async LogIn() {
      this.loginError = '';

      if (!this.validateForm()) {
        // stop submission if invalid
        return;
      }

      try {

        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`)

        if (result.status == 200 && result.data.length > 0) {


          localStorage.setItem("user-info", JSON.stringify(result.data[0]))
          this.$router.push({ name: 'HomePage' })
        }
        else {

          this.loginError = 'Email or password is incorrect.';

        }
      }

      catch (error) {
        console.error("SignUp Failed", error);
        this.loginError = 'Something went wrong. Please try again.';

      }
    }

  },

  mounted() {


    let user = localStorage.getItem('user-info');
    if (user) {

      this.$router.push({ name: 'HomePage' })
    }

  }


};


</script>

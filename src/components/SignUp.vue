<template>
    <div class="register">
      <h1>Sign Up</h1>
  
      <input type="text" v-model="name" placeholder="Enter Your Name" />
      <span v-if="errors.name" style="color:red">{{ errors.name }}</span>
  
      <input type="email" v-model="email" placeholder="Enter Your Email" />
      <span v-if="errors.email" style="color:red">{{ errors.email }}</span>
  
      <input type="password" v-model="password" placeholder="Enter Your Password" />
      <span v-if="errors.password" style="color:red">{{ errors.password }}</span>
  
      <button @click="SignUp" @keyup.enter="SignUp">Sign Up</button>
  
      <router-link to="/login-page">Login Here</router-link>
    </div>
  </template>
  

<!-- <script>



import axios from 'axios';

export default{

    name: 'SignUp',

    data(){

        return{

            name: '',
            email: '',
            password: '',
            errors: {}

        }
    },
    /**
     * 
     */
    methods:{

        validateForm(){

            this.errors = {};

            if(!this.name.trim()){

                this.errors.name = "Name is Required";
            }

            if(!this.email.trim()){

             this.errors.email = "Email is Required";

            }
            else if(!/^\S+@\S+\.\S+$/.test(this.email))
            {

                this.errors.email = "Invalid email Formate.";
            }

            if(!this.password.trim()){

                this.errors.password = "Password is Required";
            }

            else if(this.password.length<6){

                this.errors.password = "Password must be at least 6 characters.";
            }

            return Object.keys(this.errors).length===0;


        },

       async SignUp() {


        console.warn("SignUp", this.name, this.email, this.password)


        if(this.validateForm()){

            return;
        }

        try{

            
            
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
            catch(error){


                console.error("SignUp Failed", error);
            }
                
                
            
            
        }
    } ,

    mounted(){

        
        let user = localStorage.getItem('user-info');
        if(user){
            
            this.$router.push({name: 'HomePage'}) }
            
        }
            
    }

     

</script > -->


<script>
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errors: {}
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.name.trim()) {
        this.errors.name = "Name is required.";
      }

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

    async SignUp() {
      console.warn("SignUp", this.name, this.email, this.password);

      if (!this.validateForm()) {
        // stop submission if invalid
        return;
      }

      try {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password
        });

        console.warn(result);
        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: 'HomePage' });
        }
      } catch (error) {
        console.error("SignUp Failed", error);
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.$router.push({ name: 'HomePage' });
    }
  }
};
</script>


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

.error {
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
  align-self: flex-start;
  width: 300px;
}



</style>
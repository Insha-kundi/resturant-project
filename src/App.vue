<template>

 <router-view/>
  
</template>

<script>


export default {
  name: 'App'
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.register, .Login-page, .add-form {

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}


.register input, .Login-page input, .add-form input{

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

.register button, .Login-page button, .add-form button{

padding: 12px 40px 12px 40px;
font-weight: 600;
font-size: 18px;
background: rgb(165, 167, 66);
color: white;
border: 1px solid white;
cursor: pointer;
}


</style>
 
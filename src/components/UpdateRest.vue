<template>

<HeaderSec/>
<h1>Welcome to Our Update Resturant Platfrom</h1>

</template>


<script>
import HeaderSec from './HeaderSec.vue'

export default {

    name: 'UpdateRest',
    components : {

        HeaderSec
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
<template>

    <div class="nav">


        <router-link to="/">Home</router-link>
        <router-link to="/add-rest">Add Resturant</router-link>

        <!-- <router-link to="update-rest">Update Resturant</router-link> -->

        <a @click="LogOut" href="#">LogOut</a>





    </div>

</template>


<script>

export default {

    name: 'HeaderSec',

    methods: {

        LogOut() {

            localStorage.clear();
            this.$router.push({ name: 'LoginPage' })

        }
    }

}


</script>


<style>
.nav {

    background-color: aqua;
    padding: 15px;
}

.nav a {

    margin: 1rem;
    color: black;
    text-decoration: none;
}

.nav a:hover {

    background-color: bisque;
    padding: 15px;
}
</style>
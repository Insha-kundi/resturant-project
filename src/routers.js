import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import AddRest from "./components/AddRest.vue";
import UpdateRest from "./components/UpdateRest.vue";


const routes = [
{

    name: 'HomePage',
    component: HomePage,
    path : '/'
},

{

    name: 'SignUp',
    component: SignUp,
    path : '/sign-up'
},

{

    name: 'LoginPage',
    component: LoginPage,
    path : '/login-page'
},

{

    name: 'AddRest',
    component: AddRest,
    path : '/add-rest'
},

{

    name: 'UpdateRest',
    component: UpdateRest,
    path : '/update-rest/:id'
},

];

const router = createRouter({

    history: createWebHistory(),
    routes,
});


export default router;



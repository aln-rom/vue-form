import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Registration from '../pages/Registration.vue'
import PasswordPage from '../pages/Set_password.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/password',
        name: 'PasswordPage',
        component: PasswordPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

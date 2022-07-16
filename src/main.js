import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// Components
import SongsVue from './components/Songs.vue'
import DashboardVue from './components/Dashboard.vue'
import AuthVue from './components/Auth.vue'
import RegisterVue from './components/Register.vue'

const routes = [
    {
        path: '/',
        component: DashboardVue
    },
    {
        path: '/songs',
        component: SongsVue
    },
    {
        path: '/auth',
        component: AuthVue
    },
    {
        path: '/register',
        component: RegisterVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import './assets/css/tailwind.css';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');

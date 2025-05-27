import { createRouter, createWebHistory } from 'vue-router';
import ProdutoList from '../components/ProdutoList.vue';
import ProdutoForm from '../components/ProdutoForm.vue';

const routes = [
    { path: '/produtos', component: ProdutoList },
    { path: '/produtos/novo', component: ProdutoForm },
    { path: '/produtos/:id', component: ProdutoForm, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
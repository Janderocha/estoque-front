import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import produtoList from './components/ProdutoList.vue';
import produtoForm from './components/ProdutoForm.vue';
import movimentacaoForm from "./components/MovimentacaoForm.vue";
import LucroProduto from "./components/LucroProduto.vue";

import './style.css'
import ProdutoList from "./components/ProdutoList.vue";


const routes = [
    { path: '/produtos', component: produtoList },
    { path: '/produtos/novo', component: produtoForm },
    { path: '/produtos/:id', component: produtoForm, props: true },
    { path: '/movimentacoes/novo', component: movimentacaoForm, props: true },
    { path: '/financeiro/', component: LucroProduto, props: true },
    { path: '/', component: ProdutoList, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');

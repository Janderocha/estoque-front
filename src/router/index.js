import { createRouter, createWebHistory } from 'vue-router';
import produtoList from "../components/ProdutoList.vue";
import produtoForm from "../components/ProdutoForm.vue";
import movimentacaoForm from "../components/MovimentacaoForm.vue";
import LucroProduto from "../components/LucroProduto.vue";
import produtoDetail from "../components/ProdutoDetail.vue";



const routes = [
    { path: '/produtos', component: produtoList },
    { path: '/produtos/novo', component: produtoForm },
    { path: '/produtos/id/:id', component: produtoForm, props: true },
    { path: '/produtos/detalhe/:id', component: produtoDetail, props: true },
    { path: '/movimentacoes/novo', component: movimentacaoForm, props: true },
    { path: '/financeiro/', component: LucroProduto, props: true },

    { path: '/', component: produtoList, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
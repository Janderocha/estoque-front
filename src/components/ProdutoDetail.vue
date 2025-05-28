<template>
  <div class="max-w-3xl min-w-xl mx-auto bg-white rounded-xl shadow-md p-8 mt-8">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Detalhes do Produto #{{ produto.id }}</h2>
    <div v-if="produto">
      <p><strong>Descrição:</strong> {{ produto.descricao }}</p>
      <p><strong>Tipo:</strong> {{ produto.tipo }}</p>
      <p><strong>Código:</strong> {{ produto.codigo }}</p>
      <p><strong>Quantidade em Estoque:</strong> {{ produto.quantidadeEstoque }}</p>
      <p><strong>Valor no Fornecedor:</strong> {{ produto.valor }}</p>
    </div>
    <div v-else>
      Carregando...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return { produto: null };
  },
  mounted() {
    axios.get(`http://ost:8081/produtos/id/${this.id}`)
      .then(res => this.produto = res.data);
  }
};
</script>
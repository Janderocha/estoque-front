<template>
  <div>
    <h2>Consultar Lucro do Produto</h2>
    <input v-model="produtoId" placeholder="ID do Produto" type="number" />
    <button @click="consultarLucro">Consultar</button>
    <div v-if="lucroDTO">
      <p><strong>Lucro:</strong> {{ lucroDTO.lucro }}</p>
      <p><strong>Quantidade Total de Saída:</strong> {{ lucroDTO.quantidadeTotalSaida }}</p>
    </div>
    <div v-if="erro" style="color: red;">{{ erro }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      produtoId: '',
      lucroDTO: null,
      erro: null
    };
  },
  methods: {
    async consultarLucro() {
      this.lucroDTO = null;
      this.erro = null;
      try {
        const res = await axios.get(`http://localhost:8081/estoque/financeiro/1`);
        this.lucroDTO = res.data;
      } catch (e) {
        this.erro = 'Erro ao consultar lucro: ' + (e.response?.data?.message || e.message);
      }
    }
  }
};
</script>
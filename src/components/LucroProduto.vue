<template>
  <div class="max-w-3xl min-w-xl mx-auto bg-white rounded-xl shadow-md p-8 mt-8">
    <h2 class="text-2xl font-bold mb-6 text-[#F54F29]">Consultar Lucro do Produto</h2>
    <div class="flex space-x-2 mb-4">

      <select
          v-model="produtoId"
          class="rounded border-gray-900 shadow-sm focus:border-[#F54F29] focus:ring-[#F54F29] px-3 py-2"
      >
        <option value="" disabled>Selecione o produto</option>
        <option v-for="p in produtos" :key="p.id" :value="p.id">{{ p.descricao }}</option>
      </select>
      <button
          @click="consultarLucro"
          class="bg-[#F54F29] text-white font-bold py-2 px-4 rounded hover:bg-[#d84315] transition"
      >
        Consultar
      </button>
    </div>
    <div v-if="lucroDTO" class="bg-gray-50 rounded p-4 mb-2">
      <p><strong>Lucro:</strong> {{ formatarDinheiro(lucroDTO.lucro) }}</p>
      <p><strong>Quantidade Total de Saída:</strong> {{ lucroDTO.quantidadeTotalSaida }}</p>
    </div>
    <div v-if="erro" class="text-red-500 text-sm">{{ erro }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      produtoId: '',
      produtos: [],
      lucroDTO: null,
      erro: null
    };
  },
  mounted() {
    axios.get('http://localhost:8081/produtos')
        .then(res => this.produtos = res.data);
  },
  methods: {
    async consultarLucro() {
      this.lucroDTO = null;
      this.erro = null;
      try {
        const res = await axios.get(`http://localhost:8081/produtos/${this.produtoId}/financeiro`);
        this.lucroDTO = res.data;
      } catch (e) {
        this.erro = 'Erro ao consultar lucro: ' + (e.response?.data?.message || e.message);
      }
    }
  }
};
</script>
<script setup>
import { useFormatarDinheiro } from '../composables/useFormatarDinheiro';

const { formatarDinheiro } = useFormatarDinheiro();
</script>

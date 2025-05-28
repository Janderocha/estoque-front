<template>
  <div class="max-w-3xl min-w-xl mx-auto bg-white rounded-xl shadow-md p-8 mt-8">
    <h2 class="text-2xl font-bold mb-6 text-[#F54F29]">Produtos</h2>
    <label class="block mb-4">
      <span class="text-gray-900">Tipo:</span>
      <select v-model="tipoSelecionado" @change="carregarProdutos"
              class="mt-1 block w-full rounded border-gray-900 shadow-sm focus:border-[#F54F29] focus:ring-[#F54F29]">
        <option value="TODOS">Todos</option>
        <option value="ELETRONICO">Eletrônico</option>
        <option value="MOVEL">Móvel</option>
        <option value="ELETRODOMESTICO">Eletrodoméstico</option>
      </select>
    </label>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-lg">
        <thead>
        <tr class="bg-[#F54F29] text-white">
          <th class="py-2 px-4 rounded-tl-lg">Descrição</th>
          <th class="py-2 px-4">Tipo</th>
          <th class="py-2 px-4">Qtd. Disponível</th>
          <th class="py-2 px-4">Qtd. Saída</th>
          <th class="py-2 px-4 rounded-tr-lg">Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="p in produtos" :key="p.id" class="border-b hover:bg-gray-50">
          <td class="py-2 px-4">{{ p.descricao }}</td>
          <td class="py-2 px-4">{{ p.tipo }}</td>
          <td class="py-2 px-4">{{ p.quantidadeEstoque }}</td>
          <td class="py-2 px-4">{{ p.quantidadeVendida }}</td>
          <td class="py-2 px-4 flex gap-2">
            <router-link :to="`/produtos/id/${p.id}`" class="text-[#F54F29] hover:underline">Editar</router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      produtos: [],
      tipos: [],
      tipoSelecionado: 'TODOS'
    };
  },
  mounted() {
    this.carregarProdutos();
  },
  methods: {
    carregarProdutos() {
      let url = 'http://localhost:8081/produtos';
      if (this.tipoSelecionado) {
        url += `/tipo/${this.tipoSelecionado}`;
      }
      axios.get(url).then(res => this.produtos = res.data);
    }
  }
};
</script>
<script setup>
import { useFormatarDinheiro } from '../composables/useFormatarDinheiro';

const { formatarDinheiro } = useFormatarDinheiro();
</script>
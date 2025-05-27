<template>
  <div class="max-w-xl mx-auto bg-white p-8 rounded shadow mt-8">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Cadastro de Produto</h2>
    <form @submit.prevent="salvar" class="space-y-4">
      <div>
        <label class="block text-gray-700 mb-1">Tipo</label>
        <select v-model="produto.tipo" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required>
          <option value="">Selecione</option>
          <option value="ELETRONICO">Eletrônico</option>
          <option value="MOVEL">Móvel</option>
          <option value="ELETRODOMESTICO">Eletrodoméstico</option>
        </select>
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Descrição</label>
        <input v-model="produto.descricao" type="text" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Código</label>
        <input v-model="produto.codigo" type="text" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Quantidade</label>
        <input v-model="produto.quantidadeEstoque" type="number" min="0" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Valor no Fornecedor</label>
        <input v-model="produto.valor" type="number" min="0" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      </div>
      <div class="flex justify-end">
        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Salvar</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      produto: {},
      tipos: ['ELETRONICO', 'ELETRODOMESTICO', 'MOVEL'],
      isEdit: false
    };
  },
  mounted() {
    if (this.id) {
      this.isEdit = true;
      axios.get(`http://localhost:8081/estoque/produto/${this.id}`).then(res => this.produto = res.data);
    }
  },
  methods: {
    salvar() {
      const url = this.isEdit
          ? `http://localhost:8081/estoque/produto/${this.id}`
          : 'http://localhost:8081/estoque/produto';
      const method = this.isEdit ? 'put' : 'post';

      axios({ method, url, data: this.produto }).then(() => this.$router.push("/produtos"))

    }
  }
};
</script>
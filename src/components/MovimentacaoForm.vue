<template>
  <div class="max-w-3xl min-w-xl mx-auto bg-white rounded-xl shadow-md p-8 mt-8">
    <h2 class="text-2xl font-bold mb-6 text-[#F54F29]">Nova Movimentação</h2>
    <form @submit.prevent="salvar" class="space-y-4">
      <label class="block">
        <span class="text-gray-900">Tipo:</span>
        <select v-model="movimentacao.tipo" required
                class="mt-1 block w-full rounded border-gray-900 shadow-sm focus:border-[#F54F29] focus:ring-[#F54F29]">
          <option disabled value="">Selecione o tipo</option>
          <option value="ENTRADA">Entrada</option>
          <option value="SAIDA">Saída</option>
        </select>
      </label>
      <label class="block">
        <span class="text-gray-900">Produto:</span>
        <select v-model="movimentacao.produtoId" required
                class="mt-1 block w-full rounded border-gray-900 shadow-sm focus:border-[#F54F29] focus:ring-[#F54F29]">
          <option disabled value="">Selecione o produto</option>
          <option v-for="p in produtos" :key="p.id" :value="p.id">{{ p.descricao }}</option>
        </select>
      </label>
      <label class="block">
        <span class="text-gray-900">Valor da Venda:</span>
          <input
              type="text"
              v-money="money"
              v-model="movimentacao.valor"
              placeholder="Valor"
              required
              :readonly="movimentacao.tipo === 'ENTRADA'"
              :class="[
        'mt-1 block w-full rounded border-gray-900 shadow-sm focus:border-[#F54F29] focus:ring-[#F54F29]',
        movimentacao.tipo === 'ENTRADA' ? 'bg-gray-100 cursor-not-allowed' : ''
      ]"
          />
        </label>
      <label class="block">
        <span class="text-gray-900">Data:</span>
        <input type="datetime-local" v-model="movimentacao.data" placeholder="Data da Venda" required
               class="mt-1 block w-full rounded border-gray-900 shadow-sm focus:border-[#F54F29] focus:ring-[#F54F29]" />
      </label>
      <label class="block">
        <span class="text-gray-900">Quantidade:</span>
        <input type="number" v-model.number="movimentacao.quantidade" placeholder="Quantidade" required
               class="mt-1 block w-full rounded border-gray-900 shadow-sm focus:border-[#F54F29] focus:ring-[#F54F29]" />
      </label>
      <button type="submit"
              class="w-full bg-[#F54F29] text-white font-bold py-2 px-4 rounded hover:bg-[#d84315] transition">
        Salvar
      </button>
    </form>
  </div>
</template>
  <script>
  import axios from 'axios';

  export default {
    props: ['id'],
    data() {
      return {
        movimentacao: {
          tipo: '',
          produtoId: '',
          valor: 0,
          data: '',
          quantidade: 1
        },
        produtos: [],
      };
    },
    mounted() {
      axios.get('http://localhost:8081/produtos')
        .then(res => this.produtos = res.data);

      const agora = new Date();
      const pad = n => n.toString().padStart(2, '0');
      const dataFormatada = `${agora.getFullYear()}-${pad(agora.getMonth() + 1)}-${pad(agora.getDate())}T${pad(agora.getHours())}:${pad(agora.getMinutes())}`;
      this.movimentacao.data = dataFormatada;

    },
    methods: {
      salvar() {
        const url =  'http://localhost:8081/movimentacoes';
        const method =  'post';
        const dataVenda = new Date(this.movimentacao.data);
        if (isNaN(dataVenda.getTime())) {
          alert('Data da venda inválida.');
          return;
        }
        const produtoId = Number(this.movimentacao.produtoId);
        if (!produtoId) {
          alert('Selecione um produto válido.');
          return;
        }

        const data = {
          ...this.movimentacao,
          produtoId: Number(this.movimentacao.produtoId)
        };
        console.log(method, url, data)

        axios({ method, url, data })
          .then(() => this.$router.push("/produtos"))
            .catch(err => {
              const mensagem = err.response && err.response.data
                  ? err.response.data
                  : 'Erro ao salvar movimentação';
              alert(mensagem);
              console.error(err);
            });
      },
      onValorInput(valor) {
        const num = parseFloat(valor.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
        this.movimentacao.valor = num;
      }
    },
    watch: {
      'movimentacao.tipo'(novoTipo) {
        if (novoTipo === 'ENTRADA') {
          this.movimentacao.valor = 0;
        }
      }
    }
  };
  </script>
<script setup>
import { reactive } from 'vue'

const money = {
  decimal: ',',
  thousands: '.',
  prefix: 'R$ ',
  suffix: '',
  precision: 2,
  masked: false
}

const movimentacao = reactive({
      tipo: 'SAÍDA',
      valor: 0
    })
</script>
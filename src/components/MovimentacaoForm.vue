<template>
    <div>
      <h2>  Nova Movimentação</h2>
      <form @submit.prevent="salvar">
        <select v-model="movimentacao.tipo" required>
          <option disabled value="">Selecione o tipo</option>
          <option value="ENTRADA">Entrada</option>
          <option value="SAIDA">Saída</option>
        </select>
        <select v-model="movimentacao.produto" required>
          <option disabled value="">Selecione o produto</option>
          <option v-for="p in produtos" :key="p.id" :value="p">{{ p.descricao }}</option>
        </select>
        <input type="number" v-model.number="movimentacao.valor" placeholder="Valor" required />
        <input type="datetime-local" v-model="movimentacao.dataVenda" placeholder="Data da Venda" required />
        <input type="number" v-model.number="movimentacao.quantidade" placeholder="Quantidade" required />
        <button type="submit">Salvar</button>
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
          produto: '',
          valor: 0,
          dataVenda: '',
          quantidade: 1
        },
        produtos: [],
        isEdit: false
      };
    },
    mounted() {
      axios.get('http://localhost:8081/estoque/produtos')
        .then(res => this.produtos = res.data);

      if (this.id) {
        this.isEdit = true;
        axios.get(`http://localhost:8081/estoque/movimentacao/${this.id}`)
          .then(res => {
            this.movimentacao = res.data;
            // Ajuste para campo dataVenda se necessário
          });
      }
    },
    methods: {
      salvar() {
        const url = this.isEdit
          ? `http://localhost:8081/estoque/movimentacao/${this.id}`
          : 'http://localhost:8081/estoque/movimentacao';
        const method = this.isEdit ? 'put' : 'post';

        // Envie apenas o id do produto
        const data = {
          ...this.movimentacao,
        //  produto: this.movimentacao.produto.id
        };

        axios({ method, url, data })
          .then(() => this.$router.push("/movimentacao"))
          .catch(err => {
            alert('Erro ao salvar movimentação');
            console.error(err);
          });
      }
    }
  };
  </script>
<template>
  <aside class="w-64 min-h-screen bg-gradient-to-b from-[#F54F29] to-white-300 text-white p-6 shadow-lg rounded-r-xl flex flex-col">
    <h1 class="text-3xl font-extrabold mb-10 flex items-center gap-2">
      <img :src="icon" alt="Ícone Produto" class="w-12 h-12 mx-auto mb-4" />
    </h1>
    <nav class="space-y-6 flex-1">
      <details class="group">
        <summary class="flex items-center gap-2 cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-700 transition">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M20 21V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 3v4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 3v4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Produto
        </summary>
        <div class="ml-6 mt-2 space-y-1">
          <router-link to="/produtos/novo" class="block py-1 px-3 rounded hover:bg-blue-600 transition">Novo</router-link>
          <router-link to="/produtos" class="block py-1 px-3 rounded hover:bg-blue-600 transition">Listar</router-link>
        </div>
      </details>
      <details class="group">
        <summary class="flex items-center gap-2 cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-700 transition">
          <svg class="w-5 h-5 text-green-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 8v8m4-4H8" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Movimentação
        </summary>
        <div class="ml-6 mt-2 space-y-1">
          <router-link to="/movimentacoes/novo" class="block py-1 px-3 rounded hover:bg-green-600 transition">Novo</router-link>
          <router-link to="/movimentacao" class="block py-1 px-3 rounded hover:bg-green-600 transition">Listar</router-link>
        </div>
      </details>
      <router-link to="/financeiro" class="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
        <svg class="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Financeiro
      </router-link>
    </nav>
  </aside>
</template>

<script setup >
import icon from '/icon.png';
</script>
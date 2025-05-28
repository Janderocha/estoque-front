<template>
  <aside class="w-64 min-h-screen bg-gradient-to-b from-[#F54F29] to-white-300 text-white p-6 shadow-lg rounded-r-xl flex flex-col">
    <h1 class="text-3xl font-extrabold mb-10 flex items-center gap-2">
      <img :src="icon" alt="Ícone Produto" class="w-12 h-12 mx-auto mb-4" />
    </h1>
    <nav class="space-y-6 flex-1">
      <details class="group">
        <summary class="flex items-center gap-2 cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-700 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          Movimentação
        </summary>
        <div class="ml-6 mt-2 space-y-1">
          <router-link to="/movimentacoes/novo" class="block py-1 px-3 rounded hover:bg-green-600 transition">Novo</router-link>
        </div>
      </details>
      <router-link to="/financeiro" class="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Financeiro
      </router-link>
    </nav>
  </aside>
</template>

<script setup >
import icon from '/icon.png';
</script>
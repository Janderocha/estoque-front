<template>
  <div id= "app" class ="min-h-screen">
  <div class="flex min-h-screen">
    <AppSidebar />
    <main class="flex-1  pl-8 w-full h-screen overflow-auto">
      <router-view />
    </main>
  </div>
  </div>
</template>

<script>
import AppSidebar from "./components/AppSidebar.vue";


export default {
  name: 'App',
  components: {
    AppSidebar
  }
}
</script>

<style>
</style>

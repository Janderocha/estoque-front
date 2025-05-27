<template>
  <div class="flex min-h-screen">
    <AppSidebar />
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppSidebar from "./components/AppSidebar.vue";

export default {
  name: 'App',
  components: {
    AppSidebar
    // //  HelloWorld,
    // produtoForm,
    // produtoList,
  //  appSideBar,
  }
}
</script>

<style>
</style>

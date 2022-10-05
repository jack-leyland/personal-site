<script setup lang="ts">
import Home from './views/Home.vue'
import BackgroundTriangle from './components/icons/BackgroundTriangle.vue';
import SideNav from './components/SideNav.vue';
import TopBar from './components/TopBar.vue';
</script>

<template>
    <TopBar />
    <BackgroundTriangle />
    <SideNav />
    <RouterView />
</template>

<style scoped>

</style>

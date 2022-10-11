<script setup lang="ts">
import BackgroundTriangle from './components/icons/BackgroundTriangle.vue';
import SideNav from './components/SideNav.vue';
import TopBar from './components/TopBar.vue';
import { onBeforeUnmount, onMounted } from 'vue';
import {store} from './store'

const handleResize = () => {
    store.setScreenWidth(window.innerWidth || document.documentElement.clientWidth)
}

onMounted(() => {
    window.addEventListener("resize", handleResize);
})

onBeforeUnmount(() => {
    window.addEventListener("resize", handleResize);
})

</script>

<template>
    <TopBar />
    <BackgroundTriangle />
    <SideNav />
    <RouterView />
</template>

<style scoped>

</style>

<script setup lang="ts">
import BackgroundTriangle from './components/icons/BackgroundTriangle.vue';
import SideNav from './components/SideNav.vue';
import TopBar from './components/TopBar.vue';
import { onBeforeUnmount, onMounted } from 'vue';
import { store } from './store'
import debounce from 'lodash.debounce'

const handleResize = () => {
    store.setScreenWidth(window.innerWidth || document.documentElement.clientWidth)
}

onMounted(() => {
    window.addEventListener("resize", debounce(handleResize, 200));
})

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
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

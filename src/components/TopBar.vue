<script setup lang="ts">
import { useRouter } from 'vue-router'
import { store } from "../store"
const router = useRouter()
const routeHome = () => {
  router.push("/")
}
</script>

<template>
  <header>
    <div class=" animate-fade z-30 relative fixed w-full h-24 flex items-center mt-6">
      <div
        class=" group absolute left-6 w-64 h-24 bg-greenish flex justify-center items-center hover:bg-black cursor-pointer transition-all duration-200"
        @click="routeHome">
        <h1 class="text-black font-title font-bold text-3xl group-hover:text-white">Jack Leyland.</h1>
      </div>
    </div>
  </header>

</template>

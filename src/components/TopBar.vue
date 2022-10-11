<script setup lang="ts">
import { computed, ref, Ref } from '@vue/reactivity';
import { useRouter } from 'vue-router'
import { store } from "../store"
import Hamburger from "./icons/Hamburger.vue"
import CloseButton from './icons/CloseButton.vue';
const router = useRouter()
const routeHome = () => {
  router.push("/")
}

const renderHamburger: Ref<boolean> = computed(() => store.screenWidth < 800)

const navItems: { id: string, text: string }[] = [
  { id: "skills", text: "Skills" },
  { id: "projects", text: "Projects" },
  { id: "about", text: "About Me" },
];

const handleNav = (id: string) => {
  router.push(id);
  active.value = false
}

var active: Ref<boolean> = ref(false)

</script>

<template>
  <header>
    <div v-if="!active" class="z-40 fixed w-full h-12 sm:h-24 ">
      <div
        class="animate-fade z-30 mt-2 sm:mt-6 group absolute left-2 sm:left-6 h-12 sm:h-24 w-24 sm:w-64 bg-greenish flex justify-center items-center hover:bg-black cursor-pointer transition-all duration-200"
        @click="routeHome">
        <h1 class=" text-black font-title font-bold text-xs sm:text-3xl group-hover:text-white">Jack Leyland.</h1>
      </div>
      <Hamburger v-if="renderHamburger" class="z-40 animate-fade absolute right-2 top-4 h-8 cursor-pointer" @click="active = true" />
    </div>
    
  </header>
  <div v-if="active"
      class="fixed-important top-0 bottom-0 animate-[fade_300ms_ease-in-out] z-50 relative h-[30vh] w-full bg-white text-center pt-14 font-title ">
      <CloseButton style-string="absolute h-8 top-2 right-2 cursor-pointer" @click="active = false" />
      <div>
        <div v-for="{id, text} in navItems"
          class="relative after:bg-greenish hover:after:w-[20%] after:left-[40%] after:z-[-1] after:absolute after:left-0 after:bottom-0 after:h-[50%] after:w-0 cursor-pointer after:transition-all after:duration-300"
          @click="handleNav(id)">
          {{text}}
        </div>
      </div>
    </div>
</template>

<style scoped>
.fixed-important {
  position: fixed !important
}
</style>
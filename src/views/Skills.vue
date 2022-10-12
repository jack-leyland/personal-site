<script setup lang="ts">
import { computed, Ref } from "vue";
import GithubLogo from "../components/icons/GithubLogo.vue";
import LinkedinLogo from "../components/icons/LinkedinLogo.vue";
import {store} from '../store'

var renderMobile: Ref<boolean> = computed(()=> store.screenWidth < 800)

</script>
    
<template>
    <div class="fixed z-10 animate-fade w-[46vw] ml-[26vw] mr-[26vw] pt-24 sm:pt-56">
        <div 
            class="animate-fade tracking-wide font-light font-alt text-gray-500 text-4xl mb-8 m-auto">
            My Skills
        </div>
        <h1 class="font-alt text-gray-800 tracking-wide text-xl mb-2">Languages</h1>
        <span class="font-alt">JavaScript, TypeScript, Python, C++, Java, CSS, HTML</span>
        <h1 class="font-alt text-gray-800 tracking-wide text-xl mb-2 mt-12">Frameworks</h1>
        <span class="font-alt">React, Vue, Express</span>
        <h1 class="font-alt text-gray-800 tracking-wide text-xl mb-2 mt-12">Technologies</h1>
        <span class="font-alt">NodeJS, Tailwind CSS, Linux, Git, Docker</span>
    </div>
</template>
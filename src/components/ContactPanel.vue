<script setup lang="ts">
import GithubLogo from './icons/GithubLogo.vue';
import LinkedinLogo from './icons/LinkedinLogo.vue';

const resumeLink = "/resume.pdf"

</script>


<template>
    <a :href="resumeLink" download="jack_leyland_resume.pdf">
        <button
        class="font-title text-black text-sm sm:text-lg mt-8 sm:mt-16 mb-2 p-3 mr-4 bg-greenish hover:text-white hover:bg-black cursor-pointer transition-all duration-200">Download
        my resume</button>
    </a>
    <span class="font-title text-black block sm:inline text-sm sm:text-lg"> or, contact: <a href="mailto:jack@leyland.dev" target="_blank" rel="noopener noreferrer"><span
            class="text-mainPurple font-bold">jack@leyland.dev</span></a></span>
    <div class="mb-2 mt-24 font-alt text-gray-500 tracking-wide test-md sm:text-lg font-light">Find me elsewhere</div>
    <div class="flex">
        <a href="https://github.com/jack-leyland">
            <GithubLogo styleString=" h-12 sm:h-14 sm:w-14 mr-8 hover:fill-mainPurple transition-all duration-300 cursor-pointer"/>
        </a>
        <a href="https://www.linkedin.com/in/jack-leyland-09b31b79/">
            <LinkedinLogo styleString="h-12 sm:h-14 sm:w-14 cursor-pointer hover:fill-mainPurple transition-all duration-300" />
        </a>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { store } from "../store"
const router = useRouter();
const onClick = () => {
    router.push("about")
    store.setSideNav(false)
}
</script>

<template>
        <div class="mb-2 font-alt text-gray-500 tracking-wide text-lg font-light">Who am I?</div>
        <span class="font-title text-4xl"><div class="inline-block">Hi!</div> I'm <span class="text-mainPurple">Jack</span>, a full-stack software
            engineer based in New York City.
        </span>
        <br>
        <div class="relative group inline-flex pt-3 pb-3 pr-3 h-5 mt-2 text-lg 
                items-center text-gray-500 hover:text-white cursor-pointer 
                transition-all duration-300 after:z-[-1] after:bg-mainPurple 
                after:absolute after:left-0 after:bottom-0 after:h-[100%] 
                after:w-0 hover:after:w-[100%] cursor-pointer after:transition-all 
                after:duration-200" @click="onClick">
            <svg class="fill-gray-500 rotate-90 h-5 w-5 mr-2 group-hover:fill-white transition-all duration-200"
                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 122.88 80.593" enable-background="new 0 0 122.88 80.593"
                xml:space="preserve">
                <g>
                    <polygon points="122.88,80.593 122.88,49.772 61.44,0 0,49.772 0,80.593 61.44,30.82 122.88,80.593" />
                </g>
            </svg>
            <div class="font-title">More about me</div>
        </div>

</template>
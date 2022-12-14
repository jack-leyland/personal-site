<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';
import { Ref, ref } from 'vue';
import GithubLogo from './icons/GithubLogo.vue';
import CloseButton from './icons/CloseButton.vue';

const props = defineProps({
    title: String,
    shortDesc: String,
    longDesc: String,
    thumbnailFile: String,
    githubUrl: String,
    liveUrl: String,
    tech: Array,
});

const imagePath = "/img/" + props.thumbnailFile
var activeModal: Ref<boolean> = ref(false)

</script>

<template>
    <div class="animate-fade flex justify-center m-auto mb-12">
        <div class="w-[200px] mr-8">
            <h1 class="font-title text-2xl font-bold">{{props.title}}</h1>
            <br>
            <h1 class="font-alt text-gray-800 text-sm">{{props.shortDesc}}</h1>
            <div v-if="props.longDesc" class="relative group inline-flex pt-2 pb-2 pr-2 h-4 mt-2 text-sm 
                items-center text-gray-500 hover:text-white cursor-pointer 
                transition-all duration-300 after:z-[-1] after:bg-mainPurple 
                after:absolute after:left-0 after:bottom-0 after:h-[100%] 
                after:w-0 hover:after:w-[100%] cursor-pointer after:transition-all 
                after:duration-200" @click="activeModal = true">
                <svg class="fill-gray-500 rotate-90 h-4 w-4 group-hover:fill-white transition-all duration-200"
                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 80.593"
                    enable-background="new 0 0 122.88 80.593" xml:space="preserve">
                    <g>
                        <polygon
                            points="122.88,80.593 122.88,49.772 61.44,0 0,49.772 0,80.593 61.44,30.82 122.88,80.593" />
                    </g>
                </svg>
                <div class="font-alt">Learn more</div>
            </div>
            <h2 class="font-alt font-light mt-4 mb-2">Technologies</h2>
            <div class="w-full flex flex-wrap">
                <img class="h-6 mr-2 mb-2" v-for="item in props.tech" :src="'/svg/'+item+'.svg'" :key="uuidv4()">
            </div>
        </div>
        <div class="relative h-[400px] w-[750px]">
            <img class="w-full h-full drop-shadow-md" :src="imagePath" :key="uuidv4()">
            <div class="animate-fade font-alt p-12 text-gray-800 items-center absolute top-0 left-0 h-full w-full blur-backdrop" v-if="activeModal"
                :key="uuidv4()" v-html="props.longDesc">
            </div>
            <CloseButton v-if="activeModal" style-string="animate-fade absolute top-3 right-3 h-6 cursor-pointer" @click="activeModal = false"/>
            <a :href="props.githubUrl" target="_blank" rel="noopener noreferrer">
                <button class="absolute group bottom-4 left-4 drop-shadow-md font-alt font-light 
                        flex items-center justify-center bg-white h-14 w-48 p-3 
                        text-gray-800 hover:bg-mainPurple hover:text-white transistion-all duration-200">
                    <GithubLogo style-string=" h-6 mr-4 group-hover:fill-white" /> Source Code
                </button>
            </a>
            <a :href="props.liveUrl" target="_blank" rel="noopener noreferrer">
                <button class="absolute group bottom-4 right-4 drop-shadow-md font-alt font-light 
                        flex items-center justify-center bg-white h-14 w-48 p-3 
                        text-gray-800 hover:bg-mainPurple hover:text-white transistion-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mr-4 group-hover:stroke-white stroke-black"
                        viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="4" width="18" height="12" rx="1" />
                        <line x1="7" y1="20" x2="17" y2="20" />
                        <line x1="9" y1="16" x2="9" y2="20" />
                        <line x1="15" y1="16" x2="15" y2="20" />
                    </svg>
                    Live Demo
                </button>
            </a>
        </div>
    </div>

</template>

<style scoped>
@supports (backdrop-filter: blur(12px)){
    .blur-backdrop {
        backdrop-filter: blur(12px)
    }
}
@supports not (backdrop-filter: blur(12px)){
    .blur-backdrop {
        background-color: rgb(212 212 216);
    }
}
.gradient {
    background: linear-gradient(0deg, rgb(188, 188, 188, 1) 0%, rgba(188, 188, 188, 0.99) 80%, rgba(0, 212, 255, 0) 100%);
}
</style>
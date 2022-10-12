<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import { v4 as uuidv4 } from 'uuid';
import { onBeforeUnmount, onMounted, Ref, ref } from 'vue';
import ProjectCardDesktop from '../components/ProjectCardDesktop.vue';
import ProjectCardMobile from '../components/ProjectCardMobile.vue';
import {store} from '../store'
import { computed } from '@vue/reactivity';

const projects: {
    title: string,
    shortDesc: string,
    longDesc: string,
    thumbnailFile: string,
    githubUrl: string,
    liveUrl: string,
    tech: string[]
}[] = [
        {
            title: "GreenHouse",
            shortDesc: "A platform to help UK homeowners improve the energy efficiency of their households. Developed by our student team at Imperial College London. ",
            longDesc: "GreenHouse makes use of the UK Energy Performance certificate API to allow uses to more convieniently analyze their home's energy efficiency. <br> <br>" +
                "The platform also gives users a means of managing efficiency improvements and provides crowd-sourced cost estimates for common improvements made in their neighborhood.",
            thumbnailFile: "greenhouse.png",
            githubUrl: "https://github.com/jack-leyland/GreenHouse",
            liveUrl: "https://epc-site-frontend.vercel.app/",
            tech: ["typescript", "python", "graphql", "django", "nextjs"]
        },
        {
            title: "NodeWatts",
            shortDesc: "A Linux tool for energy profiling NodeJS web server codebases at function-level granularity. Developed as a master's dissertation project at Imperial College London.",
            longDesc: "NodeWatts is a Linux CLI tool and accompanying GUI which implements a new approach for generating power profiles of NodeJS web server code at function-level granularity. "
                + "<br> <br> The tool was developed as a Master's dissertation project at Imperial College London, and was built on top of the" +
                " <a style='color:blue' href='https://powerapi-ng.github.io/smartwatts.html'> SmartWatts <a> tool developed by the SPIRALS Reasearch Group. <br> <br>"
                + "The live demo provides an example of a NodeWatts energy profile generated for a demo server as shown in the tool's GUI. For more information on the tool's methodology, please email me for a copy of the dissertation paper.",
            thumbnailFile: "nodewatts.png",
            githubUrl: "https://github.com/jack-leyland/GreenHouse",
            liveUrl: "https://epc-site-frontend.vercel.app/",
            tech: ["python", "c", "react", "javascript", "nodejs", "mongodb", "linux"]
        },
        {
            title: "Personal Website",
            shortDesc: "My personal website.",
            longDesc: "",
            thumbnailFile: "nodewatts.png",
            githubUrl: "https://github.com/jack-leyland/GreenHouse",
            liveUrl: "https://epc-site-frontend.vercel.app/",
            tech: ["typescript", "vuejs", "nodejs"]
        },
    ]

var renderMobile: Ref<boolean> = computed(()=> store.screenWidth < 1200)

</script>

<template>
    <!-- <div v-if="!renderMobile"
        class="animate-fade tracking-wide fixed font-light font-alt text-gray-500 text-4xl top-48 left-[15vw]">
        My Work
    </div> -->
    <div class="z-10 pt-24 sm:pt-48 flex-col relative animate-fade w-[80vw] sm:w-[70vw] m-auto">
        <div
            class="animate-fade tracking-wide font-light font-alt text-gray-500 text-4xl w-full mb-8 m-auto">
            My Work
        </div>
        <ProjectCardDesktop v-if="!renderMobile" v-for="data in projects" v-bind="data"  :key="uuidv4()" />
        <ProjectCardMobile v-if="renderMobile" v-for="data in projects" v-bind="data"  :key="uuidv4()" />
    </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
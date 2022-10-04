<script setup lang="ts">
import TopBar from "./TopBar.vue"
const navItems: string[] = ["About Me", "Projects", "Skills", "Experience"];
</script>

<template>

    <TopBar />
    <svg class="absolute bottom-0 right-0 w-[50%] h-[90%] z-[-2]" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#FAF9F6" points="0,100 100,0 100,100" />
    </svg>
    <div class="absolute left-0 mt-36 pl-48 w-[50vw]">
        <div class="mb-2 font-alt text-gray-500 tracking-wide text-lg">Who am I?</div>
        <span class="font-title text-4xl">Hi! I'm <span class="text-mainPurple">Jack</span>, a full-stack software
            engineer based in New York City.
        </span>
        <br>
        <div class="group inline-flex pt-3 pb-3 pr-3 h-5 mt-2 text-lg items-center text-gray-500 hover:bg-mainPurple hover:text-white cursor-pointer transition-all duration-200">
            <svg class="fill-gray-500 rotate-90 h-5 w-5 mr-2 group-hover:fill-white transition-all duration-200" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 122.88 80.593" enable-background="new 0 0 122.88 80.593" xml:space="preserve">
                <g>
                    <polygon points="122.88,80.593 122.88,49.772 61.44,0 0,49.772 0,80.593 61.44,30.82 122.88,80.593" />
                </g>
            </svg>
            <div class="font-title">More about me</div>
        </div>

        <!-- <button>Resume</button> -->
    </div>
    <div class="absolute right-[10%] bottom-[15%] flex-row text-7xl font-title font-bold text-right">
        <div v-for="item in navItems"
            class="relative mb-12 pl-6 pt-2 hover:after:bg-greenish after:z-[-1] after:absolute after:left-0 after:bottom-0 after:h-[50%] after:w-[100%] cursor-pointer">
            {{item}}
        </div>
    </div>
</template>
<script setup lang="ts">
import TopBar from "./TopBar.vue"
const navItems: string[] = ["Projects", "Skills", "Experience", "About Me",];
</script>

<template>
    <TopBar />
    <svg class="absolute bottom-0 right-0 w-[65%] h-[100%] z-20" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#FAF9F6" points="0,100 100,0 100,100" />
    </svg>
    <div class="absolute left-0 top-0 pt-56 pl-48 h-[100vh] z-10 w-[50vw]">
        <div class="mb-2 font-alt text-gray-500 tracking-wide text-lg font-light">Who am I?</div>
        <span class="font-title text-4xl">Hi! I'm <span class="text-mainPurple">Jack</span>, a full-stack software
            engineer based in New York City.
        </span>
        <br>
        <div
            class="relative group inline-flex pt-3 pb-3 pr-3 h-5 mt-2 text-lg items-center text-gray-500 hover:text-white cursor-pointer transition-all duration-300 after:z-[-1] after:bg-mainPurple after:absolute after:left-0 after:bottom-0 after:h-[100%] after:w-0 hover:after:w-[100%] cursor-pointer after:transition-all after:duration-200">
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
        <br>
        <button
            class="font-title text-black text-lg mt-16 mb-24 p-3 mr-4 bg-greenish hover:text-white hover:bg-black cursor-pointer transition-all duration-200">Download
            my resume</button>
        <span class="font-title text-black"> or, contact: <span
                class="text-mainPurple font-bold">jack@leyland.dev</span></span>
        <div class="mb-2 font-alt text-gray-500 tracking-wide text-lg font-light">Find me elsewhere</div>
        <div class="flex">
            <svg class="h-14 w-14 mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <svg class="h-14 w-14 mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        </div>
    </div>
    <div class="absolute z-30 right-[10%] bottom-[15%] flex-row text-7xl font-title font-bold text-right">
        <div v-for="item in navItems"
            class="relative mb-12 pl-6 pt-2 after:bg-greenish after:z-[-1] after:absolute after:left-0 after:bottom-0 after:h-[50%] after:w-0 hover:after:w-[100%] cursor-pointer after:transition-all after:duration-200">
            {{item}}
        </div>
    </div>
</template>
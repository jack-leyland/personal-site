<script setup lang="ts">
import GithubLogo from "../components/icons/GithubLogo.vue";
import LinkedinLogo from "../components/icons/LinkedinLogo.vue";

</script>

<template>
    <div class="animate-fade absolute flex justify-center top-0 pt-56 w-full h-[100vh] ">
        <div class="w-[45vw] font-title flex">
            <div class="mr-2">
                <h1 class="font-bold text-2xl mb-5">My name is Jack Leyland. Nice to meet you!</h1>
                <p class="font-alt font-light text-gray-400">Reach Out</p>
                <p class="font-alt text-mainPurple mb-5">jack@leyland.dev</p>
                <div class="flex">
                    <a href="https://github.com/jack-leyland">
                        <GithubLogo styleString="h-6 w-6 mr-8 hover:fill-mainPurple transition-all duration-300 cursor-pointer"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jack-leyland-09b31b79/">
                        <LinkedinLogo styleString="h-6 w-6 cursor-pointer hover:fill-mainPurple transition-all duration-300" />
                    </a>
                </div>
            </div>
            <p class="font-alt font-light tracking-wide">Way back in 2020, I decided it
                was time to align my career with my love for computers and building things. So, I dropped everything
                and went to get my Master's degree in Computing at <strong>Imperial College London</strong>.
                I have been passionately involved in computing ever since.
                <br>
                <br>
                I have <strong>{{new Date().getFullYear() - 2020}} years</strong> of experience building software at the
                academic and personal level,
                with a particular focus on web applications. I am currrent looking for my first professional
                role in the field. Feel free to check out my <router-link to="/projects"><span
                        class="text-mainPurple hover:font-bold">projects</span>
                </router-link> and the <router-link to="/skills"><span
                        class="text-mainPurple hover:font-bold">techologies</span>
                </router-link> I use!
                <br>
                <br>
                I also hold a Bachelor's degree in Finance from <strong>Univeristy of Connecticut</strong>.
                In my former life, I was an Analyst in the financial services industry in New York City for three years.
            </p>
        </div>
    </div>
</template>
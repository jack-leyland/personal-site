<script setup lang="ts">

const categoryStyle: string = "relative mb-4 mt-4 font-alt text-gray-800 text-xl after:bg-greenish after:z-[-1] after:absolute after:left-0 after:bottom-0 after:h-[50%] after:w-48"

</script>
    
<template>
    <div class="fixed z-10 animate-fade w-[46vw] ml-[26vw] mr-[26vw] pt-24 sm:pt-56">
        <div 
            class="animate-fade tracking-wide font-light font-alt text-gray-500 text-4xl mb-8 m-auto">
            My Skills
        </div>
        <h1 :class="categoryStyle">Languages</h1>
        <span class="font-alt text-gray-700">JavaScript, TypeScript, Python, C++, Java, CSS, HTML, SQL</span>
        <h1 :class="categoryStyle">Frameworks</h1>
        <span class="font-alt text-gray-700">React, React Native, Vue, Next.js, Express.js, TailwindCSS, Django, Flask</span>
        <h1 :class="categoryStyle">Technologies</h1>
        <span class="font-alt text-gray-700">Node.js, MongoDB, SQLite, PostgreSQL, GraphQL, REST APIs, Nginx, JUnit, JMock Mongoose ORM, </span>
        <h1 :class="categoryStyle">Developer Tools</h1>
        <span class="font-alt text-gray-700">Linux, Git, Docker, Heroku, Digital Ocean Droplets</span>
    </div>
</template>
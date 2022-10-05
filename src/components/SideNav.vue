<script setup lang="ts">
import { store } from "../store"
import { useRouter, useRoute} from 'vue-router'
import { watch } from 'vue'


const router = useRouter()
const route = useRoute()
watch(()=>route.name, ()=>{
    if (route.name === "Home") {
        store.setSideNav(true)
    } else {
        store.setSideNav(false)
    }
})

const navItems: { id: string, text: string }[] = [
    { id: "projects", text: "Projects" },
    { id: "skills", text: "Skills" },
    { id: "experience", text: "Experience" },
    { id: "about", text: "About Me" }
];

const sideMenuStyle: string = "animate-menuTransitionDown absolute z-30 right-[10%] top-[45%] flex-row text-7xl font-title font-bold text-right"
const sideItemStyle: string = "relative mb-12 pl-6 pt-2 after:bg-greenish after:z-[-1] after:absolute after:left-0 after:bottom-0 after:h-[50%] after:w-0 hover:after:w-[100%] cursor-pointer after:transition-all after:duration-300"
const topBarMenuStyle: string = "animate-menuTransitionUp absolute z-30 h-24 right-6 top-6 flex-row text-xl font-title text-right"
const topBarItemStyle: string = "relative ml-24 after:bg-greenish after:z-[-1] after:absolute after:left-0 after:bottom-0 after:h-[50%] after:w-0 cursor-pointer after:transition-all after:duration-300" 

const handleNav = (id: string) => {
    router.push(id);
} 

const menuStyling = () => {
    return store.sideNav ? sideMenuStyle : topBarMenuStyle
}

const itemStyling = (id:string) => {
    if (store.sideNav) return sideItemStyle
    console.log(route.name)
    if (route.name?.toString().toLowerCase() === id){
        return topBarItemStyle + " after:w-[100%]"
    } else {
        return topBarItemStyle + " hover:after:w-[100%]"
    }
}

</script>

<template>
    <div 
    :class="menuStyling()">
        <div v-for="{id, text} in navItems"
        :class="itemStyling(id)"
        @click="handleNav(id)"            
        >
            {{text}}
        </div>
    </div>
</template>
<script setup lang="ts">

import { defineProps, reactive } from "vue";

const props = defineProps({    
    body: String,
    timestamp: Number,
    id: String});


// TODO: Make this show something nicer and locale-specific
const formatTimestamp = (ts: number|undefined): string => {
    if (!ts) return ""
    let split = new Date(ts).toISOString().split("T")
    let date = split[0]
    let time = split[1].slice(0,-8)
    date = date.split("-").reverse().join("-")
    return date 
}


</script>

<template>
    <div class="w-full border-black mb-2" :key="props.id">
        <div class="w-full flex justify-start font-alt text-gray-800 text-xl">{{props.body}}</div>
        <div class="w-full flex justify-end text-sm font-alt text-gray-600">- {{formatTimestamp(props.timestamp)}}</div>
    </div>
</template>

<script setup lang="ts">
import BlogPost from "../components/BlogPost.vue"
import { onMounted, Ref, ref } from "vue";
import axios from 'axios'
let endpoint = import.meta.env.VITE_BLOG_ENDPOINT + "/posts"

type Post = {
    postId: string, 
    post: string,
    added_on: string
}

type PostsAPIResponse = {
    Count: number
    Items: Post[];
    ScannedCount?: Number
    LastEvaluatedKey?: {
        postId: string,
        added_on: string
    }
};

let loading: Ref<boolean> = ref(true)
let error: Ref<boolean> = ref(false)
let lastPost: Ref<{
        postId: string,
        added_on: string
    }|null> = ref(null);
let posts: Ref<Post[] | null> = ref(null)


onMounted(() => {
  axios.get<PostsAPIResponse>(endpoint ,{ params: { pageSize: 5 } })
    .then((response) => {
        posts.value = response.data["Items"]
        if (response.data["LastEvaluatedKey"]) {
            lastPost.value = response.data["LastEvaluatedKey"]
        }
        loading.value = false
    }).catch((err) => {
        loading.value = false
        error.value = true
    })
})

const clickHandler = () => {
    loading.value = true
    axios.get<PostsAPIResponse>(endpoint ,{ params: { pageSize: 5, last:1, id:lastPost.value?.postId,added_on:lastPost.value?.added_on, } })
    .then((response) => {
        posts.value?.push(...response.data["Items"])
        if (response.data["LastEvaluatedKey"]) {
            lastPost.value = response.data["LastEvaluatedKey"]
        } else {
            lastPost.value = null
        }
        loading.value = false
    }).catch((err) => {
        loading.value = false
        error.value = true
    })
}

</script>


<template>
    <div class="z-10 pt-24 sm:pt-48 flex-col relative animate-fade w-[80vw] sm:w-[70vw] m-auto">
        <div
            class="animate-fade tracking-wide  w-full mb-8 m-auto flex-row">
            <div class="font-light font-alt text-gray-500 text-4xl">Jack's thoughts from the command line</div>
            <div class="font-light font-alt text-gray-500 text-md">A small experiment with API Gateway and Lambda </div>
        </div>
        <div class="font-light font-alt text-gray-500 text-2xl w-full flex justify-center" v-if="loading && !posts">Loading thoughts...</div>
        <div class="font-light font-alt text-gray-500 text-2xl w-full flex justify-center" v-if="error">Something went wrong... Try again later</div>  
        <BlogPost  v-for="post in posts" :body="post.post" :id="post.postId" :timestamp="parseInt(post.added_on)" />
        <div class="w-full flex justify-center text-gray-800 font-alt" v-if="loading && posts">
            Loading more thoughts...
        </div>
        <div class="w-full flex justify-center" v-if="lastPost">
            <button 
                @click="clickHandler"
                class="w-24 mt-4 h-12 border-2 font-alt text-gray-800 border-greenish hover:border-black">
                Load More
            </button>
        </div>

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
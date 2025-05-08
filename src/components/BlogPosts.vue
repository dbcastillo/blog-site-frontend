<template>
  <div>
    <BlogPostTiles/>
  </div>
</template>

<script setup>
import {getBlogposts} from "@/services/blogpostService.js";
import {onMounted, ref} from "vue";
import BlogPostTiles from "@/components/BlogPostTiles.vue";

const blogposts = ref([]);

onMounted(async () => {
  try {
    const response = await getBlogposts();
    blogposts.value = response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    console.log("blogposts", blogposts.value);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
});
</script>

<style scoped>
</style>



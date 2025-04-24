<template>
  <div class="blog-container">
    <BlogPostOne :blogposts="blogposts"/>
  </div>
</template>

<script setup>
import { getBlogposts } from "@/services/blogpostService.js";
import { onMounted, ref } from "vue";
import BlogPostOne from "@/components/BlogPostOne.vue";

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
.blog-container {
  background-color: lightgray;
  margin: 0 auto;
  max-width: 750px;
  padding: 30px;
  border-radius: 10px;
}
</style>



<template>
  <div class="blog-container">
    <div
        v-for="post in blogposts"
        :key="post.id"
        class="blog-post"
    >
      <p class="post-date">{{ formatDate(post.createdAt) }}</p>
      <h2 class="post-title">{{ post.title }}</h2>

      <!-- First Image -->
      <img
          v-if="post.imageUrls.length > 0"
          :src="post.imageUrls[0]"
          alt="First Blog image"
          class="first-image"
      />

      <!-- Content Paragraph -->
      <p class="post-content">{{ post.content }}</p>

      <!-- Second Image -->
      <img
          v-if="post.imageUrls.length > 1"
          :src="post.imageUrls[1]"
          alt="Second Blog image"
          class="second-image"
      />
    </div>
  </div>
</template>

<script setup>
import { getBlogposts } from "@/services/blogpostService.js";
import { onMounted, ref } from "vue";

const blogposts = ref([]);

onMounted(async () => {
  try {
    const response = await getBlogposts();
    blogposts.value = response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
});

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style scoped>
.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9; /* Light background for a blog-like feel */
}

.blog-post {
  margin-bottom: 2rem;
  border: 1px solid #ddd; /* Light border for each post */
  padding: 2rem;
  border-radius: 8px;
  background-color: #fff; /* White background for posts */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-post:hover {
  transform: translateY(-5px); /* Subtle hover effect to lift the post */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* More pronounced shadow on hover */
}

.post-date {
  font-size: 1rem;
  color: #555; /* Slightly darker text for the date */
  margin-bottom: 1rem;
}

.post-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #333; /* Darker color for the title */
}

.first-image, .second-image {
  width: 100%; /* Scale to container width */
  max-width: 200px; /* Set a smaller max width */
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.post-content {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Additional style for paragraph breaks */
.post-content br {
  margin-bottom: 1.5rem;
}

</style>



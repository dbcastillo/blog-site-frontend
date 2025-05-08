<template>
  <v-sheet>
    <v-container>
      <v-row>
        <v-col
            v-for="post in blogposts"
            :key="post.id"
            cols="12"
            sm="6"
            md="4"
        >
          <div class="blog-post pa-2 handlee-regular">
            <img
                :src="post.imageUrls[0]"
                alt="post"
                class="blog-image"
            />
            <h2>{{ post.title }}</h2>
            <p>{{ formatDate(post.createdAt) }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import {getBlogposts} from "@/services/blogpostService.js";
import {onMounted, ref} from "vue";

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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style scoped>

.blog-image {
  width: 100%;
  max-width: 350px;
  height: 200px;
  object-fit: cover;
  display: block;
  margin: 20px 0;
  border-radius: 10px;
}

.blog-post {
  background-color: white;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 10px;
}
</style>



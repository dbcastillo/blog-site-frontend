<template>
  <v-sheet class="pa-4"> <!--padding all around -->
    <v-container class="mx-auto" style="max-width: 1400px;">
      <v-row class="mb-8" no-gutters>
        <v-col cols="12" md="8" sm="12" class="featured-image-wrapper">
          <img
              :src="featuredBlog[0]?.imageUrls[0]"
              alt="featured Blog"
              class="featured-image"
          />
        </v-col>
        <v-col
            cols="12"
            md="4"
            class="d-flex flex-column justify-center align-center text-center pa-6"
        >
          <div>
            <h2 class="featured-title mb-2">Featured Blog</h2>
            <p class="featured-description">
              {{ featuredBlog[0]?.content }}
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            v-for="blog in allBlogs"
            :key="blog.id"
            cols="12"
            sm="6"
            md="4"

        >
          <div class="blog-post">
            <img
                :src="blog.imageUrls[0]"
                alt="image"
                class="blog-image"
            />
            <h2>{{ blog.title }}</h2>
            <p>{{ formatDate(blog.createdAt) }}</p>
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
const allBlogs = ref([])
const featuredBlog = ref([])

onMounted(async () => {
  try {
    const response = await getBlogposts();
    blogposts.value = response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    allBlogs.value = blogposts.value.slice(1)
    featuredBlog.value = [blogposts.value[0]]
    console.log("blogposts", blogposts.value);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric",
  });
}
</script>

<style scoped>
.featured-description {
  display: -webkit-box;
  -webkit-line-clamp: 4; /* restrict to 4 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 6em; /* fallback for some browsers */
  line-height: 1.5em;
  text-align: center;
}

.featured-image-wrapper {
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  max-height: 400px;
}

.blog-image {
  width: 100%;
  max-width: 500px;
  height: 250px;
  object-fit: cover;
  display: block;
  margin: 2px 0;
  border-radius: 10px;
}

.blog-post {
  background-color: white;
  border-radius: 10px;
}
</style>



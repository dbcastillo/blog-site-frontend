<template>
  <v-sheet class="bg-orange-lighten-4">
    <v-container class="mx-auto" max-width="1400px">
      <div v-if="!blogs.length">
        <v-row class="mb-8" no-gutters>
          <v-col cols="12" md="6" sm="3">
            <v-skeleton-loader type="image" height="400px" class="rounded-lg"/>
          </v-col>
          <v-col cols="12" md="4" class="d-flex flex-column justify-center align-center text-center pa-6">
            <v-skeleton-loader type="heading, paragraph" class="w-100"/>
          </v-col>
        </v-row>

        <v-row>
          <v-col
              v-for="n in 6"
              :key="n"
              cols="12"
              sm="6"
              md="4"
          >
            <v-skeleton-loader
                type="image, heading, paragraph"
                class="rounded-lg"
                height="350px"
            />
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row class="mb-8" no-gutters>
          <v-col cols="12" md="8" sm="12" class="overflow-hidden rounded-lg">
            <v-img
                :src="blogs[0].imageUrls[0]"
                alt="featured Blog"
                height="400"
                cover
                class="rounded-lg"
                @click="routeToBlogDetails(blogs[0].id)"
                style="cursor: pointer"
            />
          </v-col>
          <v-col
              cols="12"
              md="4"
              class="d-flex flex-column justify-center align-center text-center pa-6"
          >
            <div>
              <h2 class="text-h5 mb-2">Featured Blog</h2>
              <p class="text-body-1 text-truncate-4">
                {{ blogs[0].content }}
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col
              v-for="blog in blogs.slice(1)"
              :key="blog.id"
              cols="12"
              sm="6"
              md="4"
          >
            <v-card class="rounded-lg">
              <v-img
                  :src="blog.imageUrls[0]"
                  height="250"
                  cover
                  class="rounded-t-lg"
                  @click="routeToBlogDetails(blog.id)"
                  style="cursor: pointer"
              />
              <v-card-text>
                <h2 class="text-h6">{{ blog.title }}</h2>
                <p class="text-body-2">{{ formatDate(blog.createdAt) }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-sheet>
</template>


<script setup>
import {useRouter} from 'vue-router';

const router = useRouter()

defineProps({
  blogs: Array
})

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric",
  });
}

const routeToBlogDetails = (id) => {
  router.push({name: 'BlogDetails', params: {id}});
}
</script>

<style scoped>
.text-truncate-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>



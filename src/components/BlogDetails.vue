<template>
  <v-sheet class="bg-orange-lighten-4">
    <v-container class="py-10">
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-skeleton-loader
              v-if="!blog"
              type="image, heading, paragraph"
              class="rounded mx-auto pa-4"
              max-width="700"
              width="100%"
              elevation="2"
          />

          <div v-else>
            <v-btn
                class="mb-6"
                color="primary"
                variant="outlined"
                prepend-icon="mdi-arrow-left"
                @click="$router.push({ name: 'BlogList' })"
            >
              Back to All Blogs
            </v-btn>
            <v-img
                :src="blog.imageUrls[0]"
                alt="Blog header image"
                class="mb-6 rounded"
                aspect-ratio="16/9"
                cover
            />
            <h1 class="text-h4 font-weight-bold mb-4 text-center">
              {{ blog.title }}
            </h1>
            <p class="text-subtitle-1 text-medium-emphasis text-center mb-6">
              {{ formatDate(blog.createdAt) }}
            </p>
            <v-divider class="mb-6"></v-divider>
            <div class="text-body-1" v-html="formattedContent"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useRoute} from 'vue-router'
import {onMounted} from "vue";
import {getBlogById} from "@/services/blogpostService.js";

const route = useRoute()
const blog = ref(null)

const props = defineProps({
  blog: {
    type: Object, required: true
  }
})

onMounted(async () => {
  const id = route.params.id;
  try {
    blog.value = await getBlogById(id)
  } catch (error) {
    console.error('Failed to fetch blog:', error);
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric",
  });
}

const formattedContent = computed(() => {
  if (!blog.value.content) return ''
  return ('<p>' + blog.value.content
          .replace(/\n{2,}/g, '</p><p>') // Double line breaks = new paragraph
          .replace(/\n/g, '<br>') +      // Single line breaks = <br>
      '</p>')
})

</script>

<style scoped>
::v-deep(.text-body-1 p) {
  margin-bottom: 1rem;
  line-height: 1.6;
}

::v-deep(.text-body-1 ul),
::v-deep(.text-body-1 ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

::v-deep(.text-body-1 li) {
  margin-bottom: 0.5rem;
}
</style>

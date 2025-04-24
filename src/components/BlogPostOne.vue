<template>
  <div
      v-for="post in props.blogposts"
      :key="post.id"
      class="blog-post handlee-regular"
  >
    <p>{{ formatDate(post.createdAt) }}</p>
    <h2>{{ post.title }}</h2>

    <img
        v-if="post.imageUrls.length > 0"
        :src="post.imageUrls[0]"
        class="blog-image"
    />
    <p
        class="post-content">{{ props.blogposts[2].content.split('\n\n')[0] }}</p>
    <p
        class="post-content">{{ props.blogposts[2].content.split('\n\n')[1] }}</p>


    <img
        v-if="post.imageUrls.length > 1"
        :src="post.imageUrls[1]"
        class="blog-image"
    />
    <p
        class="post-content">{{ props.blogposts[2].content.split('\n\n')[2] }}</p>
    <p
        class="post-content">{{ props.blogposts[2].content.split('\n\n')[3] }}</p>
    <img
        v-if="post.imageUrls.length > 2"
        :src="post.imageUrls[2]"
        class="blog-image"
    />
    <p
        class="post-content">{{ props.blogposts[2].content.split('\n\n')[4] }}</p>
    <img
        v-if="post.imageUrls.length > 3"
        :src="post.imageUrls[3]"
        class="blog-image"
    />
    <p
        class="post-content">{{ props.blogposts[2].content.split('\n\n')[5] }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  blogposts: Array
});

console.log("blogposts", props.blogposts[2]);

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
.blog-post {
  background-color: white;
  margin-bottom: 30px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
}
.blog-image {
  width: 100%;    /* Makes image take full width of its container */
  max-width: 700px;   /* Sets maximum width */
  height: 400px;  /* Fixed height */
  object-fit: cover;  /* Maintains aspect ratio, cropping if necessary */
  display: block;  /* Removes any extra space below the image */
  margin: 20px 0;  /* Adds vertical spacing */
}
.handlee-regular {
  font-family: "Handlee";
  font-weight: 400;
  font-style: oblique;
}
</style>
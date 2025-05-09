import {createRouter, createWebHistory} from 'vue-router';
import BlogDetails from "@/components/BlogDetails.vue";
import BlogPosts from "@/components/BlogPosts.vue";

const routes = [{path: '/', component: BlogPosts}, {
    path: '/BlogDetails', component: BlogDetails
}];

const router = createRouter({
    history: createWebHistory(), routes,
});

export default router;
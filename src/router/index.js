import {createRouter, createWebHistory} from 'vue-router';
import BlogPosts from "@/components/BlogPosts.vue";

const routes = [{
    path: '/', name: 'BlogList', component: BlogPosts
}, {
    path: '/blog/:id',
    name: 'BlogDetails',
    component: () => import('@/components/BlogDetails.vue')
}];

const router = createRouter({
    history: createWebHistory(), routes,
});

export default router;
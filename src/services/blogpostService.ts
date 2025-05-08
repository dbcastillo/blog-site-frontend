import axios from 'axios';

export const getBlogposts = () => {
    return axios.get('https://dericks-blog-backend-16795d1a517d.herokuapp.com/api/v1/blogposts')
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error('Error fetching employees:', error);
            throw error;
        });
}
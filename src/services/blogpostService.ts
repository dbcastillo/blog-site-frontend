import axios from 'axios';

export const getBlogposts = () => {
    return axios.get('https://dericksblogs.netlify.app/api/v1/blogposts')
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error('Error fetching employees:', error);
            throw error;
        });
}
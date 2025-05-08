import axios from 'axios';

export const getBlogposts = () => {
    return axios.get('https://your-heroku-app-name.herokuapp.com/api/v1/blogposts')
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error('Error fetching employees:', error);
            throw error;
        });
}
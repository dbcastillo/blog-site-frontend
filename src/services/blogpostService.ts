import axios from 'axios';

export const getBlogposts = () => {
    // return axios.get('https://dericks-blog-backend-16795d1a517d.herokuapp.com/api/v1/blogposts')
    //     .then(response => {
    //         return response.data
    //     })
    //     .catch(error => {
    //         console.error('Error fetching employees:', error);
    //         throw error;
    //     });
    return axios.get('http://localhost:8080/api/v1/blogposts')
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error('Error fetching employees:', error);
            throw error;
        });
}

export const getBlogById = (id) => {
    // return axios.get(`https://dericks-blog-backend-16795d1a517d.herokuapp.com/api/v1/blogposts/${id}`)
    //     .then(response => response.data)
    //     .catch(error => {
    //         console.error(`Error fetching blog with ID ${id}:`, error);
    //         throw error;
    //     });
    return axios.get(`http://localhost:8080/api/v1/blogposts/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error(`Error fetching blog with ID ${id}:`, error);
            throw error;
        });
};
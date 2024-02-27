import axios from "axios";

export default axios.create({
    baseUrl: `https://jsonplaceholder.typicode.com`,
    /**
        headers:{
            Authorization: 'Bearer token123,
            Content-Type:aplication/json
        }
     */
})
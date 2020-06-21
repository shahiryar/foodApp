import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 3VeK6jVGkEv2iydmMbJQVepjVhiXnqOTWVYcQtitlnUH0j5kV1OSfZW8iJtgkZYL1dMcuwLy_1AnP-qvZK7_vXaRGBOnl_GFCUktFD5DgipX0bGiAiB272pwpAPqXnYx' 
    }
});
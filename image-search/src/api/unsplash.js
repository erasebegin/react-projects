import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
            'Client-ID 08f0cd9d28aa27dc37b7622c62c652613fb50f200014296bd96a73fa303eb4bc'
    }
})
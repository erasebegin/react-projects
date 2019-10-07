import axios from 'axios';

const KEY = 'AIzaSyCQEAeHtJfthrwbeXlt1S1NcUCz_GURGeU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
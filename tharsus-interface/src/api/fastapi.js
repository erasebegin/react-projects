import axios from 'axios'

export default axios.create({
    baseURL: "https://tharsus-interview-api-v1.azurewebsites.net/data/",
    method: "get",
    headers: {
        "content-type": "application/json"
      }
})
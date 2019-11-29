import axios from "axios"

export default axios.create ({
    baseURL: "https://matchilling-tronald-dump-v1.p.rapidapi.com/",
    headers:{
        "x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com",
        "x-rapidapi-key": "4f86f3edfdmshf18247783d4906cp1eef26jsn606d81d0aed8",
        "accept": "application/hal+json"
    },
})
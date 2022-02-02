import axios from "axios";

export const key = "a0df428345ee59ef50dece3d38442a074799202f"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
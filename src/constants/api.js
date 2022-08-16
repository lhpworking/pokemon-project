import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_HOST,
})

api.interceptors.response.use((res) => {
    return res.data
})
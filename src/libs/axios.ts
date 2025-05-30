import axios from "axios";


const axiosInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API,
    headers : {
    'x-rapidapi-key': 'fa99f84d0fmshc790d2825faa5e0p193e96jsn34b0531cef93',
    'x-rapidapi-host': 'booking-com.p.rapidapi.com'
    }
})

export default axiosInstance
import axios from "axios";


const axiosInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API,
    headers : {
    'x-rapidapi-key': 'd6e41aabe5msh6cfe839bc04e30bp126b15jsnea04727e0332',
    'x-rapidapi-host': 'booking-com.p.rapidapi.com'
    }
})

export default axiosInstance
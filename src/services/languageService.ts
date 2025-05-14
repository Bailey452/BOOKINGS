import axiosInstance from "@/libs/axios";


export const getLanguages = async () => {
    const data = await axiosInstance.get("/getLanguages")
    console.log(data);
    return data
    
}
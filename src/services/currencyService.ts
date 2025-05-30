import axiosInstance from "@/libs/axios";

export const getCurrency = async () => {
    const Currency = await axiosInstance.get("/metadata/exchange-rates", {
      params: {
        currency: 'AED',
        locale: 'en-gb'
      }   
    })
    return Currency
    
}

// export const getCurrent = async () => {
//   const Current = await axiosInstance.get("/getCurrency")
//   // console.log(data);
//   return Current
    
// }
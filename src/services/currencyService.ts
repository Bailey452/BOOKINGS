import axiosInstance from "@/libs/axios";

export const getCurrency = async () => {
    const Currency = await axiosInstance.get("/getExchangeRates", {
      params : { base_currency: 'USD'}   
    })
    // console.log(data);
    return Currency
    
}







// import axiosInstance from "@/libs/axios";

// export const getCurrency = async () => {
//   try {
//     const response = await axiosInstance.get("/getExchangeRates");
//     return response.data;  // Assuming that the data you want is inside response.data
//   } catch (error) {
//     console.error("Error fetching currency data:", error);
//     throw error;  // You might want to throw the error for further handling in the component
//   }
// }

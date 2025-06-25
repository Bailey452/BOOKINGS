import axiosInstance from "@/libs/axios";

export const getFlight = async () => {
    const flight = await axiosInstance.get('/flights/search', {
        params: {
            from_code: 'ONT.AIRPORT',
            depart_date: '2025-10-14',
            page_number: '0',
            currency: 'AED',
            children_ages: '5,0',
            to_code: 'NYC.CITY',
            adults: '2',
            return_date: '2025-10-15',
            cabin_class: 'ECONOMY',
            locale: 'en-gb',
            flight_type: 'ONEWAY',
            order_by: 'BEST'
        }
    })
    return flight; 
}
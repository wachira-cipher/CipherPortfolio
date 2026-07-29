import http from "./http";



/*
========================================
CREATE SERVICE
========================================
*/

export const createService = (data) => {


    return http.post(

        "/services",

        data

    );


};







/*
========================================
GET ALL SERVICES
========================================
*/

export const getServices = (

    page = 1,

    limit = 10

) => {


    return http.get(

        `/services?page=${page}&limit=${limit}`

    );


};








/*
========================================
GET SINGLE SERVICE
========================================
*/

export const getServiceById = (id) => {


    return http.get(

        `/services/${id}`

    );


};







/*
==========================
UPDATE SERVICE
==========================
*/

export const updateService = (

    id,

    data

) => {


    return http.put(

        `/services/${id}`,

        data,

        {
            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );


};














/*
========================================
DELETE SERVICE
========================================
*/

export const deleteService = (id) => {


    return http.delete(

        `/services/${id}`

    );


};









/*
========================================
FEATURED SERVICES
========================================
*/

export const getFeaturedServices = () => {


    return http.get(

        "/services/featured"

    );


};








/*
========================================
CATEGORY SERVICES
========================================
*/

export const getServicesByCategory = (category) => {


    return http.get(

        `/services/category/${category}`

    );


};



export const deleteServiceImage = (
    id,
    image
) => {

    return http.delete(
        `/services/${id}/image`,
        {
            data: {
                image
            }
        }
    );

};
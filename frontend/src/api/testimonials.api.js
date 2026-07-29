import http from "./http";

/*
========================================
CREATE
========================================
*/

export const createTestimonial = (data) => {

    return http.post(

        "/testimonial",

        data,

        {

            headers: {

                "Content-Type":

                    "multipart/form-data"

            }

        }

    );

};

/*
========================================
GET ALL
========================================
*/

export const getTestimonials = () => {

    return http.get(

        "/testimonial"

    );

};

/*
========================================
FEATURED
========================================
*/

export const getFeaturedTestimonials = () => {

    return http.get(

        "/testimonial/featured"

    );

};

/*
========================================
GET SINGLE
========================================
*/

export const getTestimonialById = (id) => {

    return http.get(

        `/testimonial/${id}`

    );

};

/*
========================================
UPDATE
========================================
*/

export const updateTestimonial = (

    id,

    data

) => {

    return http.put(

        `/testimonial/${id}`,

        data,

        {

            headers: {

                "Content-Type":

                    "multipart/form-data"

            }

        }

    );

};

/*
========================================
DELETE
========================================
*/

export const deleteTestimonial = (id) => {

    return http.delete(

        `/testimonial/${id}`

    );

};

/*
========================================
REMOVE EXISTING IMAGE
========================================
*/

export const removeTestimonialImage = (id) => {

    return http.delete(

        `/testimonial/${id}/image`

    );

};
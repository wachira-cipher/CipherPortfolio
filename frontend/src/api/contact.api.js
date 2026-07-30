import http from "./http";



/*
========================================
CREATE
PUBLIC CONTACT FORM
========================================
*/

export const createContact = (data) => {


    return http.post(

        "/contact",

        data

    );


};






/*
========================================
GET ALL
========================================
*/

export const getContacts = () => {


    return http.get(

        "/contact"

    );


};








/*
========================================
GET SINGLE
========================================
*/


export const getContactById = (id) => {


    return http.get(

        `/contact/${id}`

    );


};








/*
========================================
UPDATE STATUS
========================================
*/


export const updateContact = (

    id,

    data

) => {


    return http.put(

        `/contact/${id}`,

        data

    );


};








/*
========================================
DELETE
========================================
*/


export const deleteContact = (id) => {


    return http.delete(

        `/contact/${id}`

    );


};
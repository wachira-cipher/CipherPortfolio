import http from "./http";



export const createConsultation = (

    data

) => {


    return http.post(

        "/consultations",

        data

    );


};
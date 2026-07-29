import http from "./http";



/*
========================================
CREATE RESUME
========================================
*/

export const createResume = (

    data

) => {


    return http.post(

        "/resume",

        data

    );


};









/*
========================================
GET RESUME
========================================
*/

export const getResume = () => {


    return http.get(

        "/resume"

    );


};









/*
========================================
UPDATE RESUME
========================================
*/

export const updateResume = (

    data

) => {


    return http.put(

        "/resume",

        data

    );


};









/*
========================================
DELETE RESUME
========================================
*/

export const deleteResume = () => {


    return http.delete(

        "/resume"

    );


};









/*
========================================
GET EDUCATION ONLY
(Optional helper)
========================================
*/

export const getEducation = async () => {


    const response =
        await getResume();


    return response.data.resume.education;


};









/*
========================================
GET EXPERIENCE ONLY
(Optional helper)
========================================
*/

export const getExperience = async () => {


    const response =
        await getResume();


    return response.data.resume.experience;


};
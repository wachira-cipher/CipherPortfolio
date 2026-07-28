import http from "./http";

/*
========================================
CREATE SKILL
========================================
*/

export const createSkill = (data) => {

    return http.post(
        "/skill",
        data
    );

};



/*
========================================
GET ALL SKILLS
========================================
*/

export const getSkills = (

    page = 1,

    limit = 10

) => {

    return http.get(

        `/skill?page=${page}&limit=${limit}`

    );

};



/*
========================================
GET SINGLE SKILL
========================================
*/

export const getSkillById = (id) => {

    return http.get(

        `/skill/${id}`

    );

};



/*
========================================
UPDATE SKILL
========================================
*/

export const updateSkill = (

    id,

    data

) => {

    return http.put(

        `/skill/${id}`,

        data

    );

};



/*
========================================
DELETE SKILL
========================================
*/

export const deleteSkill = (id) => {

    return http.delete(

        `/skill/${id}`

    );

};



/*
========================================
GET FEATURED SKILLS
========================================
*/

export const getFeaturedSkills = () => {

    return http.get(

        "/skill/featured"

    );

};



/*
========================================
GET SKILLS BY CATEGORY
========================================
*/

export const getSkillsByCategory = (category) => {

    return http.get(

        `/skill/category/${category}`

    );

};
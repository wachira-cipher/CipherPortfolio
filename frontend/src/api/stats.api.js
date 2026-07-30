import http from "./http";





/*
========================================
GET ALL STATS
========================================
*/

export const getStats = () => {

    return http.get(
        "/stats"
    );

};








// GET SINGLE STAT
export const getStatById = (id) => {

    return http.get(
        `/stats/${id}`
    );

};








/*
========================================
CREATE STAT
========================================
*/

export const createStat = (data) => {

    return http.post(
        "/stats",
        data
    );

};








/*
========================================
UPDATE STAT
========================================
*/

export const updateStat = (id, data) => {

    return http.put(
        `/stats/${id}`,
        data
    );

};








/*
========================================
DELETE STAT
========================================
*/

export const deleteStat = (id) => {

    return http.delete(
        `/stats/${id}`
    );

};
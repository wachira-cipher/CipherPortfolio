import http from "./http";





/*
==========================
CREATE PORTFOLIO
==========================
*/

export const createPortfolio = (formData) => {


    return http.post(

        "/portfolio",

        formData,

        {
            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );


};









/*
==========================
GET ALL PORTFOLIOS
==========================
*/

export const getPortfolios = (
    page = 1,
    limit = 6
) => {


    return http.get(
        `/portfolio?page=${page}&limit=${limit}`
    );


};









/*
==========================
GET SINGLE PORTFOLIO
==========================
*/

export const getPortfolioById = (id) => {


    return http.get(

        `/portfolio/${id}`

    );


};









/*
==========================
UPDATE PORTFOLIO
==========================
*/

export const updatePortfolio = (

    id,

    formData

) => {


    return http.put(

        `/portfolio/${id}`,

        formData,

        {
            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );


};









/*
==========================
DELETE PORTFOLIO
==========================
*/

export const deletePortfolio = (id) => {


    return http.delete(

        `/portfolio/${id}`

    );


};









/*
==========================
FEATURED PORTFOLIOS
==========================
*/

export const getFeaturedPortfolios = () => {


    return http.get(

        "/portfolio/featured"

    );


};




/*
========================================
DELETE SINGLE PORTFOLIO IMAGE
========================================
*/

export const deletePortfolioImage = (portfolioId, image) => {
    return http.delete(
        `/portfolio/${portfolioId}/image`,
        {
            data: {
                image
            }
        }
    );
};
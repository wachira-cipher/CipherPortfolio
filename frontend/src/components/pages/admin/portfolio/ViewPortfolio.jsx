import React, {
    useEffect,
    useState
} from "react";


import {
    Link,
    useParams
} from "react-router-dom";


import {
    toast
} from "react-toastify";


// API

import {
    getPortfolioById
} from "../../../../api/portfolio.api";



// Components

import PortfolioGallery from "./components/PortfolioGallery";
import PortfolioInformation from "./components/PortfolioInformation";
import PortfolioDescription from "./components/PortfolioDescription";
import PortfolioSpecifications from "./components/PortfolioSpecifications";
import PortfolioReviews from "./components/PortfolioReviews";






const ViewPortfolio = () => {



    const {
        id
    } = useParams();




    const [portfolio, setPortfolio] = useState(null);



    const [loading, setLoading] = useState(true);







    /*
    ==========================
        FETCH PORTFOLIO
    ==========================
    */


    const fetchPortfolio = async () => {


        try {


            setLoading(true);



            const response = await getPortfolioById(id);



            setPortfolio(
                response.data.portfolio
            );



        }
        catch (error) {


            console.error(error);


            toast.error(
                "Failed loading portfolio"
            );


        }
        finally {


            setLoading(false);


        }


    };







    useEffect(() => {


        if (id) {

            fetchPortfolio();

        }


    }, [id]);











    if (loading) {


        return (

            <div className="text-center p-5">

                Loading portfolio...

            </div>

        );


    }








    if (!portfolio) {


        return (

            <div className="text-center p-5">


                Portfolio not found


            </div>

        );


    }









    return (


        <>


            <div className="page-content">


                <div className="container-fluid">







                    {/* PAGE TITLE */}


                    <div className="row">


                        <div className="col-12">


                            <div className="page-title-box d-flex align-items-center justify-content-between">



                                <h4 className="mb-0">

                                    Portfolio Detail

                                </h4>







                                <div className="page-title-right">


                                    <ol className="breadcrumb m-0">


                                        <li className="breadcrumb-item">


                                            <Link to="/admin/portfolio">

                                                Portfolio

                                            </Link>


                                        </li>




                                        <li className="breadcrumb-item active">


                                            Details


                                        </li>



                                    </ol>


                                </div>




                            </div>


                        </div>


                    </div>














                    <div className="row">


                        <div className="col-lg-12">


                            <div className="card">


                                <div className="card-body">







                                    <div className="row">








                                        {/* GALLERY */}


                                        <div className="col-xl-5">


                                            <div className="product-detail">


                                                <PortfolioGallery

                                                    portfolio={
                                                        portfolio
                                                    }

                                                />


                                            </div>


                                        </div>














                                        {/* INFORMATION */}


                                        <div className="col-xl-7">


                                            <div className="mt-4 mt-xl-3 ps-xl-4">


                                                <PortfolioInformation

                                                    portfolio={
                                                        portfolio
                                                    }

                                                />


                                            </div>


                                        </div>





                                    </div>















                                    {/* DESCRIPTION */}



                                    <PortfolioDescription

                                        portfolio={
                                            portfolio
                                        }

                                    />












                                    {/* SPECIFICATIONS 



                                    <PortfolioSpecifications

                                        portfolio={
                                            portfolio
                                        }

                                    />
*/}











                                    {/* REVIEWS 



                                    <PortfolioReviews

                                        portfolio={
                                            portfolio
                                        }

                                    />

*/}







                                </div>


                            </div>


                        </div>


                    </div>







                </div>


            </div>


        </>


    );


};





export default ViewPortfolio;
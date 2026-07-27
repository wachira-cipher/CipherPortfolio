import React from "react";


const PortfolioReviews = ({
    portfolio
}) => {


    const reviews = portfolio?.reviews || [

        {
            _id: 1,
            name: "Samuel",
            date: "12 July, 2026",
            rating: 4.1,
            comment:
                "Excellent project delivery with great communication and quality implementation."
        },

        {
            _id: 2,
            name: "Joseph",
            date: "06 July, 2026",
            rating: 4.0,
            comment:
                "The solution was reliable, scalable and met the expected requirements."
        },

        {
            _id: 3,
            name: "Paul",
            date: "26 June, 2026",
            rating: 4.2,
            comment:
                "Outstanding work with attention to detail and professional execution."
        }

    ];






    return (


        <div className="mt-4">


            <h5 className="font-size-14 mb-3">
                Reviews :
            </h5>





            <div className="text-muted mb-3">


                <span className="badge bg-success font-size-14 me-1">

                    <i className="mdi mdi-star"></i>

                    {
                        portfolio?.rating || "4.2"
                    }

                </span>


                {
                    reviews.length
                }
                {" "}
                Reviews


            </div>









            <div className="border p-4 rounded">





                {
                    reviews.map(
                        (review, index) => (


                            <div

                                key={review._id || index}

                                className={
                                    index === reviews.length - 1
                                        ?
                                        ""
                                        :
                                        "border-bottom pb-3 mb-3"
                                }

                            >



                                <p className="float-sm-end text-muted font-size-13">

                                    {
                                        review.date
                                    }

                                </p>





                                <div className="badge bg-success mb-2">


                                    <i className="mdi mdi-star"></i>

                                    {" "}

                                    {
                                        review.rating
                                    }


                                </div>





                                <p className="text-muted mb-4">

                                    {
                                        review.comment
                                    }

                                </p>







                                <div className="d-flex align-items-start">



                                    <div className="flex-grow-1">


                                        <h5 className="font-size-15 mb-0">

                                            {
                                                review.name
                                            }

                                        </h5>


                                    </div>







                                    <div className="flex-shrink-0">


                                        <ul className="list-inline product-review-link mb-0">


                                            <li className="list-inline-item">

                                                <a href="#">

                                                    <i className="uil uil-thumbs-up"></i>

                                                </a>

                                            </li>





                                            <li className="list-inline-item">

                                                <a href="#">

                                                    <i className="uil uil-comment-alt-message"></i>

                                                </a>

                                            </li>



                                        </ul>


                                    </div>




                                </div>




                            </div>


                        )

                    )
                }





            </div>


        </div>


    );


};


export default PortfolioReviews;
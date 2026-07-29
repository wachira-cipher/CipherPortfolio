import React, {
    useState
} from "react";



const TestimonialFilters = ({
    rating,
    setRating
}) => {



    const [openFilters, setOpenFilters] = useState({

        rating: true

    });








    const toggleFilter = (name) => {


        setOpenFilters(prev => ({

            ...prev,

            [name]: !prev[name]

        }));


    };








    const ratings = [

        {
            label: "All Ratings",
            value: ""
        },

        {
            label: "★★★★★ 5 Stars",
            value: 5
        },

        {
            label: "★★★★☆ 4 Stars",
            value: 4
        },

        {
            label: "★★★☆☆ 3 Stars",
            value: 3
        },

        {
            label: "★★☆☆☆ 2 Stars",
            value: 2
        },

        {
            label: "★☆☆☆☆ 1 Star",
            value: 1
        }

    ];









    return (


        <div className="col-xl-3 col-lg-4">


            <div className="card">





                <div className="card-header bg-transparent border-bottom">


                    <h5 className="mb-0">

                        Filters

                    </h5>


                </div>









                {/* RATING FILTER */}


                <div className="p-4">


                    <h5 className="font-size-14 mb-3">

                        Rating

                    </h5>





                    <div className="custom-accordion">



                        <button

                            type="button"

                            className="text-body fw-semibold pb-2 d-block border-0 bg-transparent w-100 text-start"

                            onClick={() =>
                                toggleFilter("rating")
                            }

                        >



                            <i

                                className={`bi ${openFilters.rating

                                        ?

                                        "bi-chevron-up"

                                        :

                                        "bi-chevron-down"

                                    } accor-down-icon text-primary me-1`}

                            ></i>



                            Testimonial Rating



                        </button>









                        <div

                            className={

                                openFilters.rating

                                    ?

                                    "collapse show"

                                    :

                                    "collapse"

                            }

                        >



                            <div className="mt-3">



                                {
                                    ratings.map(item => (


                                        <div

                                            className="form-check mt-2"

                                            key={item.label}

                                        >



                                            <input

                                                type="radio"

                                                className="form-check-input"

                                                id={`rating-${item.value}`}

                                                name="rating"

                                                checked={
                                                    rating === item.value
                                                }

                                                onChange={() =>
                                                    setRating(
                                                        item.value
                                                    )
                                                }

                                            />





                                            <label

                                                className="form-check-label"

                                                htmlFor={`rating-${item.value}`}

                                            >

                                                {item.label}


                                            </label>



                                        </div>



                                    ))
                                }



                            </div>



                        </div>




                    </div>




                </div>







            </div>



        </div>


    );


};



export default TestimonialFilters;
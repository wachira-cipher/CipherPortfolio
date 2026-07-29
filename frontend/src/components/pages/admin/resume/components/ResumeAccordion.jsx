import React from "react";


const ResumeAccordion = ({
    children,
    id,
    number,
    title,
    description,
    open,
    onToggle
}) => {


    return (

        <div className="card">


            <button

                type="button"

                className={`text-dark border-0 bg-transparent w-100 text-start ${open ? "" : "collapsed"
                    }`}

                onClick={() => onToggle(id)}

                aria-expanded={open}

                aria-controls={id}

            >


                <div className="p-4">


                    <div className="d-flex align-items-center">



                        {/* NUMBER */}

                        <div className="flex-shrink-0 me-3">


                            <div className="avatar-xs">


                                <div className="avatar-title rounded-circle bg-primary-subtle text-primary">


                                    {number}


                                </div>


                            </div>


                        </div>







                        {/* TITLE */}

                        <div className="flex-grow-1 overflow-hidden">


                            <h5 className="font-size-16 mb-1">


                                {title}


                            </h5>





                            <p className="text-muted text-truncate mb-0">


                                {description}


                            </p>


                        </div>








                        {/* ICON */}


                        <div className="flex-shrink-0">


                            {

                                open

                                    ?

                                    <i className="bi bi-chevron-up font-size-16"></i>

                                    :

                                    <i className="bi bi-chevron-right font-size-16"></i>

                            }


                        </div>





                    </div>


                </div>




            </button>









            {/* CONTENT */}


            <div

                id={id}

                className={`collapse ${open ? "show" : ""}`}

            >


                <div className="p-4 border-top">


                    {children}


                </div>


            </div>





        </div>

    );


};


export default ResumeAccordion;

const TopSellingProducts = () => {


    const products = [
        {
            name: "Desktops",
            color: "primary",
            percentage: "52"
        },
        {
            name: "iPhones",
            color: "info",
            percentage: "45"
        },
        {
            name: "Android",
            color: "success",
            percentage: "48"
        },
        {
            name: "Tablets",
            color: "warning",
            percentage: "78"
        },
        {
            name: "Cables",
            color: "purple",
            percentage: "63"
        }
    ];



    return (

        <div className="card">


            <div className="card-body">


                <div className="float-end">


                    <div className="dropdown">


                        <a
                            className="dropdown-toggle text-reset"
                            href="#"
                            data-bs-toggle="dropdown"
                        >

                            <span className="fw-semibold">
                                Sort By:
                            </span>


                            <span className="text-muted">
                                Yearly
                                <i className="mdi mdi-chevron-down ms-1"></i>
                            </span>


                        </a>



                        <div className="dropdown-menu dropdown-menu-end">


                            <a className="dropdown-item" href="#">
                                Monthly
                            </a>


                            <a className="dropdown-item" href="#">
                                Yearly
                            </a>


                            <a className="dropdown-item" href="#">
                                Weekly
                            </a>


                        </div>


                    </div>


                </div>





                <h4 className="card-title mb-4">
                    Top Selling Products
                </h4>





                {
                    products.map((product, index) => (


                        <div
                            className="row align-items-center g-0 mt-3"
                            key={index}
                        >


                            <div className="col-sm-3">


                                <p className="text-truncate mt-1 mb-0">


                                    <i
                                        className={`mdi mdi-circle-medium text-${product.color} me-2`}
                                    ></i>


                                    {product.name}


                                </p>


                            </div>





                            <div className="col-sm-9">


                                <div
                                    className="progress mt-1"
                                    style={{ height: "6px" }}
                                >


                                    <div
                                        className={`progress-bar bg-${product.color}`}
                                        role="progressbar"
                                        style={{
                                            width: `${product.percentage}%`
                                        }}
                                        aria-valuenow={product.percentage}
                                        aria-valuemin="0"
                                        aria-valuemax={product.percentage}
                                    >

                                    </div>


                                </div>


                            </div>


                        </div>


                    ))
                }


            </div>


        </div>

    );

};


export default TopSellingProducts;
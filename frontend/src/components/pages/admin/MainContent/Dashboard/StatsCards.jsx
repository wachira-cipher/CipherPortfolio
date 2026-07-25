import React from "react";


const StatsCards = () => {


    const cards = [
        {
            id: "total-revenue-chart",
            color: '["--bs-primary"]',
            value: "$34,152",
            title: "Total Revenue",
            percentage: "2.65%",
            trend: "up"
        },
        {
            id: "orders-chart",
            color: '["--bs-success"]',
            value: "5,643",
            title: "Orders",
            percentage: "0.82%",
            trend: "down"
        },
        {
            id: "customers-chart",
            color: '["--bs-primary"]',
            value: "45,254",
            title: "Customers",
            percentage: "6.24%",
            trend: "down"
        },
        {
            id: "growth-chart",
            color: '["--bs-warning"]',
            value: "+12.58%",
            title: "Growth",
            percentage: "10.51%",
            trend: "up"
        }
    ];



    return (

        <div className="row">


            {cards.map((card, index) => (


                <div
                    className="col-md-6 col-xl-3"
                    key={index}
                >


                    <div className="card">


                        <div className="card-body">


                            <div className="float-end mt-2">

                                <div
                                    id={card.id}
                                    data-colors={card.color}
                                ></div>

                            </div>



                            <div>


                                <h4 className="mb-1 mt-1">

                                    {
                                        card.id === "total-revenue-chart" &&
                                        "$"
                                    }


                                    {
                                        card.id === "growth-chart" &&
                                        "+"
                                    }


                                    <span data-plugin="counterup">

                                        {
                                            card.value.replace(
                                                "$",
                                                ""
                                            ).replace(
                                                "+",
                                                ""
                                            )
                                        }

                                    </span>


                                    {
                                        card.id === "growth-chart" &&
                                        "%"
                                    }

                                </h4>


                                <p className="text-muted mb-0">

                                    {card.title}

                                </p>


                            </div>




                            <p className="text-muted mt-3 mb-0">


                                <span
                                    className={
                                        card.trend === "up"
                                            ?
                                            "text-success me-1"
                                            :
                                            "text-danger me-1"
                                    }
                                >

                                    <i
                                        className={
                                            card.trend === "up"
                                                ?
                                                "mdi mdi-arrow-up-bold me-1"
                                                :
                                                "mdi mdi-arrow-down-bold me-1"
                                        }
                                    ></i>


                                    {card.percentage}


                                </span>


                                since last week


                            </p>



                        </div>


                    </div>


                </div>


            ))}



        </div>

    );

};


export default StatsCards;
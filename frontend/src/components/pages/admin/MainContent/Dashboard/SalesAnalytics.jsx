import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "apexcharts/dist/apexcharts.css";


const SalesAnalytics = () => {


    const [chartReady, setChartReady] = useState(false);
    const [chartError, setChartError] = useState(null);



    useEffect(() => {

        try {

            setChartReady(true);

        } catch (error) {

            console.error(
                "Sales Analytics Chart Error:",
                error
            );

            setChartError(error.message);

        }


    }, []);





    const options = {


        chart: {

            id: "sales-analytics",

            type: "area",

            height: 320,

            toolbar: {

                show: false

            },


            animations: {

                enabled: true

            }

        },



        stroke: {

            curve: "smooth",

            width: 2

        },



        fill: {

            opacity: 0.3

        },



        dataLabels: {

            enabled: false

        },



        colors: [

            "#5156be",

            "#dfe2e6",

            "#f1b44c"

        ],



        xaxis: {


            categories: [

                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"

            ]


        },



        grid: {

            borderColor: "#f1f1f1"

        },



        tooltip: {

            shared: true,

            intersect: false

        }



    };







    const series = [


        {

            name: "Income",

            data: [

                3200,
                4100,
                3500,
                5200,
                4800,
                6200,
                7200,
                6800,
                7900,
                8200,
                9100,
                9800

            ]

        },



        {


            name: "Sales",

            data: [

                120,
                150,
                130,
                180,
                200,
                230,
                250,
                280,
                300,
                320,
                350,
                380

            ]


        },



        {


            name: "Growth",

            data: [

                20,
                30,
                25,
                40,
                35,
                50,
                55,
                60,
                70,
                75,
                80,
                90

            ]


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
                            id="dropdownMenuButton5"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >


                            <span className="fw-semibold">
                                Sort By:
                            </span>



                            <span className="text-muted">

                                Yearly

                                <i className="mdi mdi-chevron-down ms-1"></i>

                            </span>


                        </a>




                        <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuButton5"
                        >


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

                    Sales Analytics

                </h4>







                <div className="mt-1">


                    <ul className="list-inline main-chart mb-0">



                        <li className="list-inline-item chart-border-left me-0 border-0">


                            <h3 className="text-primary">

                                $

                                <span data-plugin="counterup">

                                    2,371

                                </span>


                                <span className="text-muted d-inline-block font-size-15 ms-3">

                                    Income

                                </span>


                            </h3>


                        </li>





                        <li className="list-inline-item chart-border-left me-0">


                            <h3>


                                <span data-plugin="counterup">

                                    258

                                </span>


                                <span className="text-muted d-inline-block font-size-15 ms-3">

                                    Sales

                                </span>


                            </h3>


                        </li>






                        <li className="list-inline-item chart-border-left me-0">


                            <h3>


                                <span data-plugin="counterup">

                                    3.6

                                </span>

                                %


                                <span className="text-muted d-inline-block font-size-15 ms-3">

                                    Conversion Ratio

                                </span>


                            </h3>


                        </li>



                    </ul>


                </div>









                <div className="mt-3">


                    <div

                        id="sales-analytics-chart"

                        className="apex-charts"

                        dir="ltr"

                        style={{
                            minHeight: "320px"
                        }}

                    >



                        {
                            chartError ?


                                (

                                    <div className="alert alert-danger">

                                        Unable to load sales chart:

                                        <br />

                                        {chartError}

                                    </div>


                                )

                                :

                                chartReady &&


                                (

                                    <Chart

                                        key="sales-chart"

                                        options={options}

                                        series={series}

                                        type="area"

                                        height={320}

                                    />

                                )


                        }




                    </div>


                </div>






            </div>


        </div>



    );




};



export default SalesAnalytics;
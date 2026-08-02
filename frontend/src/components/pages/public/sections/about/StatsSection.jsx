import React, {
    useEffect,
    useState
} from "react";


import {
    toast
} from "react-toastify";


import {
    getStats
} from "../../../../../api/stats.api";







export default function StatsSection() {



    const [stats, setStats] = useState([]);


    const [loading, setLoading] = useState(true);









    /*
    ==========================
        FETCH STATS
    ==========================
    */


    useEffect(() => {


        const fetchStats = async () => {


            try {


                const response = await getStats();



                setStats(

                    response.data.stats || []

                );



            }

            catch (error) {


                console.error(error);



                toast.error(
                    "Failed loading stats"
                );


            }

            finally {


                setLoading(false);


            }


        };



        fetchStats();



    }, []);












    return (


        <section
            id="stats"
            className="stats section dark-background"
        >





            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >



                <div className="row align-items-center">






                    {/* AVATARS */}


                    <div
                        className="col-lg-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >


                        <div className="avatars d-flex align-items-center">



                            <img
                                src="/assets/portfolio/img/person/person-m-2.webp"
                                alt="Avatar 1"
                                className="rounded-circle"
                                loading="lazy"
                            />



                            <img
                                src="/assets/portfolio/img/person/person-m-3.webp"
                                alt="Avatar 2"
                                className="rounded-circle"
                                loading="lazy"
                            />



                            <img
                                src="/assets/portfolio/img/person/person-f-5.webp"
                                alt="Avatar 3"
                                className="rounded-circle"
                                loading="lazy"
                            />



                            <img
                                src="/assets/portfolio/img/person/person-m-5.webp"
                                alt="Avatar 4"
                                className="rounded-circle"
                                loading="lazy"
                            />



                        </div>



                    </div>









                    {/* COUNTERS */}


                    <div className="col-lg-8">


                        <div className="row counters">






                            {

                                loading


                                    ?


                                    (

                                        <div className="text-center">

                                            Loading stats...

                                        </div>

                                    )


                                    :


                                    stats.length === 0


                                        ?


                                        (

                                            <div className="text-center">

                                                No statistics available

                                            </div>


                                        )


                                        :



                                        stats.map(

                                            (stat, index) => (


                                                <div

                                                    key={stat._id}

                                                    className="col-md-4"

                                                    data-aos="fade-up"

                                                    data-aos-delay={
                                                        (index + 3) * 100
                                                    }

                                                >




                                                    <h2>


                                                        <span

                                                            data-purecounter-start="0"

                                                            data-purecounter-end={
                                                                Number(
                                                                    stat.value
                                                                )
                                                            }

                                                            data-purecounter-duration="1"

                                                            className="purecounter"

                                                        >

                                                            {
                                                                stat.value
                                                            }


                                                        </span>


                                                        {
                                                            stat.value.includes("+")
                                                                ?
                                                                ""
                                                                :
                                                                ""
                                                        }


                                                    </h2>







                                                    <p>

                                                        {
                                                            stat.label
                                                        }

                                                    </p>






                                                </div>



                                            )

                                        )


                            }







                        </div>


                    </div>







                </div>



            </div>





        </section>


    );


}
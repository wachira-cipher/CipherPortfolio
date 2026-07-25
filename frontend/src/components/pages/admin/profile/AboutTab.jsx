import React from "react";


const AboutTab = () => {


    return (

        <div>

            {/* Experience */}

            <div>

                <h5 className="font-size-16 mb-4">
                    Experience
                </h5>



                <ul className="activity-feed mb-0 ps-2">


                    <li className="feed-item">

                        <div className="feed-item-list">

                            <p className="text-muted mb-1">
                                2019 - 2020
                            </p>


                            <h5 className="font-size-16">
                                UI/UX Designer
                            </h5>


                            <p>
                                Abc Company
                            </p>


                            <p className="text-muted">

                                To achieve this, it would be necessary
                                to have uniform grammar, pronunciation
                                and more common words. If several
                                languages coalesce, the grammar of the
                                resulting language is more simple and
                                regular than that of the individual.

                            </p>


                        </div>

                    </li>




                    <li className="feed-item">

                        <div className="feed-item-list">


                            <p className="text-muted mb-1">
                                2017 - 2019
                            </p>



                            <h5 className="font-size-16">
                                Graphic Designer
                            </h5>



                            <p>
                                xyz Company
                            </p>



                            <p className="text-muted">

                                It will be as simple as occidental
                                in fact, it will be Occidental.
                                To an English person, it will seem
                                like simplified English, as a skeptical
                                Cambridge friend of mine told me what
                                Occidental.

                            </p>


                        </div>

                    </li>


                </ul>


            </div>





            {/* Projects */}


            <div className="mt-4">


                <h5 className="font-size-16 mb-4">
                    Projects
                </h5>



                <div className="table-responsive">


                    <table className="table table-nowrap table-hover mb-0">


                        <thead>

                            <tr>

                                <th scope="col">
                                    #
                                </th>

                                <th scope="col">
                                    Projects
                                </th>


                                <th scope="col">
                                    Date
                                </th>


                                <th scope="col">
                                    Status
                                </th>


                                <th
                                    scope="col"
                                    style={{ width: "120px" }}
                                >
                                    Action
                                </th>


                            </tr>


                        </thead>





                        <tbody>


                            <ProjectRow
                                id="01"
                                name="Brand Logo Design"
                                date="18 Jun, 2020"
                                status="Open"
                                color="primary"
                            />



                            <ProjectRow
                                id="02"
                                name="Minible Admin"
                                date="06 Jun, 2020"
                                status="Open"
                                color="primary"
                            />



                            <ProjectRow
                                id="03"
                                name="Chat app Design"
                                date="28 May, 2020"
                                status="Complete"
                                color="success"
                            />



                            <ProjectRow
                                id="04"
                                name="Minible Landing"
                                date="13 May, 2020"
                                status="Complete"
                                color="success"
                            />



                            <ProjectRow
                                id="05"
                                name="Authentication Pages"
                                date="06 May, 2020"
                                status="Complete"
                                color="success"
                            />



                        </tbody>



                    </table>


                </div>


            </div>



        </div>

    );

};





const ProjectRow = ({
    id,
    name,
    date,
    status,
    color
}) => {


    return (

        <tr>


            <th scope="row">
                {id}
            </th>



            <td>

                <a
                    href="#"
                    className="text-reset"
                >
                    {name}
                </a>

            </td>



            <td>

                {date}

            </td>




            <td>

                <span
                    className={`badge bg-${color}-subtle text-${color} font-size-12`}
                >

                    {status}

                </span>


            </td>





            <td>


                <div className="dropdown">


                    <button
                        className="btn btn-link text-muted dropdown-toggle font-size-18 px-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >

                        <i className="uil uil-ellipsis-v"></i>

                    </button>





                    <div className="dropdown-menu dropdown-menu-end">


                        <a
                            className="dropdown-item"
                            href="#"
                        >
                            Action
                        </a>



                        <a
                            className="dropdown-item"
                            href="#"
                        >
                            Another action
                        </a>



                        <a
                            className="dropdown-item"
                            href="#"
                        >
                            Something else here
                        </a>


                    </div>


                </div>


            </td>



        </tr>

    );

};



export default AboutTab;
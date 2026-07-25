import React from "react";


const TasksTab = () => {


    return (

        <div>


            {/* Active Tasks */}

            <h5 className="font-size-16 mb-3">
                Active
            </h5>



            <div className="table-responsive">


                <table className="table table-nowrap table-centered">


                    <tbody>


                        <TaskRow
                            id="tasks-activeCheck2"
                            title="Ecommerce Product Detail"
                            date="27 May, 2020"
                            status="Active"
                            color="primary"
                        />



                        <TaskRow
                            id="tasks-activeCheck1"
                            title="Ecommerce Product"
                            date="26 May, 2020"
                            status="Active"
                            color="primary"
                        />


                    </tbody>


                </table>


            </div>






            {/* Upcoming Tasks */}


            <h5 className="font-size-16 my-3">
                Upcoming
            </h5>



            <div className="table-responsive">


                <table className="table table-nowrap table-centered">


                    <tbody>



                        <TaskRow
                            id="tasks-upcomingCheck3"
                            title="Chat app Page"
                            date="-"
                            status="Waiting"
                            color="secondary"
                        />



                        <TaskRow
                            id="tasks-upcomingCheck2"
                            title="Email Pages"
                            date="04 June, 2020"
                            status="Approved"
                            color="primary"
                        />



                        <TaskRow
                            id="tasks-upcomingCheck1"
                            title="Contacts Profile Page"
                            date="-"
                            status="Waiting"
                            color="secondary"
                        />



                    </tbody>


                </table>


            </div>








            {/* Completed Tasks */}


            <h5 className="font-size-16 my-3">
                Complete
            </h5>




            <div className="table-responsive">


                <table className="table table-nowrap table-centered">


                    <tbody>



                        <TaskRow
                            id="tasks-completeCheck3"
                            title="UI Elements"
                            date="27 May, 2020"
                            status="Complete"
                            color="success"
                        />



                        <TaskRow
                            id="tasks-completeCheck2"
                            title="Authentication Pages"
                            date="27 May, 2020"
                            status="Complete"
                            color="success"
                        />



                        <TaskRow
                            id="tasks-completeCheck1"
                            title="Admin Layout"
                            date="26 May, 2020"
                            status="Complete"
                            color="success"
                        />



                    </tbody>


                </table>


            </div>



        </div>

    );

};








const TaskRow = ({
    id,
    title,
    date,
    status,
    color
}) => {


    return (

        <tr>


            <td
                style={{ width: "60px" }}
            >

                <div className="form-check font-size-16 text-center">


                    <input
                        type="checkbox"
                        className="form-check-input"
                        id={id}
                    />


                    <label
                        className="form-check-label"
                        htmlFor={id}
                    >
                    </label>


                </div>


            </td>





            <td>

                <a
                    href="#"
                    className="fw-bold text-reset"
                >

                    {title}

                </a>


            </td>






            <td>

                {date}

            </td>





            <td
                style={{ width: "160px" }}
            >


                <span
                    className={`badge bg-${color}-subtle text-${color} font-size-12`}
                >

                    {status}

                </span>


            </td>




        </tr>

    );

};



export default TasksTab;
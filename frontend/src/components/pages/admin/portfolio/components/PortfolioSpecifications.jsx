import React from "react";


const PortfolioSpecifications = ({
    portfolio
}) => {


    return (


        <div className="tab-pane fade show active" id="specifi" role="tabpanel">


            <div className="table-responsive">


                <table className="table table-nowrap mb-0">


                    <tbody>


                        <tr>

                            <th scope="row" style={{ width: "20%" }}>
                                Category
                            </th>

                            <td>
                                {portfolio?.category || "Web Development"}
                            </td>

                        </tr>





                        <tr>

                            <th scope="row">
                                Client
                            </th>

                            <td>
                                {portfolio?.client || "N/A"}
                            </td>

                        </tr>





                        <tr>

                            <th scope="row">
                                Technologies
                            </th>

                            <td>
                                {
                                    portfolio?.technologies?.join(", ")
                                    ||
                                    "React, Node.js, MongoDB"
                                }
                            </td>

                        </tr>





                        <tr>

                            <th scope="row">
                                Status
                            </th>

                            <td>

                                {
                                    portfolio?.status
                                        ?
                                        "Active"
                                        :
                                        "Inactive"
                                }

                            </td>

                        </tr>





                        <tr>

                            <th scope="row">
                                Completion Date
                            </th>

                            <td>
                                {
                                    portfolio?.completedAt
                                    ||
                                    "N/A"
                                }
                            </td>

                        </tr>





                    </tbody>


                </table>


            </div>


        </div>


    );

};


export default PortfolioSpecifications;
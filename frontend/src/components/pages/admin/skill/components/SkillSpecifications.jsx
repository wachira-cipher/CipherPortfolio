import React from "react";


const SkillSpecifications = ({
    skill
}) => {


    return (


        <div
            className="tab-pane fade show active"
            id="specifi"
            role="tabpanel"
        >


            <div className="table-responsive">


                <table className="table table-nowrap mb-0">


                    <tbody>



                        {/* CATEGORY */}


                        <tr>


                            <th
                                scope="row"
                                style={{
                                    width: "20%"
                                }}
                            >

                                Category

                            </th>


                            <td>

                                {
                                    skill?.category
                                    ||
                                    "N/A"
                                }

                            </td>


                        </tr>









                        {/* TECHNOLOGY */}


                        <tr>


                            <th scope="row">


                                Technology


                            </th>


                            <td>


                                {
                                    skill?.technology
                                    ||
                                    "N/A"
                                }


                            </td>


                        </tr>









                        {/* LEVEL */}


                        <tr>


                            <th scope="row">


                                Skill Level


                            </th>


                            <td>


                                {
                                    skill?.level
                                    ||
                                    "N/A"
                                }


                            </td>


                        </tr>









                        {/* PROFICIENCY */}


                        <tr>


                            <th scope="row">


                                Proficiency


                            </th>


                            <td>


                                {
                                    skill?.percentage !== undefined

                                        ?

                                        `${skill.percentage}%`

                                        :

                                        "N/A"
                                }


                            </td>


                        </tr>









                        {/* EXPERIENCE */}


                        <tr>


                            <th scope="row">


                                Experience


                            </th>


                            <td>


                                {
                                    skill?.yearsOfExperience !== undefined

                                        ?

                                        `${skill.yearsOfExperience} Years`

                                        :

                                        "N/A"
                                }


                            </td>


                        </tr>









                        {/* CERTIFICATION */}


                        <tr>


                            <th scope="row">


                                Certification


                            </th>


                            <td>


                                {
                                    skill?.certification
                                    ||
                                    "N/A"
                                }


                            </td>


                        </tr>









                        {/* STATUS */}


                        <tr>


                            <th scope="row">


                                Status


                            </th>


                            <td>


                                {
                                    skill?.status

                                        ?

                                        "Active"

                                        :

                                        "Inactive"
                                }


                            </td>


                        </tr>









                        {/* FEATURED */}


                        <tr>


                            <th scope="row">


                                Featured


                            </th>


                            <td>


                                {
                                    skill?.isFeatured

                                        ?

                                        "Yes"

                                        :

                                        "No"
                                }


                            </td>


                        </tr>









                        {/* DISPLAY ORDER */}


                        <tr>


                            <th scope="row">


                                Display Order


                            </th>


                            <td>


                                {
                                    skill?.displayOrder
                                    ??
                                    0
                                }


                            </td>


                        </tr>









                    </tbody>


                </table>


            </div>


        </div>


    );


};


export default SkillSpecifications;
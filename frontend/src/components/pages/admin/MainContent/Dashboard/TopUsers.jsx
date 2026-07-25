const TopUsers = () => {


    const users = [

        {
            image: "avatar-4.jpg",
            name: "Glenn Holden",
            location: "Nevada",
            status: "Cancel",
            statusClass: "danger",
            amount: "$250.00",
            trend: "up"
        },

        {
            image: "avatar-5.jpg",
            name: "Lolita Hamill",
            location: "Texas",
            status: "Success",
            statusClass: "success",
            amount: "$110.00",
            trend: "down"
        },

        {
            image: "avatar-6.jpg",
            name: "Robert Mercer",
            location: "California",
            status: "Active",
            statusClass: "info",
            amount: "$420.00",
            trend: "up"
        }

    ];



    return (

        <div className="card">


            <div className="card-body">


                <h4 className="card-title mb-4">
                    Top Users
                </h4>



                <div data-simplebar style={{ maxHeight: "339px" }}>


                    <div className="table-responsive">


                        <table className="table table-borderless table-centered table-nowrap">


                            <tbody>


                                {
                                    users.map((user, index) => (


                                        <tr key={index}>


                                            <td>

                                                <img
                                                    src={`/assets/images/users/${user.image}`}
                                                    className="avatar-xs rounded-circle"
                                                    alt=""
                                                />

                                            </td>



                                            <td>

                                                <h6 className="font-size-15 mb-1 fw-normal">
                                                    {user.name}
                                                </h6>


                                                <p className="text-muted font-size-13 mb-0">

                                                    <i className="mdi mdi-map-marker"></i>

                                                    {user.location}

                                                </p>


                                            </td>




                                            <td>

                                                <span
                                                    className={`badge bg-${user.statusClass}-subtle text-${user.statusClass} font-size-12`}
                                                >

                                                    {user.status}

                                                </span>

                                            </td>



                                            <td className="text-muted fw-semibold text-end">

                                                {user.amount}

                                            </td>


                                        </tr>


                                    ))
                                }


                            </tbody>


                        </table>


                    </div>


                </div>


            </div>


        </div>


    );

};


export default TopUsers;
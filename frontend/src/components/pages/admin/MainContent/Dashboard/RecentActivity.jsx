const RecentActivity = () => {


    const activities = [

        {
            date: "Today",
            time: "12:20 pm",
            text: "Andrei Coman magna sed porta finibus, risus posted a new article:",
            link: "Forget UX Rowland"
        },

        {
            date: "22 Jul, 2020",
            time: "12:36 pm",
            text: "Andrei Coman posted a new article:",
            link: "Designer Alex"
        },

        {
            date: "18 Jul, 2020",
            time: "07:56 am",
            text: "Zack Wetass, sed porta finibus, risus Chris Wallace Commented",
            link: "Developer Moreno"
        },

        {
            date: "10 Jul, 2020",
            time: "08:42 pm",
            text: "Zack Wetass, Chris combined Commented",
            link: "UX Murphy"
        },

        {
            date: "23 Jun, 2020",
            time: "12:22 am",
            text: "Zack Wetass, sed porta finibus, risus Chris Wallace Commented",
            link: "Developer Moreno"
        },

        {
            date: "20 Jun, 2020",
            time: "09:48 pm",
            text: "Zack Wetass, Chris combined Commented",
            link: "UX Murphy"
        }

    ];



    return (

        <div className="card">


            <div className="card-body">


                <div className="float-end">

                    <div className="dropdown">

                        <a
                            className="dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                        >

                            <span className="text-muted">

                                Recent

                                <i className="mdi mdi-chevron-down ms-1"></i>

                            </span>

                        </a>

                        <div className="dropdown-menu dropdown-menu-end">

                            <a className="dropdown-item" href="#">
                                Recent
                            </a>

                            <a className="dropdown-item" href="#">
                                By Users
                            </a>

                        </div>


                    </div>


                </div>



                <h4 className="card-title mb-4">
                    Recent Activity
                </h4>




                <ol
                    className="activity-feed mb-0 ps-2"
                    data-simplebar
                    style={{ maxHeight: "339px" }}
                >


                    {
                        activities.map((item, index) => (

                            <li
                                className={`feed-item ${index === activities.length - 1 ? "pb-1" : ""}`}
                                key={index}
                            >


                                <p className="text-muted mb-1 font-size-13">

                                    {item.date}

                                    <small className="d-inline-block ms-1">
                                        {item.time}
                                    </small>

                                </p>


                                <p className="mb-0">

                                    {item.text}

                                    {" "}

                                    <span className="text-primary">
                                        {item.link}
                                    </span>

                                </p>


                            </li>

                        ))
                    }



                </ol>


            </div>


        </div>

    );

};


export default RecentActivity;
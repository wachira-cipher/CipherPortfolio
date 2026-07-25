export default function ServiceOverview() {

    const stats = [
        {
            number: "16",
            label: "Weeks Duration"
        },
        {
            number: "85%",
            label: "Efficiency Gain"
        },
        {
            number: "24/7",
            label: "Support Access"
        }
    ];


    return (

        <div className="overview-card">


            <div className="overview-header">

                <h4>
                    Service Overview
                </h4>

            </div>



            <div className="overview-stats">


                {stats.map((stat, index) => (

                    <div
                        className="stat-item"
                        key={index}
                    >

                        <div className="stat-number">
                            {stat.number}
                        </div>


                        <div className="stat-label">
                            {stat.label}
                        </div>


                    </div>

                ))}


            </div>




            <div className="overview-details">


                <div className="detail-row">

                    <span className="detail-label">
                        Investment Range
                    </span>

                    <span className="detail-value">
                        $15K - $45K
                    </span>

                </div>




                <div className="detail-row">

                    <span className="detail-label">
                        Team Composition
                    </span>

                    <span className="detail-value">
                        3-5 Specialists
                    </span>

                </div>




                <div className="detail-row">

                    <span className="detail-label">
                        Industries Served
                    </span>

                    <span className="detail-value">
                        Manufacturing, Tech, Finance
                    </span>

                </div>


            </div>


        </div>

    );
}
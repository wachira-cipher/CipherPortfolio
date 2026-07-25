const LatestTransactions = () => {


    const transactions = [

        {
            id: "#MB2540",
            name: "Neal Matthews",
            date: "07 Oct, 2019",
            total: "$400",
            status: "Paid",
            statusClass: "success",
            method: "Mastercard",
            icon: "fab fa-cc-mastercard"
        },

        {
            id: "#MB2541",
            name: "Jamal Burnett",
            date: "07 Oct, 2019",
            total: "$380",
            status: "Chargeback",
            statusClass: "danger",
            method: "Visa",
            icon: "fab fa-cc-visa"
        },

        {
            id: "#MB2542",
            name: "Juan Mitchell",
            date: "06 Oct, 2019",
            total: "$384",
            status: "Paid",
            statusClass: "success",
            method: "Paypal",
            icon: "fab fa-cc-paypal"
        },

        {
            id: "#MB2543",
            name: "Barry Dick",
            date: "05 Oct, 2019",
            total: "$412",
            status: "Paid",
            statusClass: "success",
            method: "Mastercard",
            icon: "fab fa-cc-mastercard"
        },

        {
            id: "#MB2544",
            name: "Ronald Taylor",
            date: "04 Oct, 2019",
            total: "$404",
            status: "Refund",
            statusClass: "warning",
            method: "Visa",
            icon: "fab fa-cc-visa"
        }

    ];



    return (

        <div className="row">


            <div className="col-lg-12">


                <div className="card">


                    <div className="card-body">


                        <h4 className="card-title mb-4">
                            Latest Transaction
                        </h4>



                        <div className="table-responsive">


                            <table className="table table-centered table-nowrap mb-0">


                                <thead className="table-light">

                                    <tr>

                                        <th>
                                            #
                                        </th>

                                        <th>
                                            Order ID
                                        </th>

                                        <th>
                                            Billing Name
                                        </th>

                                        <th>
                                            Date
                                        </th>

                                        <th>
                                            Total
                                        </th>

                                        <th>
                                            Payment Status
                                        </th>

                                        <th>
                                            Payment Method
                                        </th>

                                        <th>
                                            Action
                                        </th>

                                    </tr>

                                </thead>



                                <tbody>


                                    {
                                        transactions.map((item, index) => (


                                            <tr key={index}>


                                                <td>

                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                    />

                                                </td>


                                                <td>

                                                    <a
                                                        href="javascript: void(0);"
                                                        className="text-body fw-bold"
                                                    >

                                                        {item.id}

                                                    </a>

                                                </td>



                                                <td>
                                                    {item.name}
                                                </td>


                                                <td>
                                                    {item.date}
                                                </td>


                                                <td>
                                                    {item.total}
                                                </td>



                                                <td>

                                                    <span
                                                        className={`badge rounded-pill bg-${item.statusClass}-subtle text-${item.statusClass} font-size-12`}
                                                    >

                                                        {item.status}

                                                    </span>

                                                </td>



                                                <td>

                                                    <i className={`${item.icon} me-1`}></i>

                                                    {item.method}

                                                </td>




                                                <td>

                                                    <button
                                                        className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                                    >

                                                        View Details

                                                    </button>


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


        </div>

    );

};


export default LatestTransactions;
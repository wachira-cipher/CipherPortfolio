const PageTitle = ({ title, parent }) => {


    return (

        <div className="row">

            <div className="col-12">

                <div className="page-title-box d-flex align-items-center justify-content-between">


                    <h4 className="mb-0">
                        {title}
                    </h4>



                    <div className="page-title-right">

                        <ol className="breadcrumb m-0">

                            <li className="breadcrumb-item">

                                <a href="javascript: void(0);">
                                    {parent}
                                </a>

                            </li>


                            <li className="breadcrumb-item active">

                                {title}

                            </li>


                        </ol>

                    </div>


                </div>

            </div>


        </div>

    );
};


export default PageTitle;
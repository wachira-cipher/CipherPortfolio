import React, {
    useState
} from "react";


import {
    Link,
    useNavigate
} from "react-router-dom";


import {
    toast
} from "react-toastify";


import { createStat } from "../../../../api/stats.api";





const CreateStat = () => {


    const navigate = useNavigate();



    const [form, setForm] = useState({

        value: "",

        label: "",

        icon: "bi bi-check",

        order: 0

    });



    const [loading, setLoading] = useState(false);







    const handleChange = (e) => {


        setForm({

            ...form,

            [e.target.name]:

                e.target.name === "order"

                    ?

                    Number(e.target.value)

                    :

                    e.target.value


        });


    };









    const handleSubmit = async (e) => {


        e.preventDefault();



        if (
            !form.value ||
            !form.label
        ) {


            toast.warning(
                "Value and label are required"
            );


            return;

        }





        try {


            setLoading(true);



            await createStat(form);



            toast.success(
                "Stat created successfully"
            );



            navigate(
                "/admin/stats"
            );



        }
        catch (error) {


            console.error(error);



            toast.error(
                "Failed creating stat"
            );


        }
        finally {


            setLoading(false);


        }


    };









    return (


        <div className="page-content">


            <div className="container-fluid">





                {/* PAGE TITLE */}


                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box d-flex align-items-center justify-content-between">


                            <h4 className="mb-0">

                                Create Stat

                            </h4>



                            <div className="page-title-right">


                                <ol className="breadcrumb m-0">


                                    <li className="breadcrumb-item">

                                        <Link to="/admin/stat">

                                            Stats

                                        </Link>

                                    </li>


                                    <li className="breadcrumb-item active">

                                        Create

                                    </li>


                                </ol>


                            </div>


                        </div>


                    </div>


                </div>









                <div className="row">


                    <div className="col-lg-12">


                        <div className="card">


                            <div className="card-body">



                                <h4 className="card-title mb-4">

                                    Stat Information

                                </h4>





                                <form
                                    onSubmit={handleSubmit}
                                >





                                    {/* VALUE */}


                                    <div className="row mb-4">


                                        <label className="col-sm-3 col-form-label">

                                            Value

                                        </label>


                                        <div className="col-sm-9">


                                            <input

                                                type="text"

                                                className="form-control"

                                                name="value"

                                                placeholder="50+"

                                                value={form.value}

                                                onChange={handleChange}

                                            />


                                        </div>


                                    </div>









                                    {/* LABEL */}


                                    <div className="row mb-4">


                                        <label className="col-sm-3 col-form-label">

                                            Label

                                        </label>


                                        <div className="col-sm-9">


                                            <input

                                                type="text"

                                                className="form-control"

                                                name="label"

                                                placeholder="Projects Completed"

                                                value={form.label}

                                                onChange={handleChange}

                                            />


                                        </div>


                                    </div>









                                    {/* ICON */}


                                    <div className="row mb-4">


                                        <label className="col-sm-3 col-form-label">

                                            Bootstrap Icon

                                        </label>


                                        <div className="col-sm-9">


                                            <input

                                                type="text"

                                                className="form-control"

                                                name="icon"

                                                placeholder="bi bi-code-slash"

                                                value={form.icon}

                                                onChange={handleChange}

                                            />



                                            <small className="text-muted">

                                                Example: bi bi-code-slash

                                            </small>


                                        </div>


                                    </div>









                                    {/* ORDER */}


                                    <div className="row mb-4">


                                        <label className="col-sm-3 col-form-label">

                                            Order

                                        </label>


                                        <div className="col-sm-9">


                                            <input

                                                type="number"

                                                className="form-control"

                                                name="order"

                                                value={form.order}

                                                onChange={handleChange}

                                            />


                                        </div>


                                    </div>









                                    {/* BUTTONS */}


                                    <div className="row justify-content-end">


                                        <div className="col-sm-9">


                                            <div className="d-flex gap-3">


                                                <button

                                                    type="submit"

                                                    className="btn btn-primary waves-effect waves-light"

                                                    disabled={loading}

                                                >

                                                    {
                                                        loading

                                                            ?

                                                            "Saving..."

                                                            :

                                                            "Create Stat"

                                                    }


                                                </button>





                                                <Link

                                                    to="/admin/stats"

                                                    className="btn btn-outline-danger"

                                                >

                                                    Cancel

                                                </Link>



                                            </div>


                                        </div>


                                    </div>





                                </form>




                            </div>


                        </div>


                    </div>


                </div>






            </div>


        </div>


    );


};



export default CreateStat;
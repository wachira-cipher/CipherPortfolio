import React, {
    useEffect,
    useState
} from "react";


import {
    Link,
    useNavigate,
    useParams
} from "react-router-dom";


import {
    toast
} from "react-toastify";


import {
    getStatById,
    updateStat
} from "../../../../api/stats.api";






const EditStat = () => {


    const {
        id
    } = useParams();



    const navigate = useNavigate();





    const [form, setForm] = useState({

        value: "",

        label: "",

        icon: "bi bi-check",

        order: 0

    });





    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);









    /*
    ==========================
        FETCH STAT
    ==========================
    */


    const fetchStat = async () => {


        try {


            setLoading(true);



            const response = await getStatById(id);



            const stat = response.data.stat;



            setForm({

                value: stat.value,

                label: stat.label,

                icon: stat.icon,

                order: stat.order

            });



        }
        catch (error) {


            console.error(error);



            toast.error(
                "Failed loading stat"
            );


        }
        finally {


            setLoading(false);


        }


    };










    useEffect(() => {


        fetchStat();


    }, [id]);












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













    /*
    ==========================
        UPDATE STAT
    ==========================
    */


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


            setSaving(true);



            await updateStat(

                id,

                form

            );



            toast.success(
                "Stat updated successfully"
            );



            navigate(
                "/admin/stats"
            );



        }
        catch (error) {


            console.error(error);



            toast.error(
                "Failed updating stat"
            );


        }
        finally {


            setSaving(false);


        }


    };











    if (loading) {


        return (

            <div className="text-center p-5">

                Loading stat...

            </div>

        );


    }









    return (


        <div className="page-content">


            <div className="container-fluid">





                {/* PAGE TITLE */}


                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box d-flex align-items-center justify-content-between">


                            <h4 className="mb-0">

                                Edit Stat

                            </h4>



                            <div className="page-title-right">


                                <ol className="breadcrumb m-0">


                                    <li className="breadcrumb-item">

                                        <Link to="/admin/stat">

                                            Stats

                                        </Link>

                                    </li>


                                    <li className="breadcrumb-item active">

                                        Edit

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

                                    Update Stat Information

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

                                                value={form.icon}

                                                onChange={handleChange}

                                            />



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

                                                    className="btn btn-primary"

                                                    disabled={saving}

                                                >

                                                    {
                                                        saving

                                                            ?

                                                            "Updating..."

                                                            :

                                                            "Update Stat"

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



export default EditStat;

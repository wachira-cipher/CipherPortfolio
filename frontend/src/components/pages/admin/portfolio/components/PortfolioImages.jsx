import React, {
    useState
} from "react";


const PortfolioImages = ({
    handleImageChange,
    errors
}) => {



    const [preview, setPreview] =
        useState([]);





    const onImagesChange = (e) => {


        const files =
            Array.from(
                e.target.files
            );



        handleImageChange(e);



        const images =
            files.map(
                file =>
                    URL.createObjectURL(file)
            );



        setPreview(images);


    };






    return (

        <>


            <label className="form-label">

                Project Images

                <span className="text-danger">
                    *
                </span>


            </label>




            <form className="dropzone">


                <div className="fallback">


                    <input


                        name="file"


                        type="file"


                        multiple


                        accept="image/*"


                        onChange={onImagesChange}


                    />


                </div>




                <div className="dz-message needsclick">


                    <div className="mb-3">


                        <i className="display-4 text-muted uil uil-cloud-upload"></i>


                    </div>


                    <h4>

                        Drop files here or click to upload.

                    </h4>


                </div>


            </form>





            {
                errors.images &&

                <div className="text-danger mt-2">

                    {errors.images}

                </div>

            }







            {
                preview.length > 0 &&


                <div className="row mt-4">


                    {
                        preview.map(
                            (image, index) => (


                                <div

                                    className="col-md-3 mb-3"

                                    key={index}

                                >


                                    <img

                                        src={image}

                                        alt="preview"

                                        className="img-thumbnail"

                                        style={{

                                            height: "120px",

                                            width: "100%",

                                            objectFit: "cover"

                                        }}


                                    />


                                </div>


                            )

                        )

                    }


                </div>


            }



        </>

    );


};


export default PortfolioImages;
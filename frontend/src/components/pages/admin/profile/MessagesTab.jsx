import React from "react";


const MessagesTab = () => {


    return (

        <div>


            <div
                data-simplebar="true"
                style={{ maxHeight: "430px" }}
            >



                {/* Message 1 */}

                <MessageItem

                    avatar="/assets/images/users/avatar-3.jpg"

                    name="Marion Walker"

                    time="1 hr ago"

                    message="If several languages coalesce, the grammar of the resulting."

                >


                    <MessageItem

                        avatar="/assets/images/users/avatar-4.jpg"

                        name="Shanon Marvin"

                        time="1 hr ago"

                        message="It will be as simple as in fact, it will be Occidental. To it will seem like simplified."

                    />



                </MessageItem>






                {/* Message 2 */}


                <MessageItem

                    avatar="/assets/images/users/avatar-5.jpg"

                    name="Janice Morgan"

                    time="2 hrs ago"

                    message="To achieve this, it would be necessary to have uniform pronunciation."

                />







                {/* Message 3 */}


                <MessageItem

                    avatar="/assets/images/users/avatar-7.jpg"

                    name="Patrick Petty"

                    time="3 hrs ago"

                    message="Sed ut perspiciatis unde omnis iste natus error sit"

                />




            </div>






            {/* Message Composer */}


            <div className="border rounded mt-4">


                <form action="#">



                    <div className="px-2 py-1 bg-light">


                        <div
                            className="btn-group"
                            role="group"
                        >



                            <button
                                type="button"
                                className="btn btn-sm btn-link text-reset text-decoration-none"
                            >

                                <i className="uil uil-link"></i>

                            </button>




                            <button
                                type="button"
                                className="btn btn-sm btn-link text-reset text-decoration-none"
                            >

                                <i className="uil uil-smile"></i>

                            </button>




                            <button
                                type="button"
                                className="btn btn-sm btn-link text-reset text-decoration-none"
                            >

                                <i className="uil uil-at"></i>

                            </button>



                        </div>



                    </div>





                    <textarea

                        rows="3"

                        className="form-control border-0 resize-none"

                        placeholder="Your Message..."

                    ></textarea>



                </form>



            </div>



        </div>

    );

};









const MessageItem = ({
    avatar,
    name,
    time,
    message,
    children
}) => {


    return (

        <div className="d-flex align-items-start border-bottom py-4">


            <div className="flex-shrink-0 me-2">


                <img

                    className="rounded-circle avatar-xs"

                    src={avatar}

                    alt={`${name} avatar`}

                />


            </div>





            <div className="flex-grow-1">


                <h5 className="font-size-15 mb-1">


                    {name}


                    <small className="text-muted float-end">

                        {time}

                    </small>


                </h5>





                <p className="text-muted">

                    {message}

                </p>






                <a

                    href="#"

                    className="text-muted font-13 d-inline-block"

                >

                    <i className="mdi mdi-reply"></i>

                    {" "}Reply

                </a>






                {
                    children && (

                        <div className="d-flex align-items-start mt-4">


                            {children}


                        </div>

                    )
                }



            </div>



        </div>

    );

};





export default MessagesTab;
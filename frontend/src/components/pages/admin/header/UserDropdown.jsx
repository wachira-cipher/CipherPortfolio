import {
    useState,
    useRef,
    useEffect
} from "react";


import {
    useAuth
} from "../../../../context/AuthContext";


import {
    Link
} from "react-router-dom";


import {
    getImageUrl
} from "../../../../utils/imageUrl";



const UserDropdown = () => {


    const [open, setOpen] = useState(false);



    const dropdownRef = useRef(null);



    const {
        logout,
        lockScreen,
        user,
        profile
    } = useAuth();








    // Close when clicking outside
    useEffect(() => {


        const handleClickOutside = (event) => {


            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {


                setOpen(false);


            }


        };



        document.addEventListener(
            "mousedown",
            handleClickOutside
        );



        return () => {


            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );


        };


    }, []);









    const handleLogout = () => {


        console.log(
            "Logging out..."
        );


        logout();


    };








    const handleLockScreen = () => {


        setOpen(false);



        lockScreen();



    };








    return (

        <div

            className="dropdown d-inline-block"

            ref={dropdownRef}

        >



            <button

                type="button"

                onClick={() =>
                    setOpen(prev => !prev)
                }

                className="btn header-item waves-effect"

            >



                <img

                    className="rounded-circle header-profile-user"

                    src={
                        getImageUrl(
                            profile?.image ||
                            user?.image
                        )
                    }

                    alt="Header Avatar"

                />





                <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">


                    {
                        user?.name ||
                        "Tyson"
                    }


                </span>






                <i

                    className={`
                        bi bi-chevron-down 
                        d-none d-xl-inline-block 
                        font-size-15 ms-1
                        ${open ? "rotate-arrow" : ""}
                    `}

                ></i>



            </button>









            <div

                className={
                    `dropdown-menu dropdown-menu-end ${open ? "show" : ""
                    }`
                }

            >





                <Link

                    className="dropdown-item"

                    to="/admin/profile"

                    onClick={() =>
                        setOpen(false)
                    }

                >



                    <i className="bi bi-person-circle font-size-18 align-middle text-muted me-1"></i>


                    <span className="align-middle">


                        View Profile


                    </span>



                </Link>












                <button

                    type="button"

                    className="dropdown-item"

                    onClick={handleLockScreen}

                >



                    <i className="bi bi-lock font-size-18 align-middle text-muted me-1"></i>



                    <span className="align-middle">


                        Lock screen


                    </span>



                </button>












                <button

                    type="button"

                    className="dropdown-item"

                    onClick={handleLogout}

                >



                    <i className="bi bi-box-arrow-right font-size-18 align-middle text-muted me-1"></i>




                    <span className="align-middle">


                        Sign out


                    </span>



                </button>







            </div>






        </div>


    );


};



export default UserDropdown;
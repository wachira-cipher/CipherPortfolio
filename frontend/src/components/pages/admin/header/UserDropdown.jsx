import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../../../context/AuthContext"; // adjust path


const UserDropdown = () => {


    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);


    const { logout, user } = useAuth();



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




    return (

        <div
            className="dropdown d-inline-block"
            ref={dropdownRef}
        >


            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className="btn header-item waves-effect"
            >


                <img
                    className="rounded-circle header-profile-user"
                    src="/assets/auth/images/users/avatar-4.jpg"
                    alt="Header Avatar"
                />



                <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">

                    {user?.name || "Marcus"}

                </span>



                <i
                    className={`bi bi-chevron-down d-none d-xl-inline-block font-size-15 ms-1 ${open ? "rotate-arrow" : ""
                        }`}
                ></i>


            </button>





            <div
                className={`dropdown-menu dropdown-menu-end ${open ? "show" : ""
                    }`}
            >



                <a
                    className="dropdown-item"
                    href="#"
                >

                    <i className="bi bi-person-circle font-size-18 align-middle text-muted me-1"></i>

                    <span className="align-middle">
                        View Profile
                    </span>


                </a>





                <a
                    className="dropdown-item"
                    href="#"
                >

                    <i className="bi bi-wallet2 font-size-18 align-middle text-muted me-1"></i>

                    <span className="align-middle">
                        My Wallet
                    </span>


                </a>





                <a
                    className="dropdown-item"
                    href="#"
                >

                    <i className="bi bi-gear font-size-18 align-middle text-muted me-1"></i>

                    <span className="align-middle">
                        Settings
                    </span>


                    <span className="badge bg-success-subtle text-success rounded-pill mt-1 ms-2">
                        03
                    </span>


                </a>





                <a
                    className="dropdown-item"
                    href="#"
                >

                    <i className="bi bi-lock font-size-18 align-middle text-muted me-1"></i>

                    <span className="align-middle">
                        Lock screen
                    </span>


                </a>






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
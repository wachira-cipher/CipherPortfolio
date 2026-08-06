import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div className="navbar-brand-box">

            <Link
                to="/admin/dashboard"
                className="logo logo-dark"
            >

                <span className="logo-sm">
                    <img
                        src="/assets/auth/images/logo-sm.png"
                        alt="Logo"
                        height="22"
                    />
                </span>


                <span className="logo-lg">
                    <img
                        src="/assets/auth/images/logo-dark.png"
                        alt="Logo"
                        height="20"
                    />
                </span>

            </Link>



            <Link
                to="/admin/dashboard"
                className="logo logo-light"
            >

                <span className="logo-sm">
                    <img
                        src="/assets/auth/images/logo-sm.png"
                        alt="Logo"
                        height="22"
                    />
                </span>


                <span className="logo-lg">
                    <img
                        src="/assets/auth/images/logo-light.png"
                        alt="Logo"
                        height="20"
                    />
                </span>

            </Link>

        </div>
    );
};


export default Logo;
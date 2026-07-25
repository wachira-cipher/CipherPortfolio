import Logo from "./header/Logo";
import SearchBar from "./header/SearchBar";
import MobileSearch from "./header/MobileSearch";
import LanguageDropdown from "./header/LanguageDropdown";
import AppsDropdown from "./header/AppsDropdown";
import FullscreenButton from "./header/FullscreenButton";
import Notifications from "./header/Notifications";
import UserDropdown from "./header/UserDropdown";
import SettingsButton from "./header/SettingsButton";


const Header = ({ toggleSidebar }) => {


    return (

        <header id="page-topbar">


            <div className="navbar-header">


                <div className="d-flex">


                    <Logo />

                    <button
                        type="button"
                        onClick={toggleSidebar}
                        className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
                    >
                        <i className="fa fa-fw fa-bars"></i>
                    </button>




                    <SearchBar />


                </div>




                <div className="d-flex">

                    <MobileSearch />

                    <LanguageDropdown />

                    <AppsDropdown />

                    <FullscreenButton />

                    <Notifications />

                    <UserDropdown />

                    <SettingsButton />

                </div>


            </div>


        </header>

    );

};


export default Header;
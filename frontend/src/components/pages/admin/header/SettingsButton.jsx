const SettingsButton = ({ toggleRightSidebar }) => {


    return (

        <button
            type="button"
            onClick={toggleRightSidebar}
            className="btn header-item noti-icon"
        >

            <i className="bi bi-gear"></i>

        </button>

    );

};


export default SettingsButton;
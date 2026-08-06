const SettingsButton = ({
    toggleRightSidebar
}) => {


    const handleClick = () => {


        console.log(
            "⚙️ Settings button clicked"
        );



        if (toggleRightSidebar) {


            console.log(
                "✅ toggleRightSidebar function received, opening sidebar..."
            );


            toggleRightSidebar();


        }
        else {


            console.error(
                "❌ toggleRightSidebar prop is missing"
            );


        }


    };



    return (

        <button
            type="button"
            onClick={handleClick}
            className="btn header-item noti-icon"
            aria-label="Open settings"
        >

            <i className="bi bi-gear"></i>

        </button>

    );

};


export default SettingsButton;
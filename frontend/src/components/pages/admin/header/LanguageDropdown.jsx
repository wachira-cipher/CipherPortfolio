const LanguageDropdown = () => {
    return (
        <div className="dropdown d-inline-block language-switch">
            <button
                type="button"
                className="btn header-item waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <img
                    src="assets/images/flags/us.jpg"
                    alt="Header Language"
                    height="16"
                />
            </button>

            <div className="dropdown-menu dropdown-menu-end">
                <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                >
                    <img
                        src="assets/images/flags/spain.jpg"
                        alt="Spanish"
                        className="me-1"
                        height="12"
                    />
                    <span className="align-middle">Spanish</span>
                </a>

                <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                >
                    <img
                        src="assets/images/flags/germany.jpg"
                        alt="German"
                        className="me-1"
                        height="12"
                    />
                    <span className="align-middle">German</span>
                </a>

                <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                >
                    <img
                        src="assets/images/flags/italy.jpg"
                        alt="Italian"
                        className="me-1"
                        height="12"
                    />
                    <span className="align-middle">Italian</span>
                </a>

                <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                >
                    <img
                        src="assets/images/flags/russia.jpg"
                        alt="Russian"
                        className="me-1"
                        height="12"
                    />
                    <span className="align-middle">Russian</span>
                </a>
            </div>
        </div>
    );
};

export default LanguageDropdown;
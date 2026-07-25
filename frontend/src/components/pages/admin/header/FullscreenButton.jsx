const FullscreenButton = () => {
    return (
        <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="fullscreen"
            >
                <i className="uil-minus-path"></i>
            </button>
        </div>
    );
};

export default FullscreenButton;
const MobileSearch = () => {
    return (
        <div className="dropdown d-inline-block d-lg-none ms-2">
            <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <i className="uil-search"></i>
            </button>

            <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
            >
                <form className="p-3">
                    <div className="m-0">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search ..."
                                aria-label="Recipient's username"
                            />

                            <div className="input-group-append">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    <i className="mdi mdi-magnify"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MobileSearch;
const Notifications = () => {
    return (
        <div className="dropdown d-inline-block">
            <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <i className="uil-bell"></i>
                <span className="badge bg-danger rounded-pill">3</span>
            </button>

            <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
            >
                <div className="p-3">
                    <div className="row align-items-center">
                        <div className="col">
                            <h5 className="m-0 font-size-16">
                                Notifications
                            </h5>
                        </div>

                        <div className="col-auto">
                            <a href="#!" className="small">
                                Mark all as read
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    data-simplebar
                    style={{ maxHeight: "230px" }}
                >
                    <a
                        href="javascript:void(0);"
                        className="text-dark notification-item"
                    >
                        <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar-xs">
                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                        <i className="uil-shopping-basket"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="flex-grow-1">
                                <h6 className="mb-1">
                                    Your order is placed
                                </h6>

                                <div className="font-size-12 text-muted">
                                    <p className="mb-1">
                                        If several languages coalesce the grammar
                                    </p>

                                    <p className="mb-0">
                                        <i className="mdi mdi-clock-outline"></i>{" "}
                                        3 min ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="javascript:void(0);"
                        className="text-dark notification-item"
                    >
                        <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 me-3">
                                <img
                                    src="assets/images/users/avatar-3.jpg"
                                    className="rounded-circle avatar-xs"
                                    alt="user-pic"
                                />
                            </div>

                            <div className="flex-grow-1">
                                <h6 className="mb-1">
                                    James Lemire
                                </h6>

                                <div className="font-size-12 text-muted">
                                    <p className="mb-1">
                                        It will seem like simplified English.
                                    </p>

                                    <p className="mb-0">
                                        <i className="mdi mdi-clock-outline"></i>{" "}
                                        1 hour ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="javascript:void(0);"
                        className="text-dark notification-item"
                    >
                        <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar-xs">
                                    <span className="avatar-title bg-success rounded-circle font-size-16">
                                        <i className="uil-truck"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="flex-grow-1">
                                <h6 className="mb-1">
                                    Your item is shipped
                                </h6>

                                <div className="font-size-12 text-muted">
                                    <p className="mb-1">
                                        If several languages coalesce the grammar
                                    </p>

                                    <p className="mb-0">
                                        <i className="mdi mdi-clock-outline"></i>{" "}
                                        3 min ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="javascript:void(0);"
                        className="text-dark notification-item"
                    >
                        <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 me-3">
                                <img
                                    src="assets/images/users/avatar-4.jpg"
                                    className="rounded-circle avatar-xs"
                                    alt="user-pic"
                                />
                            </div>

                            <div className="flex-grow-1">
                                <h6 className="mb-1">
                                    Salena Layfield
                                </h6>

                                <div className="font-size-12 text-muted">
                                    <p className="mb-1">
                                        As a skeptical Cambridge friend of mine occidental.
                                    </p>

                                    <p className="mb-0">
                                        <i className="mdi mdi-clock-outline"></i>{" "}
                                        1 hours ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="p-2 border-top">
                    <div className="d-grid">
                        <a
                            className="btn btn-sm btn-link font-size-14 text-center"
                            href="javascript:void(0)"
                        >
                            <i className="uil-arrow-circle-right me-1"></i>
                            View More..
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
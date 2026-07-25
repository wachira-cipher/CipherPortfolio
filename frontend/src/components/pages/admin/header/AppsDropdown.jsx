const AppsDropdown = () => {
    return (
        <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <i className="uil-apps"></i>
            </button>

            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <div className="px-lg-2">
                    <div className="row g-0">
                        <div className="col">
                            <a className="dropdown-icon-item" href="#">
                                <img
                                    src="assets/images/brands/github.png"
                                    alt="Github"
                                />
                                <span>GitHub</span>
                            </a>
                        </div>

                        <div className="col">
                            <a className="dropdown-icon-item" href="#">
                                <img
                                    src="assets/images/brands/bitbucket.png"
                                    alt="Bitbucket"
                                />
                                <span>Bitbucket</span>
                            </a>
                        </div>

                        <div className="col">
                            <a className="dropdown-icon-item" href="#">
                                <img
                                    src="assets/images/brands/dribbble.png"
                                    alt="Dribbble"
                                />
                                <span>Dribbble</span>
                            </a>
                        </div>
                    </div>

                    <div className="row g-0">
                        <div className="col">
                            <a className="dropdown-icon-item" href="#">
                                <img
                                    src="assets/images/brands/dropbox.png"
                                    alt="Dropbox"
                                />
                                <span>Dropbox</span>
                            </a>
                        </div>

                        <div className="col">
                            <a className="dropdown-icon-item" href="#">
                                <img
                                    src="assets/images/brands/mail_chimp.png"
                                    alt="Mail Chimp"
                                />
                                <span>Mail Chimp</span>
                            </a>
                        </div>

                        <div className="col">
                            <a className="dropdown-icon-item" href="#">
                                <img
                                    src="assets/images/brands/slack.png"
                                    alt="Slack"
                                />
                                <span>Slack</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsDropdown;
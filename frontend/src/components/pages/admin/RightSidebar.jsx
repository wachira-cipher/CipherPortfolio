import { useState, useEffect } from "react";

const RightSidebar = ({
    open,
    toggleRightSidebar
}) => {

    const [settings, setSettings] = useState({
        layoutSize: "lg",
        layoutMode: "light",
        layoutWidth: "fluid",
        topbar: "light",
        sidebarSize: "lg",
        sidebarColor: "dark",
        direction: "ltr"
    });

    useEffect(() => {

        if (open) {

            document.body.classList.add("right-bar-enabled");

        } else {

            document.body.classList.remove("right-bar-enabled");

        }

        return () => {

            document.body.classList.remove("right-bar-enabled");

        };

    }, [open]);

    const updateSetting = (
        key,
        value,
        attribute
    ) => {

        setSettings(prev => ({
            ...prev,
            [key]: value
        }));

        if (attribute === "dir") {

            document.documentElement.setAttribute(
                "dir",
                value
            );

        } else {

            document.body.setAttribute(
                attribute,
                value
            );

        }

    };

    return (
        <>
            <div className="right-bar">

                <div data-simplebar className="h-100">

                    <div className="rightbar-title d-flex align-items-center p-3">

                        <h5 className="m-0 me-2">
                            Settings
                        </h5>

                        <button
                            type="button"
                            className="btn btn-link right-bar-toggle ms-auto"
                            onClick={toggleRightSidebar}
                        >
                            <i className="bi bi-x-lg noti-icon"></i>
                        </button>

                    </div>

                    <hr className="m-0" />

                    <div className="p-4">



                        <h6 className="mt-4 mb-3 pt-2">
                            Layout Mode
                        </h6>

                        <Radio
                            id="layout-light"
                            name="layout-mode"
                            label="Light"
                            value="light"
                            checked={settings.layoutMode === "light"}
                            onChange={() =>
                                updateSetting(
                                    "layoutMode",
                                    "light",
                                    "data-layout-mode"
                                )
                            }
                        />

                        <Radio
                            id="layout-dark"
                            name="layout-mode"
                            label="Dark"
                            value="dark"
                            checked={settings.layoutMode === "dark"}
                            onChange={() =>
                                updateSetting(
                                    "layoutMode",
                                    "dark",
                                    "data-layout-mode"
                                )
                            }
                        />

                        <h6 className="mt-4 mb-3 pt-2">
                            Layout Width
                        </h6>

                        <Radio
                            id="width-fluid"
                            name="layout-width"
                            label="Fluid"
                            value="fluid"
                            checked={settings.layoutWidth === "fluid"}
                            onChange={() =>
                                updateSetting(
                                    "layoutWidth",
                                    "fluid",
                                    "data-layout-size"
                                )
                            }
                        />

                        <Radio
                            id="width-boxed"
                            name="layout-width"
                            label="Boxed"
                            value="boxed"
                            checked={settings.layoutWidth === "boxed"}
                            onChange={() =>
                                updateSetting(
                                    "layoutWidth",
                                    "boxed",
                                    "data-layout-size"
                                )
                            }
                        />

                        <h6 className="mt-4 mb-3 pt-2">
                            Topbar Color
                        </h6>

                        <Radio
                            id="topbar-light"
                            name="topbar-color"
                            label="Light"
                            value="light"
                            checked={settings.topbar === "light"}
                            onChange={() =>
                                updateSetting(
                                    "topbar",
                                    "light",
                                    "data-topbar"
                                )
                            }
                        />

                        <Radio
                            id="topbar-dark"
                            name="topbar-color"
                            label="Dark"
                            value="dark"
                            checked={settings.topbar === "dark"}
                            onChange={() =>
                                updateSetting(
                                    "topbar",
                                    "dark",
                                    "data-topbar"
                                )
                            }
                        />

                        <h6 className="mt-4 mb-3 pt-2">
                            Sidebar Size
                        </h6>

                        <Radio
                            id="sidebar-default"
                            name="sidebar-size"
                            label="Default"
                            value="lg"
                            checked={settings.sidebarSize === "lg"}
                            onChange={() =>
                                updateSetting(
                                    "sidebarSize",
                                    "lg",
                                    "data-sidebar-size"
                                )
                            }
                        />

                        <Radio
                            id="sidebar-small"
                            name="sidebar-size"
                            label="Small (Icon View)"
                            value="sm"
                            checked={settings.sidebarSize === "sm"}
                            onChange={() =>
                                updateSetting(
                                    "sidebarSize",
                                    "sm",
                                    "data-sidebar-size"
                                )
                            }
                        />

                        <h6 className="mt-4 mb-3 pt-2">
                            Sidebar Color
                        </h6>

                        {["light", "dark", "colored"].map(color => (
                            <Radio
                                key={color}
                                id={`sidebar-${color}`}
                                name="sidebar-color"
                                label={
                                    color.charAt(0).toUpperCase() +
                                    color.slice(1)
                                }
                                value={color}
                                checked={settings.sidebarColor === color}
                                onChange={() =>
                                    updateSetting(
                                        "sidebarColor",
                                        color,
                                        "data-sidebar"
                                    )
                                }
                            />
                        ))}

                        <h6 className="mt-4 mb-3 pt-2">
                            Direction
                        </h6>

                        <Radio
                            id="ltr"
                            name="direction"
                            label="LTR"
                            value="ltr"
                            checked={settings.direction === "ltr"}
                            onChange={() =>
                                updateSetting(
                                    "direction",
                                    "ltr",
                                    "dir"
                                )
                            }
                        />

                        <Radio
                            id="rtl"
                            name="direction"
                            label="RTL"
                            value="rtl"
                            checked={settings.direction === "rtl"}
                            onChange={() =>
                                updateSetting(
                                    "direction",
                                    "rtl",
                                    "dir"
                                )
                            }
                        />

                    </div>

                </div>

            </div>

            <div
                className="rightbar-overlay"
                onClick={toggleRightSidebar}
            />
        </>
    );
};

const Radio = ({
    id,
    name,
    label,
    value,
    checked = false,
    onChange
}) => (
    <div className="form-check form-check-inline">

        <input
            className="form-check-input"
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
        />

        <label
            className="form-check-label"
            htmlFor={id}
        >
            {label}
        </label>

    </div>
);

export default RightSidebar;
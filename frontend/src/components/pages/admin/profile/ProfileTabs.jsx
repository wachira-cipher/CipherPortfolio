import React, { useState } from "react";

import AboutTab from "./AboutTab";
import TasksTab from "./TasksTab";
import MessagesTab from "./MessagesTab";


const ProfileTabs = () => {

    const [activeTab, setActiveTab] = useState("about");


    return (


        <>
            <div className="card mb-0">


                {/* Nav tabs */}
                <ul
                    className="nav nav-tabs nav-tabs-custom nav-justified"
                    role="tablist"
                >

                    <li className="nav-item">

                        <button
                            className={`nav-link ${activeTab === "about"
                                ? "active"
                                : ""
                                }`}
                            onClick={() => setActiveTab("about")}
                        >

                            <i className="uil uil-user-circle font-size-20"></i>

                            <span className="d-none d-sm-block">
                                About
                            </span>

                        </button>

                    </li>



                    <li className="nav-item">

                        <button
                            className={`nav-link ${activeTab === "tasks"
                                ? "active"
                                : ""
                                }`}
                            onClick={() => setActiveTab("tasks")}
                        >

                            <i className="uil uil-clipboard-notes font-size-20"></i>

                            <span className="d-none d-sm-block">
                                Tasks
                            </span>

                        </button>

                    </li>




                    <li className="nav-item">

                        <button
                            className={`nav-link ${activeTab === "messages"
                                ? "active"
                                : ""
                                }`}
                            onClick={() => setActiveTab("messages")}
                        >

                            <i className="uil uil-envelope-alt font-size-20"></i>

                            <span className="d-none d-sm-block">
                                Messages
                            </span>

                        </button>

                    </li>


                </ul>



                {/* Tab content */}

                <div className="tab-content p-4">


                    {
                        activeTab === "about" &&
                        <AboutTab />
                    }



                    {
                        activeTab === "tasks" &&
                        <TasksTab />
                    }



                    {
                        activeTab === "messages" &&
                        <MessagesTab />
                    }


                </div>



            </div>


        </>

    );

};


export default ProfileTabs;
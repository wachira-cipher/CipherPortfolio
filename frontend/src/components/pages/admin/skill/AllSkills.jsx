import React, {
    useEffect,
    useState
} from "react";


import {
    Link
} from "react-router-dom";


import {
    toast
} from "react-toastify";



// Components

import SkillFilters from "./components/SkillFilters";
import SkillToolbar from "./components/SkillToolbar";
import SkillCard from "./components/SkillCard";
import SkillPagination from "./components/SkillPagination";



// API

import {
    getSkills,
    deleteSkill
} from "../../../../api/skills.api";





const AllSkills = () => {



    const [skills, setSkills] = useState([]);



    const [loading, setLoading] = useState(false);



    const [search, setSearch] = useState("");



    const [category, setCategory] = useState(
        "All Categories"
    );



    const [featured, setFeatured] = useState(false);



    const [level, setLevel] = useState(
        "All Levels"
    );



    const [status, setStatus] = useState(true);



    const [sort, setSort] = useState(
        "newest"
    );



    const [currentPage, setCurrentPage] = useState(1);



    const [totalPages, setTotalPages] = useState(1);



    const limit = 6;









    /*
    ==========================
    FETCH SKILLS
    ==========================
    */


    const fetchSkills = async () => {


        try {


            setLoading(true);



            const response = await getSkills(
                currentPage,
                limit
            );



            setSkills(

                response.data.skills || []

            );



            setTotalPages(

                response.data.pagination?.totalPages || 1

            );



        }

        catch (error) {


            console.log(error);



            toast.error(
                "Failed loading skills"
            );


        }

        finally {


            setLoading(false);


        }


    };









    useEffect(() => {


        fetchSkills();



        const interval = setInterval(() => {


            fetchSkills();



        }, 5 * 60 * 1000);





        return () => {


            clearInterval(interval);


        };



    }, [currentPage]);









    /*
    ==========================
    FILTER DATA
    ==========================
    */


    const filteredSkills = skills.filter(

        skill => {


            const matchSearch =

                skill.name

                    ?.toLowerCase()

                    .includes(

                        search.toLowerCase()

                    );







            const matchCategory =


                category && category !== "All Categories"


                    ?

                    skill.category === category


                    :

                    true;








            const matchLevel =


                level && level !== "All Levels"


                    ?

                    skill.level === level


                    :

                    true;








            const matchFeatured =


                featured


                    ?

                    skill.isFeatured


                    :

                    true;








            const matchStatus =


                skill.status === status;






            return (

                matchSearch &&

                matchCategory &&

                matchLevel &&

                matchFeatured &&

                matchStatus

            );



        }


    );









    /*
    ==========================
    SORT DATA
    ==========================
    */


    const sortedSkills = [


        ...filteredSkills


    ].sort(

        (a, b) => {


            if (sort === "oldest") {


                return (

                    new Date(a.createdAt)

                    -

                    new Date(b.createdAt)

                );


            }





            if (sort === "newest") {


                return (

                    new Date(b.createdAt)

                    -

                    new Date(a.createdAt)

                );


            }





            if (sort === "featured") {


                return (

                    Number(b.isFeatured)

                    -

                    Number(a.isFeatured)

                );


            }






            if (sort === "percentage") {


                return (

                    b.percentage

                    -

                    a.percentage

                );


            }






            return 0;


        }


    );









    /*
    ==========================
    DELETE SKILL
    ==========================
    */


    const handleDelete = async (id) => {


        const confirmDelete = window.confirm(

            "Are you sure you want to delete this skill?"

        );



        if (!confirmDelete) return;





        try {


            await deleteSkill(id);





            setSkills(prev =>

                prev.filter(

                    item => item._id !== id

                )

            );





            toast.success(

                "Skill deleted successfully"

            );


        }


        catch (error) {


            console.error(error);



            toast.error(

                "Failed deleting skill"

            );


        }


    };









    return (


        <>


            <div className="page-content">


                <div className="container-fluid">







                    {/* PAGE TITLE */}


                    <div className="row">


                        <div className="col-12">


                            <div className="page-title-box d-flex align-items-center justify-content-between">


                                <h4 className="mb-0">


                                    Skills


                                </h4>




                                <div className="page-title-right">


                                    <ol className="breadcrumb m-0">


                                        <li className="breadcrumb-item">


                                            <Link to="#">


                                                Skills


                                            </Link>


                                        </li>



                                        <li className="breadcrumb-item active">


                                            All Skills


                                        </li>


                                    </ol>


                                </div>


                            </div>


                        </div>


                    </div>













                    <div className="row">





                        <SkillFilters


                            category={category}

                            setCategory={setCategory}


                            featured={featured}

                            setFeatured={setFeatured}


                            level={level}

                            setLevel={setLevel}


                            status={status}

                            setStatus={setStatus}


                        />








                        <div className="col-xl-9 col-lg-8">


                            <div className="card">


                                <div className="card-body">



                                    <SkillToolbar


                                        search={search}

                                        setSearch={setSearch}


                                        sort={sort}

                                        setSort={setSort}


                                        category={category}


                                    />









                                    <div className="row">


                                        {

                                            loading ?


                                                (

                                                    <div className="text-center">

                                                        Loading skills...

                                                    </div>

                                                )


                                                :


                                                sortedSkills.length === 0


                                                    ?


                                                    (

                                                        <div className="text-center">

                                                            No skills found

                                                        </div>

                                                    )


                                                    :


                                                    sortedSkills.map(skill => (


                                                        <SkillCard


                                                            key={skill._id}


                                                            skill={skill}


                                                            handleDelete={handleDelete}


                                                        />


                                                    ))


                                        }


                                    </div>









                                    <SkillPagination


                                        currentPage={currentPage}


                                        totalPages={totalPages}


                                        setCurrentPage={setCurrentPage}


                                    />





                                </div>


                            </div>


                        </div>




                    </div>



                </div>


            </div>



        </>


    );


};




export default AllSkills;
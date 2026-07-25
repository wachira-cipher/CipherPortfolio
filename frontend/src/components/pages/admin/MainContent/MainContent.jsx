import PageTitle from "./ PageTitle";

import StatsCards from "./Dashboard/StatsCards";
import SalesAnalytics from "./Dashboard/SalesAnalytics";
import CampaignCard from "./Dashboard/CampaignCard";
import TopSellingProducts from "./Dashboard/TopSellingProducts";
import TopUsers from "./Dashboard/TopUsers";
import RecentActivity from "./Dashboard/RecentActivity";
import SocialSource from "./Dashboard/SocialSource";
import LatestTransactions from "./Dashboard/LatestTransactions";


const MainContent = () => {

    return (

        <>


            <div className="page-content">

                <div className="container-fluid">


                    {/* Page Title */}
                    <PageTitle
                        title="Dashboard"
                        parent="Minible"
                    />



                    {/* Statistics Cards */}
                    <StatsCards />



                    <div className="row">


                        <div className="col-xl-8">

                            <SalesAnalytics />

                        </div>



                        <div className="col-xl-4">


                            <CampaignCard />


                            <TopSellingProducts />


                        </div>


                    </div>




                    <div className="row">


                        <div className="col-xl-4">

                            <TopUsers />

                        </div>



                        <div className="col-xl-4">

                            <RecentActivity />

                        </div>



                        <div className="col-xl-4">

                            <SocialSource />

                        </div>


                    </div>





                    <LatestTransactions />



                </div>


            </div>


        </>

    );

};


export default MainContent;
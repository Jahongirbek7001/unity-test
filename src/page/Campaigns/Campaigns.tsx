import CustomBarChart from "../../components/CustomBarChart";
import IconProgress from "../../components/IconProgress";
import IncomeComp from "../../components/IncomeComp";
import LatestSales from "../../components/latestSales";
import MobileSidebar from "../../components/MobileSidebar";
import NotificationsComponent from "../../components/NotificationsComponent";
import PageViewsChart from "../../components/PageViewsChart";
import Sidebar from "../../components/Sidebar";
import UserStats from "../../components/UserStats";

const statistics = [
    { label: 'Bento Illustration', color: 'rgba(108, 93, 211, 1)', slim: '40%' },
    { label: 'Bento Illustration', color: 'rgba(127, 186, 122, 1)', slim: '25%' },
    { label: 'Bento Illustration', color: 'rgba(255, 206, 115, 1)', slim: '50%' },
    { label: 'Bento Illustration', color: 'rgba(255, 162, 192, 1)', slim: '80%' },
];

const Campaigns = () => {
    return (
        <>
            <div className='flex flex-col justify-between lg:flex-row'>
                <Sidebar />
                <MobileSidebar />
                {/* Left */}
                <div className=" w-full lg:w-[50%] border-solid border-2 px-14 py-7">

                    {/* TITLE */}
                    <div className=" title">
                        <p className=" text-2xl">Hi Dash UI8,</p>
                        <section className=" flex justify-start items-center">
                            <span className=" text-5xl font-semibold">Campaigns</span>
                        </section>
                    </div>
                    <PageViewsChart />
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <UserStats />
                        <IncomeComp />
                        <IconProgress />
                        <LatestSales />
                    </div>
                </div>

                {/* Right */}
                <div className=" w-full lg:w-[30%] px-14 py-10">

                    {/* Search panel */}
                    <div className="search w-full flex justify-between">
                        <div className=" flex items-center justify-center gap-2">
                            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" />
                            <span className=" text-gray-500">Search</span>
                        </div>
                        <NotificationsComponent />
                    </div>

                    {/* Statistika */}
                    <div className=" px-5 py-10 mt-5 bg-white rounded-2xl shadow-xl">
                        <p className=" text-xl">2020 Goal</p>
                        <div className=" flex flex-row lg:flex-col items-start justify-between mt-5">
                            <div className=" flex justify-start items-center gap-2">
                                <section className=" w-[30px] h-[30px] flex justify-center items-center rounded-full shadow-2xl bg-gray-100 border-gray-200 border-solid">
                                    <img width="20" height="20" src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1" />
                                </section>
                                <section className=" w-[30px] h-[30px] flex justify-center items-center shadow-2xl rounded-full bg-gray-100 border-gray-200 border-solid">
                                    <img width="20" height="20" src="https://img.icons8.com/ios/50/right--v1.png" alt="right--v1" />
                                </section>
                            </div>
                            <div className=" lg:w-[180px] lg:h-[190px] rounded-xl  mt-5 flex justify-center items-center" style={{ backgroundColor: 'rgba(160, 215, 231, 1)' }}>
                                <img className=" w-[200px] -translate-x-20" src="https://s3-alpha-sig.figma.com/img/949a/6fd7/caf094c034ac79944104aad94430a9b0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h1x0WX3NQCV4gnawNZEXB3OCftRUMhrY9XRmGwlfydlzJKMuDAh4FaflZ~Di8-XzWiRmtdwVYktIZiJk4vpNXb3Y3FagNH6A4Z3JqvwYMnnkJt5gAFpE6f1hfPkrY~O8Ozr~P~6tVTD6wwsjQBnaH3~a5d8qtJkwMcpI~ZsFGjkBtCUvT0~tqDoX4ssSfVi9L212eiNW4t8EreO73tRLYOUPwvcHTzpbYVpBBTyiMpatPoi0kqh3WVkwIEUOERpN3joGEVqz07VmVPHF8iMoDiSwHPKt9BMMXOqqWG7rllrlfqSwnBKqNr7nwy~boy3PAlZr8NO3pK9QdKAN7eIRQQ__" alt="" />
                            </div>
                        </div>
                        <div className="">
                            {statistics.map((stat, index) => (
                                <div key={index} className=" mt-5">
                                    <div className=" flex justify-between">
                                        <p>{stat.label}</p>
                                        <p>{stat.slim}</p>
                                    </div>
                                    <div className=' w-full h-2 bg-gray-300 rounded-sm'>
                                        <div className={`w-[${stat.slim}] h-2 rounded-sm mt-2 `} style={{ backgroundColor: `${stat.color}` }} />
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                    {/* Chart */}
                    <div className=" p-5 mt-5">
                        <p className=" text-xl font-medium">Affiliate Impressions</p>
                        <div className=" w-full h-full mt-8">
                            <CustomBarChart />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Campaigns;
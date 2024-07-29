import WaveChart from '../../components/WaveChart';
import CustomBarChart from '../../components/CustomBarChart';
import NotificationsComponent from '../../components/NotificationsComponent';
import Sidebar from '../../components/Sidebar';
import MobileSidebar from '../../components/MobileSidebar';

interface imageData {
    icon: string;
    textH: string;
    textP: string;
    bgColor: string;
}

const cardImageData: imageData[] = [
    { icon: 'https://s3-alpha-sig.figma.com/img/949a/6fd7/caf094c034ac79944104aad94430a9b0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OIZSqbUIRMYIk0EnbjON4qTlROrt44olzlODLaSU12yexyMLBSJ~3MvhevHrWVHNza9izuX0UObXDGUK7GDUWAuGqRmq8jOr5JakaMhxaRHhWMZ62-s31rsn1w41CjvfmNqVbtZZ-VkBBID1d5rYCK1nnh3C7rsOqC2eh48Z5ePtIj~Rz1kGCea5NGKjeH9tQdbC8OIuSDLQ1eBJ4Xm9LqVb9tsID9ibrR-I3dj2fTihvo44M4toOa~lU38psDFKS-uNPu06oVMNwEIEgo~qw8tBJxlhObuJockEsm1dz87tnjXLbKv2bYuj4ZekmIIRlgWQTnoqffftcBZdQPPdpA__', textH: 'Bento 3D Kit', textP: 'Illustration', bgColor: 'rgba(255, 162, 192, 1)' },
    { icon: 'https://s3-alpha-sig.figma.com/img/ac38/14bd/2f37e891fd0bf0540f318747fa34f617?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qh9q6I~fdKvXwGnPQmsR6cVc9gJ-FTboR0yeVzoIKxpobiRRcsSHHvnQfVdlZVu2RzmIBnSTUxcwLWeceyWsSsdhwqhUM09o~CTqa9~7BRT7Ps3V7Z5Rfcs888V37RII881PDKBmxjJcRDzy06~5aYmh7CjK9gHkDOy3tAu-SU9snhGU0LOXmVkS7vPABBjbxMauxNAHQpU2acCidbiKzLQKtUVNes7osWFNwEcKtHQndnzQBBOqvmd6aYSzf1tvW1yPNnoD94LIN-73Gf~kb5-CXOuEo8XTyeBJ62bfRBenXLuzMUOgG3WDHix9R9p6RF~PU9Zf333b6lJnjBNoUg__', textH: 'Bento 3D Kit', textP: 'Illustration', bgColor: 'rgba(255, 206, 115, 1)' },
    { icon: 'https://s3-alpha-sig.figma.com/img/99e3/f804/b84df92fa8379f7d32894b47d8402995?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gz3hC9ZxlS2vrufahkeeErpHYEpOLKW0kkCuyjXCBa3-r3eJAGYOwSyKnUIHFF56XAdq4HBVo5UPgZs-ZBIoe2UYykP-kqn7JyIvL8VftF8Fj-E2WzFkROksedGg8T~8HQJQf6YrECRpNDMe60icZMfQ9KTEnZIbNNyq~01BOZQWwK~u5~uvjCFzFprsOFGEzRdvcSqcJrIt4Owu5DuQcMfLSoFrwZuNENwiIEDDPo8UgeDOmqxzuaB~~5ptP7Xw7XXnZarZv5g02M8fKV4NqaEtIs-pKOxb0yKBdzbmApwEYZ69rrXgWbHfEfRs2IB9Dz0Ub7dlC3OpmBl9boUdwg__', textH: 'Collab UI Kit', textP: 'Coded Template', bgColor: 'rgba(160, 215, 231, 1)' },
];


function Overview() {
    return (
        <>
            <div>
                <div className='sm:flex justify-between'>
                    <Sidebar />
                    <MobileSidebar />
                    <div className=' pt-20 lg:pt-0'>
                        {/* Left */}
                        <div className=" w-full  lg:w-[50%] border-solid border-2 px-14 py-7">
                            {/* TITLE */}
                            <div className=" text-center sm:text-left">
                                <p className=" text-2xl">Hi Tam Tran,</p>
                                <section className=" flex flex-col sm:flex justify-start items-center">
                                    <span className=" text-5xl font-semibold">Welcome Back </span>
                                    <img width="48" height="48" src="https://img.icons8.com/emoji/48/waving-hand-emoji.png" alt="waving-hand-emoji" />
                                </section>
                            </div>
                            {/* CAROUSEL */}
                            <div className=" flex flex-col carousel bg-indigo-500 p-12 rounded-3xl mt-10 lg:flex-row justify-center items-center ">
                                <div className="w-full text-white flex flex-col justify-center items-center text-center lg:w-[40%]">
                                    <p className=" text-2xl font-medium">Set a Google Analytics Code</p>
                                    <p className=" text-base my-3">Did you know you can set a Google Analytics code for your products?</p>
                                    <button className=" mt-3 text-black bg-white py-4 px-11 rounded-2xl font-medium">Go Setting</button>
                                </div>
                                <div className=" mt-7 w-[60%] flex justify-center">
                                    <div>
                                        <img width="214" src="https://s3-alpha-sig.figma.com/img/bcf2/0b22/6e41e04a315e3db04aee5e0518fad439?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYZVk905lWDl3B5AWQrmDrUblke7wdlz5NRBdjBrLuO4hGturZX18LDEldv42FpsxlOQ7ymWwWXJdeCmgrHoc8d871a00OtyYu4-~IY5Jb-v9n48elH1oIPenlNLMYPm7kDmzIsPHQdCRS8wNi8-dEYn-07sUpgjZKlCc6SrwCysKErMG9ZKMar8I2cBmqlVz6~5mL6DEbOE4WgkUZ2ZhlqDcFrKaccADYv~I45IF3K9YCvFv90WxgV6OnMJk-SV~LvAWjEKuE-jIR3JYP3Lq6F6lNuZqfPBfUr2ovs2H35YHSTHxWX8aih2vAiqq~nyzfx9hDL0z~jqJBJWYdg~FA__" alt="" />
                                        <div className=" flex justify-center font-semibold text-3xl gap-5 text-white">
                                            <section>.</section>
                                            <section>.</section>
                                            <section>.</section>
                                            <section>.</section>
                                        </div>
                                    </div>
                                    <div className=" translate-x-20 -translate-y-10">
                                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/ffffff/cancel.png" alt="cancel" />
                                    </div>
                                </div>
                            </div>
                            {/* CARDS */}
                            <div className="mt-10 gap-3 flex flex-col  lg:flex-row ">
                                {/* cardBox-1 */}
                                <div className="  w-full h-[350px] bg-white px-8  rounded-2xl py-4 shadow-xl lg:w-[48%]  ">
                                    <p>Earning by items</p>
                                    {
                                        cardImageData.map((data, index) => {
                                            return (
                                                <div key={index} className=" flex justify-between items-center my-5">
                                                    <section className=" w-[56px] h-[56px] rounded-xl" style={{ backgroundColor: `${data.bgColor}` }}>
                                                        <img width="56" height="56" src={data.icon} alt="" />
                                                    </section>
                                                    <section>
                                                        <p className=" text-base font-medium">{data.textH}</p>
                                                        <p className=" text-sm text-gray-400">{data.textP}</p>
                                                    </section>
                                                    <section>
                                                        <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right" />
                                                    </section>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {/* cardBox-2 */}
                                <div className="w-full h-[350px] rounded-2xl py-4 shadow-xl px-2 lg:w-[48%]  " style={{ backgroundColor: "rgba(255, 235, 246, 1)" }}>
                                    <p>Earning</p>
                                    {/* Wave Chart */}
                                    <div className=" w-full py-5 mt-3 bg-white rounded-xl flex flex-col">
                                        <WaveChart />
                                        <button className=" w-[90%] px-5 py-3 mx-auto bg-indigo-500 text-white rounded-xl">Go Analytics</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className=" w-full sm:w-[30%] px-14 py-10">
                            {/* Search panel */}
                            <div className="search flex justify-between">
                                <div className=" flex items-center justify-center gap-2">
                                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" />
                                    <span className=" text-gray-500">Search</span>
                                </div>
                                <NotificationsComponent />
                            </div>

                            {/* Card */}
                            <div className=" flex flex-col items-center gap-6 mt-12 rounded-2xl shadow-2xl px-6 pt-6 pb-14">
                                <p className=" font-semibold text-xl">Your earning this month</p>
                                <p className="  font-semibold text-indigo-500 text-7xl">479.4</p>
                                <p className=" text-sm text-gray-500 text-center">Update your payout <br /> method in Settings</p>
                                <button className=" text-indigo-500 shadow-xl w-[80%] py-5 font-medium rounded-xl">Withdraw All Earning</button>
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
                </div>
            </div>

        </>
    );
}

export default Overview;

import MobileSidebar from "../../components/MobileSidebar";
import NotificationsComponent from "../../components/NotificationsComponent";
import ProductList from "../../components/ProductList ";
import RecentSearches from "../../components/RecentSearches ";
import Sidebar from "../../components/Sidebar";

const Products = () => {
    return (
        <>
            <Sidebar />
            <MobileSidebar />
            <div className=" pt-20 lg:pt-0">
                <div className=" w-full lg:w-[80%] border-solid border-2 px-14 py-7" >
                    <div className=" flex justify-between flex-col lg:flex-row">
                        {/* TITLE */}
                        <div className=" text-center lg:text-left">
                            <p className=" text-2xl">Hi Dash UI8,</p>
                            <section className=" flex justify-start items-center">
                                <span className=" text-5xl font-semibold">Welcome back 🎉</span>
                            </section>
                        </div>
                        {/* Search */}
                        <div className=" flex justify-between gap-8 items-center">
                            <RecentSearches />
                            <NotificationsComponent />
                        </div>
                    </div>
                    <div className=" flex justify-center flex-col h-[500px]  w-full bg-indigo-500 rounded-2xl mt-10 pt-10 pr-20 lg:flex-row lg:h-[300px]">
                        <div className=" w-full lg:w-[40%] text-white p-10 text-center lg:text-left translate-x-10 lg:translate-x-0">
                            <p className=" text-4xl">Your Products</p>
                            <p className=" text-sm my-4">Create Your Product Dashboard in Minutes</p>
                            <button className=" w-[200px] bg-white rounded-xl text-black py-4 font-medium">Check all settings</button>
                        </div>
                        <div className=" w-full lg:w-[60%] overflow-hidden translate-x-10 lg:translate-x-0">
                            <img src="https://s3-alpha-sig.figma.com/img/bcf2/0b22/6e41e04a315e3db04aee5e0518fad439?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYZVk905lWDl3B5AWQrmDrUblke7wdlz5NRBdjBrLuO4hGturZX18LDEldv42FpsxlOQ7ymWwWXJdeCmgrHoc8d871a00OtyYu4-~IY5Jb-v9n48elH1oIPenlNLMYPm7kDmzIsPHQdCRS8wNi8-dEYn-07sUpgjZKlCc6SrwCysKErMG9ZKMar8I2cBmqlVz6~5mL6DEbOE4WgkUZ2ZhlqDcFrKaccADYv~I45IF3K9YCvFv90WxgV6OnMJk-SV~LvAWjEKuE-jIR3JYP3Lq6F6lNuZqfPBfUr2ovs2H35YHSTHxWX8aih2vAiqq~nyzfx9hDL0z~jqJBJWYdg~FA__" alt="" />
                        </div>
                    </div>
                    <div style={{ padding: '16px' }}>
                        <ProductList />
                    </div>
                    <div className=" flex justify-center items-center py-5 mt-5">
                        <button className=" py-3 px-10 bg-black text-white rounded-xl">Load More</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products;
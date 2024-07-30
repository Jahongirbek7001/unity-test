import { Link } from "react-router-dom"


const MobileMenu = () => {
    return (
        <div className=' w-full h-full p-4 rounded-lg '>
            <div className="logo flex justify-center ">
                <img className=" w-[45px]" src="https://s3-alpha-sig.figma.com/img/3fdc/4c93/4adc2852b0757a04f517dec2c9d18a05?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpjlQc4yLAc7msmX13vJMHaBn0IBv0LJKoeeVhguSLB0pU3auyVj5M3KVkCUM~9oMFpCICti7iLaukV3hlI-oY~4MpWuA56Xuob~sFfK7TVPCeEfnzokb6kC3kjXMVBiLsmQgOebY1txb2uEhgO-5AmxfWJNY4kp0kqF42Z3Q8dji6KuBIECEX9G8xGnDgIEVkSOiGSuG0DzyQ9HdIX2VLcFgJji0NhRTJwt4LYvrBGG0pg3x27~TnULVjTe3PVgIvSSQpvGi-F8SAlQBAAxAuZHTGhJUFfjpVHxn3NKqUiJhdK3YDjtEuCn6--wvWUWkYC3o6f~YDpfgeOQKj79fw__" alt="" />
                <div className=" flex">
                    <Link to="/">
                        <p className=" text-3xl ">Unity</p>
                    </Link>
                    <p className=" translate-y-2 text-indigo-500 text-3xl">&#8729;</p>
                </div>
            </div>
            <div className=" w-[216px] my-7 mx-auto">
                <div className="adminTools border-b-2 border-solid border-gray-400 py-3-">
                    <span className=" text-center text-xs px-3">Admin tools</span>
                    <ul className="App-header mt-5 grid gap-4">
                        <div className=" flex items-center p-3">
                            <img width="22" height="22" src="https://img.icons8.com/ios/50/overview-pages-2.png" alt="overview-pages-2" className=" mr-3" />
                            <li><Link className=" text-gray-700" to="/">Overview</Link></li>
                        </div>
                        <div className=" flex items-center p-3">
                            <img width="24" height="24" src="https://img.icons8.com/ios/50/bag-front-view.png" alt="bag-front-view" className=" mr-3" />
                            <li><Link className=" text-gray-700" to="/products">Products</Link></li>
                        </div>
                        <div className=" flex items-center p-3">
                            <img width="24" height="24" src="https://img.icons8.com/windows/32/bar-chart.png" alt="bar-chart"
                                className=" mr-3" />
                            <li><Link className=" text-gray-700" to="/campaigns">Campaigns</Link></li>
                        </div>
                        <div className=" flex items-center p-3">
                            <img width="24" height="24" src="https://img.icons8.com/external-others-iconmarket/64/external-compas-navigation-others-iconmarket-2.png" alt="external-compas-navigation-others-iconmarket-2" className=" mr-3" />
                            <li><Link className=" text-gray-700" to="">Schedules</Link></li>
                        </div>
                        <div className=" flex items-center p-3">
                            <img width="24" height="24" src="https://img.icons8.com/ios/50/wallet--v1.png" alt="wallet--v1" className=" mr-3" />
                            <li><Link className=" text-gray-700" to="">Payouts</Link></li>
                        </div>
                        <div className=" flex items-center p-3">
                            <img width="24" height="24" src="https://img.icons8.com/ios/50/document--v1.png" alt="document--v1" className=" mr-3" />
                            <li><Link className=" text-gray-700" to="">Statement</Link></li>
                        </div>
                        <div className=" flex items-center p-3">
                            <img width="24" height="24" src="https://img.icons8.com/ios/50/settings--v1.png" alt="settings--v1" className=" mr-3" />
                            <li><Link className=" text-gray-700" to="">Settings</Link></li>
                        </div>
                    </ul>
                </div>
                <div className="insights mt-7">
                    <span className=" text-center text-xs px-3">Insights</span>
                    <ul className="App-header mt-5 grid gap-4">
                        <div className=" flex items-center p-3 justify-between">
                            <img width="22" height="22" src="https://img.icons8.com/ios/50/filled-message.png" alt="filled-message" className=" mr-3" />
                            <li className=" w-[60%] text-left"><Link className=" text-gray-700" to="/">Inbox</Link></li>
                            <div className=" px-2 py-1 text-white rounded-full bg-orange-500">18</div>
                        </div>
                        <div className=" flex items-center p-3 justify-between">
                            <img width="22" height="22" src="https://img.icons8.com/ios/50/appointment-reminders--v1.png" alt="appointment-reminders--v1" className=" mr-3" />
                            <li className=" w-[60%] text-left"><Link className=" text-gray-700" to="/products">Notifications</Link></li>
                            <div className=" px-3 py-1 text-white rounded-full bg-orange-500">2</div>
                        </div>
                        <div className=" flex items-center p-3 justify-between">
                            <img width="22" height="22" src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="speech-bubble--v1" className=" mr-3" />
                            <li className=" w-[60%] text-left"><Link className=" text-gray-700" to="/campaigns">Comments</Link></li>
                            <div className=" px-2 py-1 text-white rounded-full bg-orange-500">20</div>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default MobileMenu
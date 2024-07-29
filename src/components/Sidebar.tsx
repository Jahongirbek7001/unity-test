import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className=" hidden sm:w-[20%] h-full box-border py-7">
                <div className="logo flex justify-center ">
                    <img className=" w-[45px]" src="https://s3-alpha-sig.figma.com/img/3fdc/4c93/4adc2852b0757a04f517dec2c9d18a05?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpjlQc4yLAc7msmX13vJMHaBn0IBv0LJKoeeVhguSLB0pU3auyVj5M3KVkCUM~9oMFpCICti7iLaukV3hlI-oY~4MpWuA56Xuob~sFfK7TVPCeEfnzokb6kC3kjXMVBiLsmQgOebY1txb2uEhgO-5AmxfWJNY4kp0kqF42Z3Q8dji6KuBIECEX9G8xGnDgIEVkSOiGSuG0DzyQ9HdIX2VLcFgJji0NhRTJwt4LYvrBGG0pg3x27~TnULVjTe3PVgIvSSQpvGi-F8SAlQBAAxAuZHTGhJUFfjpVHxn3NKqUiJhdK3YDjtEuCn6--wvWUWkYC3o6f~YDpfgeOQKj79fw__" alt="" />
                    <p className=" text-3xl ">Unity<span className=" text-indigo-500">&#8729;</span></p>
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
                    <div className="profile flex justify-between mt-5">
                        <div className=" bg-blue-300 rounded-full w-[43px] h-[43px] overflow-hidden">
                            <img className=" " width="43" height="43" src="https://s3-alpha-sig.figma.com/img/a668/e417/34ff6709e23f91971c6c037ac01880b5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XhYoeOX2peNG3Z0O9TV2OZhmQS-TGV~ewVVT-PYr7am17baAkYDBJUoUsQp2J0yI5YGRj0ycAmuntgyz1ZKYNJQnMgvPoDAnlxEaFQdudEsWPYbkgLfvxS3nWjFHr6Q1xNyIYGaLOQbrgaFW1wwFalOFf94sjOmKEzMMI1wBuPSQKndB-8MuyrDGHSTLYe6sXS~lHbuCxAu5Rxw8zebmMsC5-xhrUaEmZMNZt4qZqJavTmnsWz~NA6GQoIH2iCqGrc4JSwh3gV6JLgWPHJRg2VmSPu1etNh~puBfIqRyOft2x94sDWZ6~3J7F1pH72JqldcEbiccEcz9Co4APZU~5A__" alt="userImage" />
                        </div>
                        <div>
                            <p className=" font-semibold">Tam Tran</p>
                            <p className=" text-gray-600">Free account</p>
                        </div>
                        <div className=" flex items-center">
                            <img width="22" height="22" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-double-arrow-arrows-dreamstale-lineal-dreamstale-11.png" alt="external-double-arrow-arrows-dreamstale-lineal-dreamstale-11" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
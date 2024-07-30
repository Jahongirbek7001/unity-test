import { useState } from "react";
import NotificationsComponent from "./NotificationsComponent";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";


const MobileSidebar = () => {
    const e = false
    const [showRecentSearches, setShowRecentSearches] = useState(e);

    const handleInputClick = () => {
        setShowRecentSearches(!e);
    };
    const handleClose = () => {
        setShowRecentSearches(e);
    }
    return (
        <>
            <div className=" flex justify-between items-center p-5 sm:hidden bg-white w-full h-full ">
                {showRecentSearches ? (
                    <img onClick={handleClose} width="50" height="50" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" />
                ) : (
                    <Link to='/mobileMenu'>
                        <img onClick={handleInputClick} width="50" height="50" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1" />
                    </Link>
                )
                }
                {showRecentSearches && (
                    <>
                        <MobileMenu />
                    </>

                )}
                <div className=" flex justify-between items-center gap-5">
                    <div className=" flex items-center justify-center gap-2">
                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" />
                        <span className=" text-gray-500">Search</span>
                    </div>
                    <NotificationsComponent />
                    <div className=" bg-blue-300 rounded-full w-[43px] h-[43px] overflow-hidden">
                        <img className=" " width="43" height="43" src="https://s3-alpha-sig.figma.com/img/a668/e417/34ff6709e23f91971c6c037ac01880b5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XhYoeOX2peNG3Z0O9TV2OZhmQS-TGV~ewVVT-PYr7am17baAkYDBJUoUsQp2J0yI5YGRj0ycAmuntgyz1ZKYNJQnMgvPoDAnlxEaFQdudEsWPYbkgLfvxS3nWjFHr6Q1xNyIYGaLOQbrgaFW1wwFalOFf94sjOmKEzMMI1wBuPSQKndB-8MuyrDGHSTLYe6sXS~lHbuCxAu5Rxw8zebmMsC5-xhrUaEmZMNZt4qZqJavTmnsWz~NA6GQoIH2iCqGrc4JSwh3gV6JLgWPHJRg2VmSPu1etNh~puBfIqRyOft2x94sDWZ6~3J7F1pH72JqldcEbiccEcz9Co4APZU~5A__" alt="userImage" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileSidebar;
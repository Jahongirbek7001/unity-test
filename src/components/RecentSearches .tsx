import React, { useState } from 'react';

interface RecentSearch {
    icon: string;
    text: string;
    bgColor: string;
}

const recentSearchesData: RecentSearch[] = [
    { icon: 'https://s3-alpha-sig.figma.com/img/949a/6fd7/caf094c034ac79944104aad94430a9b0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OIZSqbUIRMYIk0EnbjON4qTlROrt44olzlODLaSU12yexyMLBSJ~3MvhevHrWVHNza9izuX0UObXDGUK7GDUWAuGqRmq8jOr5JakaMhxaRHhWMZ62-s31rsn1w41CjvfmNqVbtZZ-VkBBID1d5rYCK1nnh3C7rsOqC2eh48Z5ePtIj~Rz1kGCea5NGKjeH9tQdbC8OIuSDLQ1eBJ4Xm9LqVb9tsID9ibrR-I3dj2fTihvo44M4toOa~lU38psDFKS-uNPu06oVMNwEIEgo~qw8tBJxlhObuJockEsm1dz87tnjXLbKv2bYuj4ZekmIIRlgWQTnoqffftcBZdQPPdpA__', text: 'Earning by items', bgColor: 'rgba(255, 162, 192, 1)' },
    { icon: 'https://s3-alpha-sig.figma.com/img/ac38/14bd/2f37e891fd0bf0540f318747fa34f617?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qh9q6I~fdKvXwGnPQmsR6cVc9gJ-FTboR0yeVzoIKxpobiRRcsSHHvnQfVdlZVu2RzmIBnSTUxcwLWeceyWsSsdhwqhUM09o~CTqa9~7BRT7Ps3V7Z5Rfcs888V37RII881PDKBmxjJcRDzy06~5aYmh7CjK9gHkDOy3tAu-SU9snhGU0LOXmVkS7vPABBjbxMauxNAHQpU2acCidbiKzLQKtUVNes7osWFNwEcKtHQndnzQBBOqvmd6aYSzf1tvW1yPNnoD94LIN-73Gf~kb5-CXOuEo8XTyeBJ62bfRBenXLuzMUOgG3WDHix9R9p6RF~PU9Zf333b6lJnjBNoUg__', text: 'This month Statements', bgColor: 'rgba(255, 206, 115, 1)' },
    { icon: 'https://s3-alpha-sig.figma.com/img/99e3/f804/b84df92fa8379f7d32894b47d8402995?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gz3hC9ZxlS2vrufahkeeErpHYEpOLKW0kkCuyjXCBa3-r3eJAGYOwSyKnUIHFF56XAdq4HBVo5UPgZs-ZBIoe2UYykP-kqn7JyIvL8VftF8Fj-E2WzFkROksedGg8T~8HQJQf6YrECRpNDMe60icZMfQ9KTEnZIbNNyq~01BOZQWwK~u5~uvjCFzFprsOFGEzRdvcSqcJrIt4Owu5DuQcMfLSoFrwZuNENwiIEDDPo8UgeDOmqxzuaB~~5ptP7Xw7XXnZarZv5g02M8fKV4NqaEtIs-pKOxb0yKBdzbmApwEYZ69rrXgWbHfEfRs2IB9Dz0Ub7dlC3OpmBl9boUdwg__', text: 'How many sales I got...', bgColor: 'rgba(160, 215, 231, 1)' },
];

const RecentSearches = () => {
    const e = false
    const [showRecentSearches, setShowRecentSearches] = useState(e);

    const handleInputClick = () => {
        setShowRecentSearches(!e);
    };
    const handleClose = () => {
        setShowRecentSearches(e);
    }

    const handleItemClick = (search: RecentSearch) => {
        console.log(search);
    };

    return (
        <div className=' p-4 w-[250px] rounded-lg'>
            <div className=' flex justify-between text-center'>
                {showRecentSearches ? (
                    <button onClick={handleClose} className=' mr-2 border-none bg-none cursor-pointer'>
                        ✕
                    </button>
                ) : (
                    <img className=' w-5 h-5 mt-3 mr-2' src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" />
                )
                }
                <input
                    type="text"
                    placeholder="Type your keywords"
                    className=' box-border w-[calc(100% - 32px)] p-2 rounded-md border-2 border-solid border-gray-100'
                    onClick={handleInputClick}
                />
            </div>
            {showRecentSearches && (
                <div className=' fixed bg-white p-4 rounded-lg'>
                    <div className=' text-sm text-gray-400'>Recent Searches</div>
                    {recentSearchesData.map((search, index) => (
                        <div key={index} className=' flex items-center my-4 mx-0'>
                            <div className=''>
                                <img src={search.icon} alt="" style={{ backgroundColor: `${search.bgColor}` }} className=' w-[40px] h-[40px] rounded-[50%] mr-4' />
                            </div>

                            <span>{search.text}</span>
                            <button
                                onClick={() => handleItemClick(search)}
                                className=' ml-auto border-none bg-none cursor-pointer'
                            >
                                &gt;
                            </button>
                        </div>
                    ))}
                    <button className=' w-full p-3 bg-indigo-500 text-white border-none rounded-lg cursor-pointer'>
                        Advance Search
                    </button>
                </div>

            )}

        </div>
    );
}

export default RecentSearches;

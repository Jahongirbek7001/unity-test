import CircularProgress from "./CircularProgress";

interface imageData {
    icon: string;
    textH: string;
    textP: string;
    bgColor: string;
    value: number;
}

const cardImageData: imageData[] = [
    { icon: 'https://s3-alpha-sig.figma.com/img/949a/6fd7/caf094c034ac79944104aad94430a9b0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OIZSqbUIRMYIk0EnbjON4qTlROrt44olzlODLaSU12yexyMLBSJ~3MvhevHrWVHNza9izuX0UObXDGUK7GDUWAuGqRmq8jOr5JakaMhxaRHhWMZ62-s31rsn1w41CjvfmNqVbtZZ-VkBBID1d5rYCK1nnh3C7rsOqC2eh48Z5ePtIj~Rz1kGCea5NGKjeH9tQdbC8OIuSDLQ1eBJ4Xm9LqVb9tsID9ibrR-I3dj2fTihvo44M4toOa~lU38psDFKS-uNPu06oVMNwEIEgo~qw8tBJxlhObuJockEsm1dz87tnjXLbKv2bYuj4ZekmIIRlgWQTnoqffftcBZdQPPdpA__', textH: 'Unity Comps', textP: 'New 3D Kit', bgColor: 'rgba(255, 162, 192, 1)', value: 40 },
    { icon: 'https://s3-alpha-sig.figma.com/img/ac38/14bd/2f37e891fd0bf0540f318747fa34f617?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qh9q6I~fdKvXwGnPQmsR6cVc9gJ-FTboR0yeVzoIKxpobiRRcsSHHvnQfVdlZVu2RzmIBnSTUxcwLWeceyWsSsdhwqhUM09o~CTqa9~7BRT7Ps3V7Z5Rfcs888V37RII881PDKBmxjJcRDzy06~5aYmh7CjK9gHkDOy3tAu-SU9snhGU0LOXmVkS7vPABBjbxMauxNAHQpU2acCidbiKzLQKtUVNes7osWFNwEcKtHQndnzQBBOqvmd6aYSzf1tvW1yPNnoD94LIN-73Gf~kb5-CXOuEo8XTyeBJ62bfRBenXLuzMUOgG3WDHix9R9p6RF~PU9Zf333b6lJnjBNoUg__', textH: 'Folio Designer', textP: 'UI Design Kit', bgColor: 'rgba(255, 206, 115, 1)', value: 62 },
    { icon: 'https://s3-alpha-sig.figma.com/img/99e3/f804/b84df92fa8379f7d32894b47d8402995?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gz3hC9ZxlS2vrufahkeeErpHYEpOLKW0kkCuyjXCBa3-r3eJAGYOwSyKnUIHFF56XAdq4HBVo5UPgZs-ZBIoe2UYykP-kqn7JyIvL8VftF8Fj-E2WzFkROksedGg8T~8HQJQf6YrECRpNDMe60icZMfQ9KTEnZIbNNyq~01BOZQWwK~u5~uvjCFzFprsOFGEzRdvcSqcJrIt4Owu5DuQcMfLSoFrwZuNENwiIEDDPo8UgeDOmqxzuaB~~5ptP7Xw7XXnZarZv5g02M8fKV4NqaEtIs-pKOxb0yKBdzbmApwEYZ69rrXgWbHfEfRs2IB9Dz0Ub7dlC3OpmBl9boUdwg__', textH: 'Folio Agency', textP: 'UI Design Kit', bgColor: 'rgba(160, 215, 231, 1)', value: 75 },
];

const IconProgress = () => {
    return (
        <>
            <div className=" flex flex-col items-center my-5 border-2 border-solid border-gray-200 rounded-2xl p-5 shadow-lg">
                <h3 className=" text-lg font-medium">Icon Progress</h3>
                <div>
                    {
                        cardImageData.map((data, index) => {
                            return (
                                <div key={index} className=" flex gap-3 justify-between items-center my-5">
                                    <section className=" w-[56px] h-[56px] rounded-xl" style={{ backgroundColor: `${data.bgColor}` }}>
                                        <img width="56" height="56" src={data.icon} alt="" />
                                    </section>
                                    <section>
                                        <p className=" text-lg font-medium">{data.textH}</p>
                                        <p className=" text-sm text-gray-400">{data.textP}</p>
                                    </section>
                                    <section>
                                        <CircularProgress percentage={data.value} />
                                    </section>
                                </div>
                            )
                        })
                    }
                </div>
                <button className=' text-white bg-black py-2 px-6 rounded-xl'>Discover More</button>
            </div>
        </>
    )
}

export default IconProgress;
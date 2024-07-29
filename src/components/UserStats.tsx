
const UserStats = () => {
    return (
        <div className=" flex flex-col items-center my-5 border-2 border-solid border-gray-200 rounded-2xl p-5 shadow-lg">
            <h3 className=" text-lg font-medium">Users</h3>
            <div className="grid grid-cols-2 justify-center items-center gap-10">
                <div className="flex flex-col items-center">
                    <p className=" text-sm text-gray-400">New Users</p>
                    <p className=" text-4xl font-medium">57m</p>
                    <span className=" text-green-500 ml-2">21.77%</span>
                </div>
                <div className=" flex w-full justify-between mt-2 items-end">
                    <div className=" w-1/5 h-[50px]" style={{ backgroundColor: '#ADD8E6' }}></div>
                    <div className=" w-1/5 h-[100px]" style={{ backgroundColor: '#0000FF' }}></div>
                    <div className=" w-1/5 h-[70px]" style={{ backgroundColor: '#ADD8E6' }}></div>
                    <div className=" w-1/5 h-[80px]" style={{ backgroundColor: '#ADD8E6' }}></div>
                    <div className=" w-1/5 h-[50px]" style={{ backgroundColor: '#ADD8E6' }}></div>
                </div>
            </div>
            <div className="grid grid-cols-2 justify-center items-center mt-8 gap-10">
                <div className="flex flex-col items-center">
                    <p className=" text-sm text-gray-400">New Users</p>
                    <p className=" text-4xl font-medium">36k</p>
                    <span className=" text-green-500 ml-2">21.77%</span>
                </div>
                <div className=" flex justify-between mt-2 items-end">
                    <div className=" w-1/5 h-[50px]" style={{ backgroundColor: '#DDA0DD' }}></div>
                    <div className=" w-1/5 h-[80px]" style={{ backgroundColor: '#DDA0DD' }}></div>
                    <div className=" w-1/5 h-[70px]" style={{ backgroundColor: '#DDA0DD' }}></div>
                    <div className=" w-1/5 h-[100px]" style={{ backgroundColor: '#9370DB' }}></div>
                    <div className=" w-1/5 h-[50px]" style={{ backgroundColor: '#DDA0DD' }}></div>
                </div>
            </div>
            <a href="/settings" className=" mt-8 text-indigo-500 ">Go to setting</a>
        </div>
    );
}

export default UserStats;
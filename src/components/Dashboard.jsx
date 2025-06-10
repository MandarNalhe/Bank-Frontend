const Dashboard = () =>{

    return(
        <div className="h-full w-full flex p-[38px] justify-between">
            <div id="left" className="">
                <div id="amt" className="bg-[#ffbd59] w-[500px] h-[248px] rounded-lg p-[30px]">
                    <div className="text-black font-semibold">Total Amount</div>
                    <div className="text-black font-extrabold text-6xl mt-[15px]">2,00,000</div>
                    <div className="flex justify-between mt-[25px] font-semibold">
                        <div>Total Amount</div>
                        <div>Goal</div>
                        <div>Remaining</div>
                    </div>
                    <div className="flex justify-between mt-[10px]">
                        <div>2,00,000</div>
                        <div>4,00,000</div>
                        <div>2,00,000</div>
                    </div>
                </div>
                <div id="upcoming" className="bg-[#ffbd59] w-[500px] h-[268px] mt-[50px] rounded-lg p-[25px]">
                    <div className="flex justify-between ">
                        <div className="font-semibold">Upcoming Deadlines</div>
                        <div>
                            <button className="p-[3px] bg-black text-white rounded-full">See All</button>
                        </div>
                    </div>
                    <div id="gullak">

                    </div>
                </div>
            </div>
            <div id="right">
                <div id="gullaks" className="bg-[#ffbd59] w-[800px] h-[520px] rounded-lg p-[30px]">
                    <div className="flex justify-between">
                        <div className="text-2xl">Gullaks</div>
                        <div className="flex justify-between">
                            <div className="mr-[15px]">This Month |</div>
                            <button className="p-[3px] bg-black text-white rounded-full text-sm">See All</button>
                        </div>
                    </div>
                </div>
                <div id="add">
                    <button className="w-[200px] h-[70px] font-extrabold text-6xl bg-[#ffbd59] mt-[20px] rounded-lg hover:bg-[#ffa800] ml-[300px]">+</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
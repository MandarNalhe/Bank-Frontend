const Dashboard = () =>{

    return(
        <div className="h-full w-full flex p-[38px] justify-between">
            <div id="left" className="">
                <div id="amt" className="bg-[#ffbd59] w-[500px] h-[248px] rounded-lg"></div>
                <div id="upcoming" className="bg-[#ffbd59] w-[500px] h-[268px] mt-[50px] rounded-lg"></div>
            </div>
            <div id="right">
                <div id="gullaks" className="bg-[#ffbd59] w-[800px] h-[520px] rounded-lg">
                </div>
                <div id="add">
                    <button className="w-[200px] h-[70px] font-extrabold text-6xl bg-[#ffbd59] mt-[20px] rounded-lg hover:bg-[#ffa800] ml-[300px]">+</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
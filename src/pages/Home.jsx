import { UsersIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Gullaks from "../components/Gullaks";
import Account from "../components/Account";
import Help from "../components/Help";
UsersIcon
function Home () {
    const navigate = useNavigate();
    const[toggle, setToggle] = useState("1");

    const toggleHandle = (e)=>{
        setToggle(e.target.name)
    }
    return(
        <div className="h-screen w-full bg-black">
            <div id="topbar" className="flex justify-between w-full h-[10%] pt-[32px]">
                <div id="logo" className="text-[#ffa800]  pl-[60px]">
                    <UsersIcon className="h-[74px] w-[45px]" />
                </div>
                <div className="bg-[#ffbd59] h-[50px] w-[1100.3px] rounded-full mr-[60px] mt-[5px] flex justify-around font-semibold">
                    <button className={` py-3 w-[25%] cursor-pointer rounded-full transition duration-200 h-full text-center ${toggle == 1 ? `bg-[#ffa800]`:`bg-[#ffbd59]`}`} name="1" onClick={toggleHandle}>Dashboard</button>
                    <button className={` py-3 w-[25%] cursor-pointer rounded-full transition duration-200 h-full text-center ${toggle == 2 ? `bg-[#ffa800]`:`bg-[#ffbd59]`}`} name="2" onClick={toggleHandle}>Gullaks</button>
                    <button className={` py-3 w-[25%] cursor-pointer rounded-full transition duration-200 h-full text-center ${toggle == 3 ? `bg-[#ffa800]`:`bg-[#ffbd59]`}`} name="3" onClick={toggleHandle}>Account</button>
                    <button className={` py-3 w-[25%] cursor-pointer rounded-full transition duration-200 h-full text-center ${toggle == 4 ? `bg-[#ffa800]`:`bg-[#ffbd59]`}`} name="4" onClick={toggleHandle}>Help</button>
                </div>
            </div>
            <div id="content" className="h-[90%] w-full">
                {
                    toggle == "1" ? <Dashboard/> : toggle == "2" ? <Gullaks/> : toggle == "3" ? <Account/> : <Help/>
                }
            </div>
        </div>
    )
}

export default Home;
import { UsersIcon } from "@heroicons/react/24/solid";
const Navbar = () =>{


    return(
        <div className="flex justify-between">
            <div className="flex text-[#edff06] justify-around w-[20%] ">
               
                <UsersIcon className="w-[15%]"/>
                <div >
                    <p className=" w-[80%]] font-md text-3xl">PIGGY BANK</p>
                </div>
            </div>
            <div className="flex text-white justify-around w-[60%] text-lg">
                <div className="rounded-full border p-2 border-white h-fit w-[20%] text-center">Home</div>
                <div className="rounded-full border  p-2 border-white h-fit w-[20%] text-center">How It Works</div>
                <div className="rounded-full border p-2 border-white h-fit w-[20%] text-center" >Contact</div>
                <div className="rounded-full border p-2 border-white h-fit w-[20%] text-center">About Us</div>

            </div>

        </div>
    )
}
export default Navbar;
import { UsersIcon } from "@heroicons/react/24/solid";
import "../../navbar.css"; // Ensure the path is correct based on your project structure

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex text-[#edff06] justify-around w-[20%]">
        <UsersIcon className="w-[15%]" />
        <div>
          <p className="w-[80%] font-md text-3xl">PIGGY BANK</p>
        </div>
      </div>
      <div className="flex text-white justify-around w-[60%] text-lg">
        <div className="rounded-full p-2 h-fit w-[20%] text-center pulse-btn">
          Home
        </div>
        <div className="rounded-full p-2 h-fit w-[20%] text-center pulse-btn">
          How It Works
        </div>
        <div className="rounded-full p-2 h-fit w-[20%] text-center pulse-btn">
          Contact
        </div>
        <div className="rounded-full p-2 h-fit w-[20%] text-center pulse-btn">
          About Us
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Navbar from "../components/Navbar";
import paisa from "../assets/paisa.jpg";
import dollar from "../assets/dollar.png"
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  const handleRegister = async(e)=>{
    setTimeout(()=>{
      navigate('/register')
    },100)
  }

  return (
    <div className="bg-black h-screen w-full flex-col">
      <div className="h-[10%] p-10 pl-15">
        <Navbar />
      </div>
      <div className="flex text-white justify-between p-15">
        <div className="w-[50%] relative">
          <div className="text-8xl text-extrabold  ">
            MAKE.
            <br />
            DREAM.
            <br />
            HAPPEN.
          </div>
          <div className="p-5 h-[15vh] w-full flex mt-13">
            <button onClick={handleRegister} className="p-3 bg-[#edff06] w-[15vw] h-full text-black text-2xl font-extrabold rounded-full cursor-pointer">
              START SAVING
            </button>
          </div>
          <img src={dollar} alt="" className="h-[25%] w-[20%] absolute bottom-0 left-[40%]" />
        </div>
        <div className="flex items-center justify-center h-[35vw] w-[50%] mr-20 relative">
            <img src={dollar} alt="" className="h-[30%] w-[25%] absolute bottom-[75%] left-0" />
          <img src={paisa} alt="" className="rounded-full h-full w-[60%] " />
          <img src={dollar} alt="" className="h-[25%] w-[20%] absolute bottom-[30%] left-[90%]" />
        </div>
      </div>
    </div>
  );
}
export default Landing;

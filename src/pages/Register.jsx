import { UsersIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import kaala from "../assets/kaala.jpg"
import { stringify } from "postcss";
function Register () {
    const[loginData, setLoginData] = useState({
        email : "",
        password : "",
        otp : ""
    })
    const [value, setValue] = useState(true);
    const handleToggle = ()=> setValue(!value)
    const [otp,setOtp] = useState(false)
    const[registerData , setRegisterData] = useState({
        name :"",
        phone : "",
        email : "",
        password : "",
        dateOfBirth : "",
    })

    const handleOTP = async(e)=>{
        try{
            const response = await fetch("http://localhost:3000/api/v2/users/send-otp",{
                method: "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(loginData)
            })
            const data = await response.json();
            if(response.ok){
                setOtp(!otp)
                alert("otp sent successfully")
            }else{
                alert(`Error : ${data.message}`)
            }
        }catch(error){
            console.error(error)
            alert("Something went wrong")
        }
    }

    const handleLoginChange = async(e)=>{
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value 
    })
    }

    const handleLogin = async(e) =>{
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:3000/api/v2/users/verify-login",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(loginData)
            })

            const data = await response.json();

            if(response.ok){
                localStorage.setItem("accessToken",data.accessToken)
                localStorage.setItem("refreshToken",data.refreshToken)
                alert("Logged in Successfully")
                setTimeout(()=>{
                    navigate("/dashboard")
                },100)
            }else{
                alert(`Error : ${data.message}`)
            }
        }catch(error){
            console.error(error.message);
            alert("Something went wrong");
        }

    }
    const handleRegister = async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/api/v2/users/register", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(registerData) 
            })

            const data = await response.json();

            if(response.ok){
                alert("Registered Successfully");
                setTimeout(()=>{
                    navigate("/dashboard");
                },100)
            }else{
                alert(`Error : ${data.message}`);
            }
        }catch(error){
            console.error("Registration error : ",error);
            alert("something Went Wrong");
        }
    }

    const handleChange = async(e) =>{
        setRegisterData({
            ...registerData,
            [e.target.name] : e.target.value
        })
    }
    return(
        <div className="flex h-screen w-full bg-black " >
            <div id="left" className="w-[45%] h-full p-5">
                <div id="heading" className="flex text-[#edff06] h-[10%] p-5  ml-5">
                    <UsersIcon className="mr-5"/>
                    <p className="text-4xl">PIGGY BANK</p>
                </div>
                <div id="texts" className="p-5 pl-25">
                    <p className="text-4xl text-white font-extrabold">{value?`Welcome Back`:`Create an account`}</p>
                    <p className="text-md text-white mt-2">{value?`Continue saving!`:`Let's get started!`}</p>
                </div>
                <div id="form" className="text-white pl-25">{value ?
                    (<form onSubmit={handleLogin}>
                        <h2 className="text-white ml-5 mt-5">E-Mail</h2>
                        <input type="email" name="email" placeholder="xyz@gmail.com" value={loginData.email} onChange={handleLoginChange} className="border-white border-1 rounded-md p-2  w-[60%]" />
                        <h2 className="text-white ml-5 mt-5">Password</h2>
                        <input type="password" name="password" placeholder="**********" value={loginData.password} onChange={handleLoginChange} className="border-white border-1 rounded-md p-2 w-[60%] " />
                        <h2 className='mt-5 ml-2 font-mono'>One Time Password (OTP)</h2>
                        {otp && <input type='text' name='otp' placeholder='0000' value={loginData.otp} onChange={handleLoginChange} className='w-[60%] p-2 rounded-md border-1 border-white'/> }{ !otp && (<button type='button' onClick={handleOTP} className="text-black bg-[#edff06] p-2 rounded-full mt-5 text-lg w-[60%]">Send Otp </button>)}
                        {otp && <button type='submit' className='text-black bg-[#edff06] p-2 rounded-full mt-5 text-lg w-[60%]'>Login</button>}
                    </form>):
                    (<form onSubmit={handleRegister} className="text-white">
                        <h2 className="text-white ml-5">Name</h2>
                        <input type="text" name="name" placeholder="Akash Gupta" value={registerData.name} onChange={handleChange} className="border-white border-1 rounded-md p-2 w-[60%] " />
                        <h2 className="text-white ml-5 mt-5">Date Of Birth</h2>
                        <input type="date" name="dateOfBirth" placeholder="20/10/2005" value={registerData.dateOfBirth} onChange={handleChange} className="border-white border-1 rounded-md p-2 w-[60%] " />
                         <h2 className="text-white ml-5 mt-5">Number</h2>
                        <input type="number" name="phone" placeholder="987654321" value={registerData.phone} onChange={handleChange} className="border-white border-1 rounded-md p-2 w-[60%] " />
                        <h2 className="text-white ml-5 mt-5">E-Mail</h2>
                        <input type="email" name="email" placeholder="xyz@gmail.com" value={registerData.email} onChange={handleChange} className="border-white border-1 rounded-md p-2  w-[60%]" />
                        <h2 className="text-white ml-5 mt-5">Password</h2>
                        <input type="password" name="password" placeholder="**********" value={registerData.password} onChange={handleChange} className="border-white border-1 rounded-md p-2 w-[60%] " />
                        <br />
                        <button type="submit" className="text-black bg-[#edff06] p-2 rounded-full mt-5 text-lg w-[60%]">Create Account</button>
                    </form>) 
                    }
                    <div className="flex gap-2 ml-7 mt-3 items-center">
                        <p >{value ? `Don't have an account?`:`Already have an account?`}</p>
                        <button onClick={handleToggle} className="text-blue-400">{value?`Register`:`Login`}</button>
                    </div>
                </div>
            </div>
            <div id="right" className="h-full">
                <div id="image" className="h-[100%] w-[100%] relative">
                    <img src={kaala} alt="" className="h-full w-full object-fit"/>
                    <p className="absolute bottom-[65%] left-[25%] text-white text-6xl font-bold">SAVE</p>
                    <p className="absolute bottom-[50%] left-[40%] text-white text-6xl font-bold">THEN</p>
                    <p className="absolute bottom-[35%] left-[55%] text-white text-6xl font-bold">SPEND</p>
                </div>
            </div> 
        </div>
    )
}
export default Register;
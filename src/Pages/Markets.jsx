/* eslint-disable react/no-unescaped-entities */
import MarketDropDown from "../Components/MarketDropDown"
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"
import profile from "../assets/profile.png"
import { TfiTruck } from "react-icons/tfi";
import { PiFolderBold } from "react-icons/pi"
import { HiOutlineArrowPath } from "react-icons/hi2";
import { useState } from "react";
import { BsTools } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa"
import { RiFacebookCircleFill } from "react-icons/ri"
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import "../css/Home.css"
import "../css/Dropdown.css"

export default function Markets() {
  const [dropdownState, setDropdownState] = useState({ open: false });


    const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });
  return (
    <div>
          <section>
            <header className="border-4 border-t-red-700 border-b-red-700">
               <div className="flex">
                   <div className="flex xl:ml-[30rem] lg:ml-[25rem] md:ml-[20rem] ml-[3rem] mt-6">
                     <img src={logo} alt="" className="xl:lg:w-[3rem] xl:lg:h-[3rem] w-[1.5rem] h-[1.5rem]"/>
                     <img src={logo2} alt="" className="xl:lg:h-[6rem] h-[3rem]"/>
                   </div>

                    <div className="xl:ml-[27rem] lg:ml-[19rem] md:ml-[17rem] ml-[4rem] xl:mt-8">
                    <img src={profile} alt="" className="xl:lg:md:h-[3rem] h-[2rem] mt-5 cursor-pointer"/>
                    <p className="font-semibold xl:lg:text-sm text-[6px]">West Africa</p>
                    </div>
               </div>
            </header>
        </section>

        <section className="bg-slate-100 max-h-full">

            <div className="flex pt-3">
                <section className="xl:lg:w-[25%] w-[50%]">
                   <MarketDropDown />
                </section>

                <section className="first-class xl:lg:w-[55%] mt-5">
                  <h1 className="text-center text-4xl  font-bold p-4 text-yellow-900">Merchants & Markets</h1>
                  <p>Welcome to T'Enterprise e-mall MarketPlace, it is a place to visit all the different markets around you.</p>
                  <p className="pt-2">Our marketplace service allows you to sell your products & services under the name of your market where your physical store is located making it easy for your customers to reach you both online & offline</p>

                   <div className="flex  md:flex gap-2 mt-5">
                    <div className="w-[16.3vw] h-[30vh] bg-white shadow-lg">
                    <TfiTruck className="xl:ml-[6rem] lg:ml-[4rem] md:ml-[3rem] text-blue-600 text-[2rem] mt-5" />
                     <p className="font-semibold text-lg text-center pt-2">Order Online</p>
                     <p className="text-center xl:text-xl lg:text-sm font-extralight p-2">
                      Order for any products advertised from the comfort of your home.</p>

                    </div>

                    <div className="w-[16.3vw] h-[30vh] bg-white shadow-lg">
                    <PiFolderBold className="xl:ml-[6rem] lg:ml-[4rem] md:ml-[3rem] text-blue-600 text-[2rem] mt-5"/>
                        <p className="font-semibold text-lg text-center pt-2">Pay on Delivery</p>
                        <p className="text-center xl:text-xl lg:text-sm font-extralight p-2">
                          Pay after confirming the state of your order.</p>

                    </div>

                    <div className=" box-2 w-[16.3vw] h-[30vh] bg-white shadow-lg">
                    <HiOutlineArrowPath className="xl:ml-[6rem] lg:ml-[4rem] md:ml-[3rem] text-blue-600 text-[2rem] mt-5"/>
                        <p className="font-semibold text-lg text-center pt-2">Easy Return.</p>
                        <p className="text-center xl:text-xl lg:text-sm font-extralight p-2 lg:p-1">
                          You can return any product that is damaged or faulty <h5 className="xl:text-sm  lg:text-[10px]">(terms & conditions applies)</h5></p>
                         

                    </div>

                  </div>

                    
                  <div className="flex flex-col  gap-2 md:flex-row mt-3">
                    <div className="w-[16.3vw] h-[32vh] bg-white shadow-lg">
                     <BsTools className="xl:ml-[6rem] lg:ml-[4rem] md:ml-[3rem] text-blue-600 text-[2rem] mt-3"/>
                        <p className="font-semibold text-lg text-center pt-2">Maintenance Services Support</p>
                        <p className="font-extralight xl:text-xl lg:text-sm text-center p-2">
                          You can always come back for maintenance service and upgrades<h5 className="xl:text-sm lg:text-[10px]"> (terms & condition applies)</h5></p>

                     </div>

                     <div className=" box-1 w-[16.3vw]  h-[30vh] bg-white shadow-lg">
                        <p className="font-bold text-lg">Order Online</p>

                    </div>

                  </div>

                  <h4 className="text-xl font-semibold pt-10">Featured Products & Services</h4>
                   
                  <div className="flex flex-col mt-12 ml-">
                      
                      <div className="grid xl:grid-rows-2 lg:grid-rows-2 lg:gap-4 grid-flow-col md:grid-rows-3 md:gap-4 xl:lg:gap-6
                      xl:space-y-12 lg:space-y-10 md:space-y-14">
                          
                         <div className="image-one xl:lg:w-[15vw] h-[30vh] bg-slate-300 xl:mt-12 lg:mt-10 md:mt-14">
                           <p className="font-semibold xl:pt-[15rem] lg:pt-[11.5rem] md:pt-[26.3rem] xl:text-[16px] lg:text-sm">Female Wedding Gown</p>
                           <p className="text-sm">Classy and Fashionable</p>
                         </div>

                          <div className="image-two xl:w-[15vw] h-[30vh] bg-slate-300">
                           <p className="font-semibold xl:pt-[15rem] lg:pt-[11.5rem] md:pt-[26.3rem] xl:text-[16px] lg:text-sm">Female Wedding Gown</p>
                           <p className="text-sm">Classy and Fashionable</p>
                          </div>
                          <div className="image-three xl:lg:w-[15vw] h-[30vh] bg-slate-300">
                           <p className="font-semibold xl:pt-[15rem] lg:pt-[11.5rem] md:pt-[26.3rem] xl:text-[16px] lg:text-sm">Female Wedding Gown</p>
                           <p className="text-sm">Classy and Fashionable</p>
                          </div>

                          <div className="image-four xl:lg:w-[15vw] h-[30vh] bg-slate-300">
                           <p className="font-semibold xl:pt-[15rem] lg:pt-[11.5rem] md:pt-[26.3rem] xl:text-[16px] lg:text-sm">Female Wedding Gown</p>
                           <p className="text-sm">Classy and Fashionable</p>
                          </div>

                          <div className="image-five xl:lg:w-[15vw] h-[30vh] bg-slate-300">
                           <p className="font-semibold xl:pt-[15rem] lg:pt-[11.5rem] md:pt-[26.3rem] xl:text-[16px] lg:text-sm">Female Wedding Gown</p>
                           <p className="text-sm">Classy and Fashionable</p>
                          </div>

                          <div className="image-six xl:lg:w-[15vw] h-[30vh] bg-slate-300">
                           <p className="font-semibold xl:pt-[15rem] lg:pt-[11.5rem] md:pt-[26.3rem] xl:text-[16px] lg:text-sm">Female Wedding Gown</p>
                           <p className="text-sm">Classy and Fashionable</p>
                          </div>
                      </div>
                    
                   </div>

                </section>

                <section className="xl:lg:w-[20%]  w-[50%]  mt-[1rem] xl:ml-[7rem] lg:mr-[3rem] ml-0 md:mt-0 md:mr-[2rem]">
                   <div>
                      <div className="xl:lg:mt-[5rem] xl:flex md:flex  gap-5 space-y-3 xl:lg:md:space-y-0 md:mt-[2rem]">
                        <div className="xl:lg:w-[7vw] md:w-[8vw] md:h-[3vh]  w-[45vw] h-[4vh] xl:h-[7vh] lg:h-[4vh] lg:pt-1 md:text-[10px] lg:text-[10px] rounded-md border-2 border-slate-200 text-center cursor-pointer hover:shadow-xl text-orange-400 lg:mt-3 xl:mt-0 md:mt-3 xl:text-[15px]">
                            New Registration
                        </div>

                        <div className="xl:lg:w-[6vw] md:w-[8vw]   w-[45vw] h-[4.5vh] xl:h-[6vh] lg:h-[3.5vh] md:h-[3vh] rounded-md bg-blue-950 lg:text-[10px] text-center pt-2 md:pt-1 cursor-pointer hover:shadow-xl text-white xl:text-[15px] xl:pt-3">
                            Login
                        </div>
                      </div>

    <span
    
     className="select flex hover:text-orange-400 hover:bg-slate-200 hover:rounded-lg"
     onClick={handleDropdownClick}
    ><FaGlobe className="text-2xl md:pt-2 md:text-3xl xl:-mt-2 lg:mt-2 lg:text-3xl xl:text-3xl"/>
     Show By Location<RiArrowDropDownLine className="text-3xl font-light ml-12"/>
   </span>
  {dropdownState.open && (
  <div className="dropdow">
   <ul>
     <li>Nigeria</li>
    
   </ul>
  </div>
 )}
    <form>
      <input type="text" 
       placeholder="Search" 
        className="xl:w-[15vw] xl:h-[5vh] lg:w-[20vw] md:w-[17vw] md:h-[3vh] w-[44.5vw] h-[5vh] rounded-md pl-3 mt-3 border border-gray-400 lg:ml-3 md:ml-3" 
       />
         <button type="Submit" className="w-[4rem] h-[2rem] border border-gray-400 rounded-lg mt-2 text-pink-900 lg:ml-3 md:ml-3">Search</button>
    </form>
   
     </div>
    </section>

            </div>
            
            <section className="mobile-view xl:lg:w-[100%]">
               <h1 className="text-center xl:lg:text-4xl md:sm:text-lg  font-bold p-4 text-yellow-900">Merchants & Markets</h1>
               <p className="text-[15px] p-2 justify-center w-full text-sm">Welcome to T'Enterprise e-mall MarketPlace, it is a place to visit all the different markets around you.</p>

               <p className="pt-2 text-[15px] p-2 justify-center w-full text-sm">Our marketplace service allows you to sell your products & services under the name of your market where your physical store is located making it easy for your customers to reach you both online & offline</p>

                   <div className="flex flex-col  space-y-6 mt-5 ml-3">
                      <div className="w-[95%] h-[25vh] bg-white shadow-lg">
                         <p className="font-bold text-lg">Order Online</p>

                        </div>

                        <div className="w-[95%] h-[25vh] bg-white shadow-lg">
                         <p className="font-bold text-lg">Order Online</p>

                        </div>

                        <div className="w-[95%] h-[25vh] bg-white shadow-lg">
                          <p className="font-bold text-lg">Order Online</p>

                        </div>
                    
                        <div className="w-[95%] h-[25vh] bg-white shadow-lg">
                         <p className="font-bold text-lg">Order Online</p>

                        </div>
                 </div>
          </section>
            
           

        </section>

        <footer className="bg-white min-h-[40vh]">

          <div className="flex space-x-24 mt-[10rem] justify-center text-[20px] font-normal text-slate-400 cursor-pointer">
             <span className="hover:text-black">eMall</span>
             <span className="hover:text-black">Merchants & Markets</span>
             <span className="hover:text-black">Job Search</span>
             <span className="hover:text-black">Contact</span>
             <span className="hover:text-black">Login</span>
             <span className="hover:text-black">Register</span>
          </div>

          <div className="flex justify-center cursor-pointer text-[25px] gap-6 mt-4">
            <RiFacebookCircleFill  className="text-green-400"/>
            <BsInstagram className="text-pink-600"/>
            <FaTwitter className="text-blue-500"/>
          </div>
          
           <p className="text-center text-lg text-slate-400 pt-5">&copy; 2024 All Right Reserved, T'Enterprise eMall.</p>
        </footer>
    </div>
  )
}

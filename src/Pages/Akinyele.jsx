/* eslint-disable react/no-unescaped-entities */
import logo2 from "../assets/logo2.png"
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa"
import { PiShoppingCartFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa"
import { RiFacebookCircleFill } from "react-icons/ri"
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import MarketDropDown from "../Components/MarketDropDown"
import { useState } from "react"
import "../css/Home.css"
import "../css/Dropdown.css"

export default function Akinyele() {
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

        <section className="bg-slate-100 h-screen">

            <div className="flex pt-3">
               <section className="xl:lg:w-[25%] w-[50%]"> 
                  <MarketDropDown />
               </section>

               <section className="first-class xl:lg:w-[55%] mt-5">
                 <h1 className="text-center text-4xl  font-bold p-4 text-yellow-900">Merchants & Markets</h1>
                 <p className="font-extralight">Welcome to T'Enterprise e-mail MarketPlace, it is a place to visit all the different markets around you.</p>

                 <p className="pt-2 font-extralight">Our marketplace service allows you sell your products & services under the name of your market where your physical store is located making it easy for your customer's to reach you both online & offline</p>

                 <div className="flex">
                    <div>

                    </div>
                    <div className="mt-[5rem]">
                       <span>
                         <h4 className="font-semibold text-lg text-yellow-900">Search Results:</h4>
                         <p className="text-yellow-900 text-sm">Total of 1 Stores Found</p>
                       </span>

                       <span className="flex gap-1 mt-1 ml-3">
                       <PiShoppingCartFill className="text-yellow-900 text-lg"/>
                       <p className="font-semibold text-yellow-900">Akinyele Livestock Market</p>
                       </span>
                       <p className="text-yellow-900 text-sm ml-3">For Goat, Rams & Cows</p>
                       <span className="flex gap-1 mt-1 ml-3"> 
                         <FaBriefcase className="text-yellow-900 text-lg"/> 
                         <p className="text-sm font-bold text-yellow-900">Mother & Child</p>
                       </span>
                    </div>
                 </div>
               </section>

               <section className="xl:lg:w-[20%] w-[50%] mt-[1rem] xl:ml-[7rem] lg:mr-[3rem] ml-0 md:mt-0 md:mr-[2rem]">

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
            <section className="mobile-view xl:lg:w-[55%] mt-5">
                 <h1 className="text-center xl:lg:md:text-4xl text-xl  font-bold p-4 text-yellow-900">Merchants & Markets</h1>
                 <p className="font-extralight p-2">Welcome to T'Enterprise e-mail MarketPlace, it is a place to visit all the different markets around you.</p>

                 <p className="pt-2 font-extralight p-2">Our marketplace service allows you sell your products & services under the name of your market where your physical store is located making it easy for your customer's to reach you both online & offline</p>

                 <div className="flex p-2">
                    <div>

                    </div>
                    <div className="mt-[5rem]">
                       <span>
                         <h4 className="font-semibold text-lg text-yellow-900">Search Results:</h4>
                         <p className="text-yellow-900 text-sm">Total of 1 Stores Found</p>
                       </span>

                       <span className="flex gap-1 mt-1 ml-3">
                       <PiShoppingCartFill className="text-yellow-900 text-lg"/>
                       <p className="font-semibold text-yellow-900">Akinyele Livestock Market</p>
                       </span>
                       <p className="text-yellow-900 text-sm ml-3">For Goat, Rams & Cows</p>
                       <span className="flex gap-1 mt-1 ml-3"> 
                         <FaBriefcase className="text-yellow-900 text-lg"/> 
                         <p className="text-sm font-bold text-yellow-900">Mother & Child</p>
                       </span>
                    </div>
                 </div>
               </section>
        </section>

    <footer className="bg-white min-h-[40vh] xl:lg:md:mt-3  mt-[30rem]">

         <div className="flex xl:lg:space-x-24 space-x-4 xl:lg:md:mt-[10rem] mt-[12rem] justify-center xl:text-[20px] text-[10px] font-normal text-slate-400 cursor-pointer md:pt-20">
             <span className="hover:text-black">eMall</span>
             <span className="hover:text-black">Merchants & Markets</span>
             <span className="hover:text-black">Job Search</span>
             <span className="hover:text-black">Contact</span>
             <span className="hover:text-black">Login</span>
             <span className="hover:text-black">Register</span>
           </div>

           <div className="flex justify-center cursor-pointer text-[25px] gap-6 xl:lg:mt-4 mt-[5rem]">
             <RiFacebookCircleFill  className="text-green-400"/>
             <BsInstagram className="text-pink-600"/>
             <FaTwitter className="text-blue-500"/>
          </div>

        <p className="text-center xl:text-lg text-[10px] text-slate-400 xl:pt-5 pt-[10rem]">&copy; 2024 All Right Reserved, T'Enterprise eMall.</p>
   </footer>
</div>
  )
}

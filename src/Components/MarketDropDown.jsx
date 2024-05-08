import  { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaWandMagicSparkles } from "react-icons/fa6"
import { FaBackward } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "../css/Dropdown.css";

export default function MarketDropDown() {
  
    const [dropdownState, setDropdownState] = useState({ open: false });


 const handleDropdownClick = () =>
 setDropdownState({ open: !dropdownState.open });


  return (
    <div>
       
        <Link to="/markets" className="button flex hover:text-orange-400 mt-4">
         <FaWandMagicSparkles  className="icon-one xl:lg:text-2xl md:text-2xl text-2xl sm:text-sm"/>
          Shop By Category
        </Link>

        <Link
        to="/akinyele"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl "/>
         Akinyele Livestock Market
        </Link>
        
        <Link
         to="/aleshinloye"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
         Aleshinloye Market
        </Link>


        <Link
         to="/"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
         Agbeni Market
        </Link>


        <Link
         to="/"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
          Dugbe Market
        </Link>

        <Link
         to="/"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
          Bashorun Market
        </Link>

        <Link
         to="/"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
         Anajere Market
        </Link>

        <Link
         to="/"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
         New Gbagi Market
        </Link>

        <Link
         to="/"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
         Gbaremu Market
        </Link>


        <Link
         to="/"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
         Sango Market
        </Link>

        <Link
         to="/"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
         Apata Market
        </Link>

        <Link
         to="/"
         className="button flex hover:text-orange-400"
         onClick={handleDropdownClick}
         ><HiOutlineViewGrid className="text-2xl"/>
         Bodija Market
        </Link>

        <Link to="/"><FaBackward className="ml-6 mt-3 cursor-pointer text-[#898888] hover:text-orange-400"/></Link> 
    
  </div>
 
  )
}

import  { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "../css/Dropdown.css";
export default function Dropdown() {
 const [dropdownState, setDropdownState] = useState({ open: false });
 const [dropdownStay, setDropdownStay] = useState({ open: false });

 const handleDropdownClick = () =>
 setDropdownState({ open: !dropdownState.open });

 const handleDropdown = () =>
 setDropdownStay({ open: !dropdownStay.open });


return (
 <div className="container">

<Link to="/markets" className="button flex hover:text-orange-400">
  <HiOutlineViewGrid className="text-2xl"/>
  Marchants & Markets
</Link>
   
   <span
     type="button"
     className="button flex hover:text-orange-400"
     onClick={handleDropdownClick}
    ><HiOutlineViewGrid className="text-2xl"/>
     Professional Services<RiArrowDropDownLine className="text-3xl font-light ml-[4.2rem]"/>
   </span>
  {dropdownState.open && (
  <div className="dropdow">
   <ul>
     <li>Chartered Account & Auditor</li>
     <li>Estate Agents</li>
     <li>Recruitment Agency</li>
     <li>Estate Valuers</li>
     <li>Estate Surveyors</li>
     <li>Quantity Surveyors</li>
     <li>Architects</li>
     <li>Civil Engineer</li>
     <li>Structural Engineers</li>
     <li>Letting Agents</li>
     <li>Independent Project Managers</li>
     <li>Customer & IT Services</li>
     <li>Hardware & Services & Sales</li>
     <li>Software development Services</li>
     <li>Freelance Developers</li>
     <li>Web Hosting Services</li>
     <li>Power & Electricity Supplies</li>
     <li>Insurance Brokers</li>
     <li>Decorators & Accessories</li>
   </ul>
  </div>
 )}

<span
     type="button"
     className="button flex hover:text-orange-400"
     onClick={handleDropdown}
    ><HiOutlineViewGrid className="text-2xl"/>
     Professional Service Provider<RiArrowDropDownLine className="text-3xl font-light ml-[5px]"/>
   </span>
  {dropdownStay.open && (
  <div className="dropdow">
   <ul>
     <li>Chartered Account & Auditor</li>
     <li>Estate Agents</li>
     <li>Recruitment Agency</li>
     <li>Estate Valuers</li>
     <li>Estate Surveyors</li>
     <li>Quantity Surveyors</li>
     <li>Architects</li>
     <li>Civil Engineer</li>
     <li>Structural Engineers</li>
     <li>Letting Agents</li>
     <li>Independent Project Managers</li>
     <li>Customer & IT Services</li>
     <li>Hardware & Services & Sales</li>
     <li>Software development Services</li>
     <li>Freelance Developers</li>
     <li>Web Hosting Services</li>
     <li>Power & Electricity Supplies</li>
     <li>Insurance Brokers</li>
     <li>Decorators & Accessories</li>
   </ul>
  </div>
   )}
 </div>
 );
}
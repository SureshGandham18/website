import React from "react";
import logo from './asserts/logo.png'
import p1 from './asserts/1.png'
import p2 from './asserts/2.png'
import p3 from './asserts/3.png'
import { MdCall } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";

function App() {
  return (
    <div className="text-sm">
      <img className="mx-auto h-32 w-auto" src={logo} alt="logo"/>
      <br/>
      <div className="flex flex-col md:flex-row mx-7 md:gap-36">
        <div>
          <img className="md:h-full  h-96 mx-auto w-auto" src={p1} alt="image1"/>
        </div>
        <div className="md:ml-0 mt-4 md:mt-0">
          <p className="md:-ml-40 md:mt-0 font-bold">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <br/>
          <ul className="list-disc font-medium md:-ml-32">
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <br/>
          <img className="md:-ml-36 md:max-w-3xl max-w-96" src={p2} alt="image2"/>
          <p className="text-justify font-medium md:-ml-40">Government of India has awarded the<span className="font-bold"> "National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>

      <p className="text-center my-4 font-medium">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>

      <img className="md:max-w-4xl max-w-96 my-4 mx-auto" src={p3} alt="image3"/>

      <p className="text-center font-medium">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      <hr className="h-px my-4 bg-gray-200 mx-4 border-0 dark:bg-red-700"/>
      <p className="text-center my-4 font-bold">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      <p className="text-center mb-4 text-xs mx-11 font-medium">CHEMICALS & PROCESS <span className="dark:text-red-700">|</span> POWER WATER & WASTE WATER <span className="dark:text-red-700">|</span> OILS & GAS <span className="dark:text-red-700">|</span> PHARMA <span className="dark:text-red-700">|</span> SUGARS & DISTILLERIES <span className="dark:text-red-700">|</span> PAPER & PULP <span className="dark:text-red-700">|</span> MARINE & DEFENCE <span className="dark:text-red-700">|</span> METAL & MINING <span className="dark:text-red-700">|</span> FOOD & BEVERAGE <span className="dark:text-red-700">|</span> PETROCHEMICAL & REFINERIES <span className="dark:text-red-700">|</span> SOLAR <span className="dark:text-red-700">|</span> BUILDING <span className="dark:text-red-700">|</span> HVAC <span className="dark:text-red-700">|</span> FIRE FIGHTING <span className="dark:text-red-700">|</span> AGRICULTURE & RESIDENTIAL</p>
      <div className="flex flex-col items-center md:flex-row md:dark:bg-red-600 md:text-white justify-between md:px-28 m-3 pt-6 pb-11 ">
        <div className="flex gap-2">
          <span className="md:bg-white md:text-red-600 md:rounded-full md:p-1"><MdCall size={25}/></span>
          <span>Toll free 1800 200 1234</span>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0"> 
          <span><IoLogoFacebook size={25}/></span>
          <a href="https://www.facebook.com/cripumps">www.facebook.com/cripumps</a>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <span><FaGlobe size={25}/></span>
          <a href='https://www.crigroups.com/'>www.crigroups.com</a>
        </div>
      </div>
    </div>
  );
}

export default App;

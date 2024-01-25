import React, { useState } from "react";
import Briefcase from "../Assets/Briefcase.png";
import statBoard from "../Assets/StatBoard.png";
import menu from "../Assets/Circled Menu.png";
import puzzle from "../Assets/Puzzle.png";
import support from "../Assets/Support.png";
import help from "../Assets/Help.png";
import logout from "../Assets/Shutdown.png";

const SideNav = () => {
  const [selected, setSelected] = useState("Dashboard");
  const handleSelected = (option) => {
    setSelected(option);
  };
  return (
    <div className="h-screen w-[20%]  bg-[#1f2538] fixed">
      <div className="w-full h-full md:pt-8 g-red-600 flex flex-col  justify-between">
        {/* for logos */}
        <div className="w-full g-yellow-300 items-center flex justify-center flex-col ">
          <img src={Briefcase} alt="" />
          <div className="px-1">
            <img src={statBoard} alt="" />
          </div>
        </div>
        {/* for side menu */}
        <div className="w-full  md:pt-8 g-red-600 flex flex-col mt-[-100px] md:mt-0 py-2 lg:items-end gap-8 px-2 md:px-0 ">
          <div
            className={`flex flex-row md:gap-3 lg:w-[70%] justify-center md:justify-start items-center  md:pl-6 lg:pl-8  py-3  rounded-md md:rounded-none md:rounded-l-lg ${
              selected === "Dashboard" ? "bg-white" : "bg-[#171f2f] text-white"
            }`}
            onClick={() => handleSelected("Dashboard")}
          >
            <img src={menu} className="md:size-fit "  alt=""/>
            <p className="hidden md:block">Dashboard</p>
          </div>
          <div
            className={`flex flex-row md:gap-3 lg:w-[70%] justify-center md:justify-start items-center  md:pl-6 lg:pl-8 py-3 rounded-md md:rounded-none md:rounded-l-lg ${
              selected === "Support" ? "bg-white" : "bg-[#171f2f] text-white"
            }`}
            onClick={() => handleSelected("Support")}
          >
            <img src={support} className="md:size-fit " alt="" />
            <p className="hidden md:block">Support</p>
          </div>
          <div
            className={`flex flex-row md:gap-3 lg:w-[70%] justify-center md:justify-start items-center  md:pl-6 lg:pl-8  py-3 md:rounded-none rounded-md md:rounded-l-lg ${
              selected ==="Puzzle" ? "bg-white" : "bg-[#171f2f] text-white"
            }`}
            onClick={() => handleSelected("Puzzle")}
          >
            <img src={puzzle} className="md:size-fit " alt=""/>
            <p className="hidden md:block">Puzzle</p>
          </div>
          <div
            className={`flex flex-row md:gap-3 lg:w-[70%] justify-center md:justify-start items-center  md:pl-6 lg:pl-8  py-3 rounded-md md:rounded-none md:rounded-l-lg ${
              selected === "Help" ? "bg-white" : "bg-[#171f2f] text-white"
            }`}
            onClick={() => handleSelected("Help")}
          >
            <img src={help} className="md:size-fit " alt=""/>
            <p className="hidden md:block">Help</p>
          </div>
        </div>
        {/* for log out */}
        <div className="w-full py-4 bg-white flex flex-row gap-3 items-center justify-center">
          <p className="hidden md:block">Logout</p>
          <img src={logout} className="size-fit  " alt=""/>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

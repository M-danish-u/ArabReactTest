import React, { useState } from "react";
import SideNav from "./SideNav";
import profileImg from "../Assets/Rectangle 10.png";
import Graph from "./Graph";
import PieCharts from "./PieChart";
import Table from "./Table";
import ladyPic from "../Assets/media.png";
import insta from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import facebook from "../Assets/facebook.png";
import statBoard from "../Assets/StatBoard.png"
import Briefcase from "../Assets/Briefcase.png"
import BottomNav from "./BottomNav";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(10, prevPage + 1));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" w-[screen] g-red-500 flex flex-row  fsm:lex-row">
      
      <SideNav />
      <div className="h-full w-[100%] sm:w-[80%] relative bg-[#e8eeff] p-2 md:py-6 md:px-10 lg:px-14 sm:ml-[20%] ">
        <div className="bg-[#1f2538] sm:bg-transparent rounded-md p-2  flex flex-row items-center justify-between">
          <p className="md:text-lg hidden sm:block">Good Morning ! 🌞 </p>
          
          <div className=" flex items-center flex-col sm:hidden">
            <img className="h-16" src={Briefcase} alt=""/>
          <img src={statBoard} alt=""/>
          </div>
          <div className=" bg-white flex flex-col md:flex-row p-2 rounded-md items-center justify-center">
            <div className="flex items-center justify-center flex-col">
              <p className="hidden md:block"> John Doe</p>
              <p className="text-xs font-extralight hidden md:block">
                {" "}
                john@doe.com
              </p>
            </div>
            <img src={profileImg} alt="" className="size-fit " />
          </div>
        </div>
        {/* Graph and piechart container */}
        <div className="flex flex-col lg:flex-row   md:mt-10 b-slate-500 justify-between">
          <Graph />
          <PieCharts />
        </div>

        {/* Table container */}
        <div className="b-yellow-400  flex flex-col lg:flex-row md:mt-8">
          <div className="flex flex-col w-full items-center">
            <Table />

            <div className="w-[60%] mt-4 rounded-lg bg-white shadow-2xl lg:hidden  ">
              <div>
                <img src={ladyPic} alt="" className="size-full" />
                <div className=" flex items-center justify-center flex-col gap-1 py-1">
                  <p className="font-semibold">John Deo</p>
                  <p className="text-gray-500 font-semibold">CEO</p>
                  <div className=" flex flex-row gap-3 ">
                    <img src={facebook} alt=""/>
                    <img src={insta} alt=""/>
                    <img src={twitter} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            {/* button bottum */}
            <div className="flex items-center b-orange-500 justify-center mb-20 sm:mb-0  space-x-2 mt-4 flex-wrap">
              <button
                className="bg-gray-300 text-white font-bold py-2 px-4 rounded"
                onClick={handlePrevPage}
              >
                &lt;
              </button>

              {[...Array(10)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    className={`${
                      currentPage === pageNumber
                        ? "border-2 border-black "
                        : "bg-gray-200 text-gray-800"
                    } font-bold py-2 px-4 rounded`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                className="bg-gray-300 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextPage}
              >
                &gt;
              </button>
            </div>
            <BottomNav />
          </div>
             

          <div className="w-[25%] mt-4 rounded-lg bg-white shadow-2xl hidden lg:block ">
            <div>
              <img src={ladyPic} alt="" className="size-full" />
              <div className=" flex items-center justify-center flex-col gap-1 py-1">
                <p className="font-semibold">John Deo</p>
                <p className="text-gray-500 font-semibold">CEO</p>
                <div className=" flex flex-row gap-3 ">
                  <img src={facebook} alt="" />
                  <img src={insta} alt="" />
                  <img src={twitter} alt=""/>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;

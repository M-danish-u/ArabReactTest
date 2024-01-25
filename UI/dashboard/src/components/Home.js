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
    <div className="h-[100v w-[screen] bg-red-500 flex flex-row">
      <SideNav />
      <div className="h-full w-[80%] bg-[#e8eeff] p-2 md:py-6 md:px-10 lg:px-14 ml-[20%]">
        <div className="g-red-400  flex flex-row items-center justify-between">
          <p className="md:text-lg ">Good Morning !</p>
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
        <div className="flex flex-col lg:flex-row  h-[420px md:mt-10 b-slate-500 justify-between">
          <Graph />
          <PieCharts />
        </div>

        {/* Table container */}
        <div className="g-yellow-400  flex flex-col lg:flex-row md:mt-8">
          <div className="flex flex-col w-full items-center">
            <Table />

            <div className="w-[60%] mt-4 rounded-lg bg-white shadow-2xl lg:hidden  ">
              <div>
                <img src={ladyPic} className="size-full" />
                <div className=" flex items-center justify-center flex-col gap-1 py-1">
                  <p className="font-semibold">John Deo</p>
                  <p className="text-gray-500 font-semibold">CEO</p>
                  <div className=" flex flex-row gap-3 ">
                    <img src={facebook} />
                    <img src={insta} />
                    <img src={twitter} />
                  </div>
                </div>
              </div>
            </div>
            {/* button bottum */}
            <div className="flex items-center justify-center h-16 space-x-2 mt-4">
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
          </div>

          <div className="w-[25%] mt-4 rounded-lg bg-white shadow-2xl hidden lg:block ">
            <div>
              <img src={ladyPic} className="size-full" />
              <div className=" flex items-center justify-center flex-col gap-1 py-1">
                <p className="font-semibold">John Deo</p>
                <p className="text-gray-500 font-semibold">CEO</p>
                <div className=" flex flex-row gap-3 ">
                  <img src={facebook} />
                  <img src={insta} />
                  <img src={twitter} />
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

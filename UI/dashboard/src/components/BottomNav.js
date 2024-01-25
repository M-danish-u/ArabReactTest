 import React, { useState } from 'react'
 import menu from "../Assets/Circled Menu.png";
import puzzle from "../Assets/Puzzle.png";
import support from "../Assets/Support.png";
import help from "../Assets/Help.png";
import logout from "../Assets/Shutdown.png";
 
 const BottomNav = () => {
    const [selected, setSelected] = useState("Dashboard");
    const handleSelected = (option) => {
      setSelected(option);
    };

   return (
     <div className='w-full h-20 bg-[#1f2538] items-center justify-between px-3 rounded- fixed bottom-0 left-0 right-0 sm:hidden  flex z-50 '>
        <img src={menu} alt="" className={`size-fit cursor-pointer p-2 rounded  ${selected==="Dashboard"?'bg-white':'bg-[#171f2f]'}`}onClick={() => handleSelected("Dashboard")}/>
        <img src={puzzle} alt="" className={`size-fit cursor-pointer p-2 rounded ${selected==="Puzzle"?'bg-white':'bg-[#171f2f]'}`}onClick={() => handleSelected("Puzzle")}/>
        <img src={support} alt="" className={`size-fit cursor-pointer p-2 rounded ${selected==="Support"?'bg-white':'bg-[#171f2f]'}`}onClick={() => handleSelected("Support")}/>
        <img src={help} alt="" className={`size-fit cursor-pointer p-2 rounded ${selected==="Help"?'bg-white':'bg-[#171f2f]'}`}onClick={() => handleSelected("Help")}/>
        <img src={logout} alt="" className='size-fit cursor-pointer p-4 rounded bg-[#171f2f]'/>
     </div>
   )
 }
 
 export default BottomNav
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Legend, Cell } from "recharts";

const PieCharts = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const pieChartResponse = await axios.get(
          "http://localhost:3001/api/pie-chart"
        );
        setPieChartData(pieChartResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  
    fetchData();
  }, []); 
  
  const colors = pieChartData.map((entry) => {
    const opacity =
      entry.value / Math.max(...pieChartData.map((item) => item.value));
    return `rgba(103, 197, 135, ${opacity})`; 
  });

  const CustomLegend = ({ payload }) => (
    <div className="flex flex-col g-yellow-300 w-fit ] md:pl-8">
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} className="mb-1 b-slate-500  w-fit flex ">
          <svg className="w-4 h-4 mr-1">
            <circle cx="50%" cy="50%" r="50%" fill={entry.color} />
          </svg>
          <span className="text-black text-sm">{entry.payload.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white  rounded-lg   shadow-2xl mt-5">
      <PieChart width={500} height={400} className="">
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Legend content={<CustomLegend />} align="" />
      </PieChart>
    </div>
  );
};

export default PieCharts;

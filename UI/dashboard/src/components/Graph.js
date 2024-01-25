import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Graph = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const graphResponse = await axios.get(
          "http://localhost:3001/api/graph"
        );
        setGraphData(graphResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg flex items-center justify-center mt-5 shadow-2xl">
      <LineChart width={500} height={300} data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="y"
          stroke={"#9ecde7"}
          strokeWidth={3}
          dot={{ fill: "#9ecde7" }}
        />
      </LineChart>
    </div>
  );
};

export default Graph;

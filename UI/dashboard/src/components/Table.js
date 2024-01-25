import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Table = () => {
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const tableResponse = await axios.get('http://localhost:3001/api/table');
        setTableData(tableResponse.data);

        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  
    fetchData();
  }, []); 
  console.log(tableData,'table');
  return (
    <table className="  border-gray-300  w-full rounded-lg shadow-2xl">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2 bg-white">Id</th>
          <th className="border p-2 bg-white">Name</th>
          <th className="border p-2 bg-white">Quantity</th>
          <th className="border p-2 bg-white">Price</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="border p-2">{item.id}</td>
            <td className="border p-2">{item.name}</td>
            <td className="border p-2">{item.quantity}</td>
            <td className="border p-2">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Table />
    </div>
  );
};

export default App;
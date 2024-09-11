// app/gi-foods/page.tsx
'use client';

import { useState } from 'react';
import SearchComponent from '../Components/SearchComponent';

interface FoodData {
  Index: number;
  'Food Names': string;
  'Glycemic Index': string;
  Category: string;
}

const GiFoodsPage = () => {
  const [foodData, setFoodData] = useState<FoodData[]>([]);
  const [highGI, setHighGI] = useState<boolean>(true); // State to toggle high or low GI

  // Fetch the food data based on search input
  const fetchData = async (foodName: string) => {
    try {
      const res = await fetch(`/api/giIndex?foodName=${foodName}`);
      const data = await res.json();
      setFoodData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  // Toggle between high and low GI
  const toggleGI = () => {
    setHighGI(!highGI);
  };

  // Filter the data based on high or low GI
  const filteredData = foodData.filter((food) =>
    highGI ? parseInt(food['Glycemic Index']) > 55 : parseInt(food['Glycemic Index']) <= 55
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GI Foods Search</h1>
      <SearchComponent onSearch={fetchData} />
      
      <button 
        className="mt-4 bg-purple-500 text-white py-2 px-4 rounded"
        onClick={toggleGI}
      >
        {highGI ? 'Show Low GI Foods' : 'Show High GI Foods'}
      </button>

      <div className="mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Food Name</th>
              <th className="px-4 py-2">Glycemic Index</th>
              <th className="px-4 py-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((food) => (
              <tr key={food.Index}>
                <td className="border px-4 py-2">{food['Food Names']}</td>
                <td className="border px-4 py-2">{food['Glycemic Index']}</td>
                <td className="border px-4 py-2">{food.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GiFoodsPage;

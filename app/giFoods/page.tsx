'use client';

import { useState } from 'react';
import SearchComponent from '../Components/SearchComponent';
import SpinnerLoader from '../Components/SpinnerLoader';
import { useIngredients } from '../Contexts/IngredientsContext';

interface FoodData {
  Foods: string;
  Glycemic_Index: string;
  Category: string;
  GI_class: string;
}

const GiFoodsPage = () => {
  const [filteredData, setFilteredData] = useState<FoodData[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [selectedLowGI, setifLowGI] = useState(false);
  const [selectedFood, setSelectedFood]= useState<FoodData>();
  const [isLoading, setIsLoading] = useState(false);
  const { ingredients, addIngredient , removeIngredient} = useIngredients();
  
  // Fetch the food data based on search input from the database
  const fetchData = async (foodName: string) => {
    setifLowGI(false);
    try {
      const res = await fetch(`/api/giIndex?foodName=${foodName}`);
      const data = await res.json();

      if (data.length > 0) {
        filterByCategory(data[0].Foods,data[0].Category,data[0].GI_class);
        setSelectedFood(data[0]);
      }

    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  const filterByCategory = async (term: string, category: string, gi_class: string) => {
    let query = `/api/giIndex/search`;
    if (category) {
      query += `?category=${category}`;
    }
    if (gi_class != 'Low'){
      query += `&class=${"Low"}`;
    }
    setIsLoading(true);
    const res = await fetch(query);
    const data = await res.json();
    setFilteredData(data);
    handleGISelection(term, gi_class, data);
    setIsLoading(false);
  };

  // Handle GI-based messaging
  const handleGISelection = (food: string, gi_class:string,  filteredData: any[]) => {
    if(gi_class == 'Low'){
      // <div className=''>Good Job keep up the good Work? </div>
      setMessage("Good Job keep up the good Work")
      setifLowGI(true);
      setFilteredData([]);
    }
    else if (gi_class != 'Low'){
      setMessage('Consider these low-GI alternatives to maintain a balanced diet.');
      setifLowGI(false);
    }
  };

  const handleIngredientToggle = (food: string) => {
    if (ingredients.includes(food)) {
      removeIngredient(food);
    } else {
      addIngredient(food);
    }
  };

  const renderButton = (food: string) => {
    const isInIngredients = ingredients.includes(food);
    const buttonText = isInIngredients ? 'Remove from Recipe' : 'Add to Recipe';
    const buttonColor = isInIngredients ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600';

    return (
      <button
        className={`text-white py-1 px-4 rounded-lg transition-colors duration-300 ${buttonColor}`}
        onClick={() => handleIngredientToggle(food)}
      >
        {buttonText}
      </button>
    );
  };

  return (
    <>
    
      <SearchComponent onSearch={fetchData}/>
    <div className="p-4">
  {isLoading && <SpinnerLoader message='Fetching your item...'/>}
{/* Low-GI Message and Selected Food Table */}
{selectedLowGI && selectedFood && !isLoading && (
          <div>
            <div className="px-4 py-3 rounded mt-4 bg-green-100 text-green-800 w-3/4 mx-auto">
              <h2 className="font-bold mb-2">Great Job! Keep it up!</h2>
              <p className="mb-2">
                You selected a low-GI food: <strong>{selectedFood.Foods}</strong> (GI: {selectedFood.Glycemic_Index}).
              </p>
            </div>
            <div className="overflow-x-auto mt-4 mx-auto w-3/4">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Food Name</th>
                    <th className="px-4 py-2">Glycemic Index</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">GI Class</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 w-2/6">{selectedFood.Foods}</td>
                    <td className="border px-4 py-2 w-1/6">{selectedFood.Glycemic_Index}</td>
                    <td className="border px-4 py-2 w-1/6">{selectedFood.Category}</td>
                    <td className="border px-4 py-2 w-1/6">{selectedFood.GI_class}</td>
                    <td className='border px-4 py-2 w-1/6'>{renderButton(selectedFood.Foods)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

{(message) && selectedLowGI && !isLoading && (
  <div className="mt-4 px-4 py-3 rounded">
    { (
      <div>
        {/* Insert the message div here */}
        <div className="px-4 py-3 rounded mt-4 mx-auto w-3/4 justify-center">
          <h2 className="font-bold mb-2">Choosing Smarter, Not Harder</h2>
          <p className="mb-2">
            Remember, less processed foods are your best friend! Think <strong>whole wheat roti</strong> instead of naan or <strong>brown rice</strong> over white rice (yes, even for your biryani cravings!). These small swaps can make a big difference in balancing your blood sugar.
          </p>
          <p className="mb-2">
            Your plate needs the power of <strong>fiber, protein, and healthy fats</strong>—they’re like your blood sugar superheroes. Foods like <strong>dal (lentils)</strong>, <strong>chana (chickpeas)</strong>, and <strong>paneer</strong> are great choices. But try to limit sugary treats and foods made with white flour—they’ll cause quick spikes in blood sugar.
          </p>
          <p className="mb-2">
            When possible, <strong>raw is better</strong>. For example, enjoy <strong>cucumbers</strong> or <strong>carrots</strong> raw instead of cooking them, or try to eat your pasta al dente—firm, not too soft. This keeps the GI lower and helps manage your energy levels.
          </p>
          <p className="mb-2">
            And here’s a little trick: <strong>ripeness matters</strong>! A <strong>firm, green banana (kaccha kela)</strong> has a lower GI than a soft, ripe one. So, the next time you’re grabbing a banana, opt for the one that’s a bit less ripe to keep things balanced!
          </p>
        </div>
      </div>
    )}
  </div>
)}

    {(filteredData.length > 0 && !selectedLowGI && !isLoading && selectedFood ) && 
    <>

    <div className="overflow-x-auto mt-4 mx-auto w-3/4">
    <div className="overflow-x-auto mt-4 mx-auto px-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="px-4 py-2">Food Name</th>
            <th className="px-4 py-2">Glycemic Index</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">GI Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 w-3/6">{selectedFood.Foods}</td>
            <td className="border px-4 py-2 w-1/6">{selectedFood.Glycemic_Index}</td>
            <td className="border px-4 py-2 w-1/6">{selectedFood.Category}</td>
            <td className="border px-4 py-2 w-1/6">{selectedFood.GI_class}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>

    <div className="mt-4 mx-auto px-4 py-3 w-3/4 rounded bg-yellow-100 text-yellow-800">
      <p>
        Consider these healthier low-GI alternatives to balance your blood sugar levels better.
      </p>
    </div>

    <div className="overflow-x-auto mt-4 mx-auto w-3/4">
      <div className="overflow-x-auto mt-4 mx-auto px-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="px-4 py-2">Food Name</th>
              <th className="px-4 py-2">Glycemic Index</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">GI Class</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead> 
          <tbody>
            {filteredData
            .filter((item) => item.GI_class === 'Low')
            // .sort(() => 0.5 - Math.random())
            .slice(0, 5)  
            .map((food, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 w-2/6">{food.Foods}</td>
                <td className="border px-4 py-2 w-1/6">{food.Glycemic_Index}</td>
                <td className="border px-4 py-2 w-1/6">{food.Category}</td>
                <td className="border px-4 py-2 w-1/6">{food.GI_class}</td>
                <td className="border px-4 py-2 w-1/6">
                {renderButton(food.Foods)}
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      <div className="px-4 py-3 rounded mt-4 mx-auto w-3/4 justify-center">
          <h2 className="font-bold mb-2">Choosing Smarter, Not Harder</h2>
          <p className="mb-2">
            Remember, less processed foods are your best friend! Think <strong>whole wheat roti</strong> instead of naan or <strong>brown rice</strong> over white rice (yes, even for your biryani cravings!). These small swaps can make a big difference in balancing your blood sugar.
          </p>
          <p className="mb-2">
            Your plate needs the power of <strong>fiber, protein, and healthy fats</strong>—they’re like your blood sugar superheroes. Foods like <strong>dal (lentils)</strong>, <strong>chana (chickpeas)</strong>, and <strong>paneer</strong> are great choices. But try to limit sugary treats and foods made with white flour—they’ll cause quick spikes in blood sugar.
          </p>
          <p className="mb-2">
            When possible, <strong>raw is better</strong>. For example, enjoy <strong>cucumbers</strong> or <strong>carrots</strong> raw instead of cooking them, or try to eat your pasta al dente—firm, not too soft. This keeps the GI lower and helps manage your energy levels.
          </p>
          <p className="mb-2">
            And here’s a little trick: <strong>ripeness matters</strong>! A <strong>firm, green banana (kaccha kela)</strong> has a lower GI than a soft, ripe one. So, the next time you’re grabbing a banana, opt for the one that’s a bit less ripe to keep things balanced!
          </p>
        </div>
      </>
      }
    </div>
  </>
  );
};

export default GiFoodsPage;

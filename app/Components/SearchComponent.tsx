import { SetStateAction, useState } from 'react';

interface SearchProps {
  onSearch: (foodName: string) => void;
}

const foodCategories = ['Bakery products',
'Beverages',
'Breads',
'Breakfast cereals',
'Cereal grains',
'Cookies',
'Crackers',
'Dairy products and alternatives',
'Fruit and fruit product',
'Infant formula and weaning foods',
'Legumes',
'Meal replacement & weight management products',
'Nutritional support products',
'Nuts',
'Pasta and noodles',
'Regional or traditional foods',
'Snack foods and confectionery',
'Soups',
'Sugars and syrups',
'Vegetables'
]

const SearchComponent = ({ onSearch  }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [foodCategory , setFoodcategory] = useState<string>('null');
  const [searchSelected, setSearchSelected] = useState<boolean>(false); // New state for shrinking


  const fetchSuggestions = async (term: string, category: string) => {
    let query = `/api/giIndex/search?searchTerm=${term}`;
    if (foodCategories.includes(category)) {
        query += `&category=${category}`;
    }
    const res = await fetch(query);
    const data = await res.json();
    let filtered = data.slice(5).map((item: { Foods: string }) => item.Foods)
    setSuggestions(filtered);
  };

  const handleSelectChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setFoodcategory(e.target.value)
    setSearchTerm('')
    setSuggestions([]);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm('');
    setSearchTerm(value);
    if(value.length <1){
        setSuggestions([]);
    }
    if (value.length > 1){
        fetchSuggestions(value, foodCategory);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setSearchSelected(true);
    onSearch(suggestion);
  };

  return (
      <>
      <div 
      className={`relative bg-cover bg-right w-full ${
        (searchSelected) ? 'h-[350px]' : 'h-[650px]'
      } transition-all duration-3500 ease-in-out`} // Shrink when search is selected
      style={{ backgroundImage: 'url("/bgfood_image.jpg")' }}

      >
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] space-y-4">
      
      {/* Responsive Grid for dropdown and search input */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Dropdown */}
        <select
          className="select bg-opacity-70 p-2 mb-1 rounded-lg w-full bg-purple-50 shadow-lg text-slate-700"
          onChange={handleSelectChange} 
          defaultValue=""
        >
          {/* Placeholder option */}
          <option value="">
              What kind of food are you looking for?...
          </option>

          {/* Map over foodCategories to create options */}
          {foodCategories.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={handleInputChange}
          className="border bg-opacity-70 p-2 rounded-lg w-full bg-purple-50 shadow-lg"
        />
      </div>

      {/* Render suggestions */}
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-opacity-70 bg-white w-full max-h-80 overflow-y-auto rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-slate-50 p-2 rounded-lg"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
</div>

      </>
      
);
};

export default SearchComponent;
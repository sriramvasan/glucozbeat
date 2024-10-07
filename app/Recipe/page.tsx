'use client';
import React, { useState } from 'react';
import { generateRecipes } from '../actions';
import SpinnerLoader from '../Components/SpinnerLoader';
import { useIngredients } from '../Contexts/IngredientsContext';

interface Recipe{
  name: string,
  description: string, 
  ingredients: string[],
  instruction?: string[],
  instructions?:string[],
}
const cuisines = ["Indian", "Chinese", "Italian", "Vietnamese", "American"]

const RecipeFinder = () => {
  const [query, setQuery] = useState('');
  const [ingredientsSearchResults, setIngredientsSearchResults] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [mustHave, setMustHave] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [cuisine, setCuisine] = useState<string>('')

  const { ingredients,addIngredient, removeIngredient , removeAllIngredients} = useIngredients();

  const handleSelectIngredient = (ingredient:string) => {
    addIngredient(ingredient)
    setQuery('');
    setIngredientsSearchResults([]);
  };

  const searchIngredients = async (searchTerm: string) => {
    if (searchTerm.length > 0){
      try{
        const res = await fetch(`/api/ingredients?foodName=${searchTerm}`);
        const data = await res.json();
        setIngredientsSearchResults(data.map((item: any) => item.Foods));
      }
      catch(error){
        console.error('Error fetching ingredients data:', error);
      }
    }
    if(searchTerm.length == 0){
      setIngredientsSearchResults([])
    }
    
  };

  const handleRemoveIngredient = (ingredient:any) => {
    removeIngredient(ingredient);
  };

  const handleGenerateRecipes = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Fetch and parse the response as JSON
      const response = await generateRecipes(cuisine, ingredients.join(" "), mustHave);
      // console.log("Raw Response:", response);
      setRecipes(response);
    } catch (error) {
      console.error('Error generating recipes:', error);
        setErrorMessage("An error occurred while generating recipes. Please try again later.");
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }


  };

  return (
    <div>
      <div className="flex flex-col items-center p-6 bg-gray-100">
  <h1 className="text-3xl text-purple-700 mb-8 font-bold">Try our Recipe Generator</h1>
  <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
    {/* Left Section */}
    <div className="flex-1 border-r border-gray-200 pr-6">
    <p className="text-gray-600 mb-4 font-semibold">Tell us what ingredients you need to use up</p>
    <p className="text-gray-600 mb-4">What type of cuisine are you looking for??</p>
      <select
        className="select bg-opacity-70 p-2 mb-1 rounded-lg w-full bg-purple-50 shadow-lg text-black"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      >
        <option value="">Select a Cuisine</option>
        {cuisines.map((cuisine, index) => (
          <option key={index} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>
      
      <p className="text-gray-600 mb-4">Start typing the ingredients, and choose from the list for daily cooking. </p>
      <p className="text-gray-600 mb-4"> You must choose at least 3 ingredients.</p>
      <input
        type="text"
        placeholder="Enter ingredient"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          searchIngredients(e.target.value);
        }}
        className="w-full p-2 border border-purple-400 rounded-lg mb-6 focus:outline-none focus:border-purple-600"
      />
      <ul className="max-h-60 overflow-y-scroll">
        {ingredientsSearchResults.map((ingredient) => (
          <li
            key={ingredient}
            className="cursor-pointer p-2 bg-purple-100 text-purple-700 rounded-lg mb-2 hover:bg-purple-200"
            onClick={() => handleSelectIngredient(ingredient)}
          >
            {ingredient}
          </li>
        ))}
      </ul>
      
    </div>
    {/* Right Section */}
    <div className="flex-1 pl-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-purple-700 font-semibold">Your ingredients</h2>
        <button
          onClick={() => { removeAllIngredients(); setCuisine(''); setMustHave(''); }}
          className="text-purple-500 hover:text-purple-700"
        >
          Clear all
        </button>
      </div>
      <ul className="flex flex-wrap gap-4 mb-6">
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="bg-purple-200 text-purple-700 p-2 rounded-lg">
            {ingredient}
            <button
              onClick={() => handleRemoveIngredient(ingredient)}
              className="ml-2 text-red-600 font-bold"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
      {ingredients.length > 2 && (
        <div>
          <label className="text-purple-700 block mb-2">What is your must-have?</label>
          <select
            className="select bg-opacity-70 p-2 mb-1 rounded-lg w-full bg-purple-50 shadow-lg text-black"
            value={mustHave}
            onChange={(e) => setMustHave(e.target.value)}
          >
            <option value="">Select an ingredient</option>
            {ingredients.map((ingredient, index) => (
              <option key={index} value={ingredient}>
                {ingredient}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  </div>
  {/* Generate Recipes Button */}
  {ingredients.length > 2 && (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleGenerateRecipes}
        className={`bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 ${(!mustHave || ingredients.length < 3 || !cuisine) ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!mustHave || ingredients.length < 3 || !cuisine}
      >
        Generate Recipes
      </button>
    </div>
  )}
  {/* Error message UI */}
  {errorMessage && (
    <div className="mt-4 text-red-600 font-semibold">
      {errorMessage}
    </div>
  )}
</div>
      <div className='flex flex-col items-center p-6 bg-slate-100 mb-10'>
        {isLoading && <SpinnerLoader message="Loading your recipes..." />}
        {/* Display Recipes Side by Side */}
        {!isLoading && recipes.length > 0 && (
          <div className="flex justify-between w-full max-w-4xl mt-8">
            {recipes.map((recipe, index) => (
              <div key={index} className="w-1/2 p-4 bg-white shadow-lg rounded-lg mx-2">
                <h3 className="text-xl font-bold text-purple-800">{recipe.name}</h3>
                <p className="text-gray-700 mt-2">{recipe.description}</p>
                <h4 className="text-lg font-semibold mt-4">Ingredients</h4>
                <ul className="list-disc list-inside">
                  {recipe.ingredients.map((ingredient: string, idx: number) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold mt-4">Instructions</h4>
                <ul className="list-disc list-inside">
                  {recipe.instruction?.map((step: string, idx: number) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside">
                  {recipe.instructions?.map((step: string, idx: number) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  
  );
};

export default RecipeFinder;

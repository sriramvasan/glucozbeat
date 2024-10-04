'use client';
import React, { createContext, useState, useContext } from 'react';

interface IngredientsContextProps {
  ingredients: string[];
  addIngredient: (ingredient: string) => void;
  removeIngredient: (ingredient: string) => void;
  removeAllIngredients: () => void;
}

const IngredientsContext = createContext<IngredientsContextProps | undefined>(undefined);

export const useIngredients = () => {
  const context = useContext(IngredientsContext);
  if (!context) {
    throw new Error('useIngredients must be used within an IngredientsProvider');
  }
  return context;
};

export const IngredientsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const addIngredient = (ingredient: string) => {
    if (!ingredients.includes(ingredient)) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients((prevIngredients) => prevIngredients.filter((i) => i !== ingredient));
  };
  
  const removeAllIngredients = () => {
    setIngredients([]);  // Reset ingredients to an empty array
  };

  return (
    <IngredientsContext.Provider value={{ ingredients, addIngredient, removeIngredient , removeAllIngredients}}>
      {children}
    </IngredientsContext.Provider>
  );
};

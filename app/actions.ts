'use server';

import { ChatOpenAI } from "@langchain/openai";

const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY
})

function sanitizeInput(input: string): string {
    return input.replace(/[^\w\s,]/g, ""); 
  }

export async function generateRecipes(selectedCuisine:string,
    ingredients:string,
    mustHave:string,
    // includeImages:boolean
){
    const sanitizedIngredients = sanitizeInput(ingredients);
    const prompt = `
    Generate two ${selectedCuisine} recipes using the following low GI ingredients: ${sanitizedIngredients}.
    Each recipe must include ${mustHave}.
    The output should be in a JSON array format and each object should contain a recipe name field named 
    'name', description field named 'description' , array of ingredients called 'ingredients', and array of step by step 
    instructions named 'instructions', keep the instructions less than 300 words and without numbers for the instruction steps`;
    // Provide the recipes in a clear format.
    // ${includeImages ? 'Also provide a relevant image URL for each recipe.' : ''}
    try{

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); 
        const response = await chatModel.invoke(prompt, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!response || !response.content) {
            throw new Error("No content returned from the OpenAI API");
          }


        console.log(response)
        var content = response.content as string
        content = content.replace(/json/g, '').trim();
        // console.log(content);

        return JSON.parse(content);
    }
    catch (error) {
          console.log('Error generating recipes:', error);
          return { error: 'An error occurred while generating recipes. Please try again later.', status:419}
      }   
}
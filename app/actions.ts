'use server';

import { ChatOpenAI } from "@langchain/openai";

const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY
})

export async function generateRecipes(selectedCuisine:string,
    ingredients:string,
    mustHave:string,
    // includeImages:boolean
){
    const prompt = `
    Generate two ${selectedCuisine} recipes using the following low GI ingredients: ${ingredients}.
    Each recipe must include ${mustHave}.
    The output should be in a JSON array format and each object should contain a recipe name field named 
    'name', description field named 'description' , array of ingredients called 'ingredients', and array of step by step 
    instructions named 'instructions', keep the instructions less than 300 words`;
    
    // Provide the recipes in a clear format.
    // ${includeImages ? 'Also provide a relevant image URL for each recipe.' : ''}

    const response = await chatModel.invoke(prompt);
    // const response = await chatModel.invoke({
    //     messages: [{ role: 'system', content: 'You are a helpful assistant' }, 
    //                { role: 'user', content: prompt }]
    // });

    // const recipes = JSON.parse(response);

    // console.log(response);
    var content = response.content as string
    content = content.replace(/json/g, '').trim();
    return JSON.parse(content);
}
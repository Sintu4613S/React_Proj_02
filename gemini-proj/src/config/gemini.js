// const apikey = import.meta.env.VITE_GEMINI_KEY
// console.log('api key kya h', apikey)

import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from '@google/genai';

// Access the environment variable based on your bundler
const apiKey = import.meta.env.VITE_GEMINI_KEY; // Use process.env.REACT_APP_GEMINI_API_KEY for CRA

if (!apiKey) {
  console.error("Gemini API key is missing! Check your .env file.");
}

// Initialize the Google Gen AI client
const ai = new GoogleGenAI({ apiKey });

export const runChat = async (prompt) => {
  try {
    // For general text-based chat/clones, use gemini-2.5-flash
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
    });


    return response.text;
    console.log('response m kya h', response.text)
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    throw new Error("Gemini saerver is currently unavailable.")
  }
};

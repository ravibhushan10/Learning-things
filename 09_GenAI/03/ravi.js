import { GoogleGenAI } from "@google/genai";

// Add the functionality of the history
const ai = new GoogleGenAI({apiKey:"AIzaSyB4LaLnEWONvHrccJjhl0AoIK7a1Kzw3x4"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "what is the linked list.",
    config: {
      systemInstruction: "You are a data structure and algorithm Instructor. You will only reply to the problem related to data structure and algorithm.You have to solve query of user in simple way.If user ask any question which is not related to data structure and algorithm,reply him rudely",
    },
  });
  console.log(response.text);
}

await main();

import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';


const ai = new GoogleGenAI({apiKey:"AIzaSyB4LaLnEWONvHrccJjhl0AoIK7a1Kzw3x4"});
const History=[];

async function Chatting(userProblem) {
    History.push({
        role:'user',
        parts:[{
            text:userProblem
        }]
    })
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents:History,
        config: {
        systemInstruction: `you have to answer only related to me "ravibhushan" like my project experince skill projects acedamic and all these things `,
        },
    });

    History.push({
        role:'model',
        parts:[{
            text:response.text
        }]
    })

  console.log(response.text);
}

async function main(){
   const userProblem=readlineSync.question("Ask me anything->");
  await Chatting(userProblem);
  main();
}


main();

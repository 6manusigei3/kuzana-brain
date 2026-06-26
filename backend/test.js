require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

// Create the Gemini client using the API key from .env
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Introduce yourself in one sentence.",
    });

    console.log(response.text);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();

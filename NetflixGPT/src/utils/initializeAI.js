import { GoogleGenAI } from "@google/genai";
export default () =>
	new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

import { GoogleGenAI } from "@google/genai";

export default async (prompt) => {
  const res = await fetch("/.netlify/functions/gemini", {
    method: "POST",
    body: prompt,
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.text();
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getDesignInspiration(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert Mehndi (Henna) artist. Based on the following request, provide a detailed, poetic, and artistic description of a custom Mehndi design. Include specific motifs (like peacocks, mandalas, vines), the style (Bridal, Arabic, Minimalist), and the mood it conveys. Keep it under 100 words.
      
      Request: ${prompt}`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get AI inspiration. Please check your API key.");
  }
}

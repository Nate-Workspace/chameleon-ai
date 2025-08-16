import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    console.log("Received prompt:", prompt);

    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });
    console.log("Response text: ", response.text);
    return NextResponse.json(response.text);
  } catch (error: any) {
    console.error(
      "Gemini API error:",
      error.response?.data || error.message
    );

    return NextResponse.json(
      { error: "Failed to fetch from Gemini" },
      { status: 500 }
    );
  }
}

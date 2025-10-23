import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, history } = await req.json();
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    console.log("Received prompt:", prompt);

    const model = new ChatGoogleGenerativeAI({
      apiKey: GEMINI_API_KEY,
      model: "gemini-2.0-flash-exp", // or "gemini-2.0-flash-001"
      temperature: 0.7,
      maxOutputTokens: 2048,
    });

    const messages = [];

    // Optional: Add system message
    // messages.push(new SystemMessage("You are a helpful assistant from the hood"));

    // Add conversation history
    if (Array.isArray(history)) {
      history.forEach((msg: any) => {
        if (msg.role === "user") {
          messages.push(new HumanMessage(msg.content ?? ""));
        } else if (msg.role === "model" || msg.role === "assistant") {
          messages.push(new AIMessage(msg.content ?? ""));
        }
      });
    }

    messages.push(new HumanMessage(String(prompt ?? "")));
    const response = await model.invoke(messages);

    console.log("Response text: ", response.content);

    return NextResponse.json(response.content);
  } catch (error: any) {
    console.error("LangChain Gemini API error:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch from Gemini", details: error.message },
      { status: 500 }
    );
  }
}

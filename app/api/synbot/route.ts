import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Using the key provided by user

export async function POST(req: Request) {
  try {
    console.log("SynBot hit (Gemini)");

    const body = await req.json();
    console.log("Incoming body:", body);

    if (!body?.message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API Key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/openai/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GEMINI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gemini-2.5-flash",
        messages: [
          { role: "system", content: "You are SynBot for Syncrate. You allow users to ask questions about the Syncrate platform. Be helpful, concise, and professional." },
          { role: "user", content: body.message }
        ],
        temperature: 0.7,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error:", errorText);
      throw new Error(`Gemini API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    console.log("Gemini reply:", reply);

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("SynBot ERROR (Gemini):", err);

    return NextResponse.json(
      { error: "SynBot failed" },
      { status: 500 }
    );
  }
}

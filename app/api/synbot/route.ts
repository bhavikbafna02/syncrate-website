import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GROQ_API_KEY = process.env.GROK_API_KEY; // Using the key provided by user

export async function POST(req: Request) {
  try {
    console.log("SynBot hit (Groq)");

    const body = await req.json();
    console.log("Incoming body:", body);

    if (!body?.message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!GROQ_API_KEY) {
      return NextResponse.json(
        { error: "API Key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        // Using a supported model (llama-3.3-70b-versatile is current and powerful)
        model: "llama-3.3-70b-versatile",
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
      console.error("Groq API Error:", errorText);
      throw new Error(`Groq API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    console.log("Groq reply:", reply);

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("SynBot ERROR (Groq):", err);

    return NextResponse.json(
      { error: "SynBot failed" },
      { status: 500 }
    );
  }
}

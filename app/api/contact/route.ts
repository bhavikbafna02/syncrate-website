import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are SynBot, the AI assistant for Syncrate.

Syncrate builds modern websites, AI systems, and workflow automation
for founders and teams who want clarity, not chaos.

Your behavior:
- calm
- precise
- professional
- not salesy
- no hype

Only answer questions related to:
- Syncrate
- its services
- AI, websites, automation (high-level guidance)

If a question is outside scope, politely redirect.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.XAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "grok-2-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      throw new Error("xAI API request failed");
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { error: "SynBot failed to respond" },
      { status: 500 }
    );
  }
}

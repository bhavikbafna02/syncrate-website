import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Parse the request body
    const body = await request.json();
    const { name, email, company, message } = body;

    // 2. Validate input fields
    // Ensure required fields are present and not empty strings
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // 3. Validate email format using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 4. Check for environment variables (Optional explicit check)
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("Missing Supabase environment variables");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // 5. Initialize Supabase Client
    const supabase = await createClient();

    // 6. Insert data into 'contact_messages' table
    const { error } = await supabase.from("contact_messages").insert({
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || null, // store null if empty
      message: message.trim(),
    });

    // 7. Handle Database Errors
    if (error) {
      console.error("Supabase insertion error:", error);
      return NextResponse.json(
        { error: "Failed to save your message. Please try again later." },
        { status: 500 }
      );
    }

    // 8. Return Success Response
    return NextResponse.json(
      { message: "Message received successfully." },
      { status: 200 }
    );

  } catch (error) {
    // 9. Handle Unexpected Server Errors
    console.error("Internal API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

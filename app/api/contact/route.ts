import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Requires RESEND_API_KEY to be set (see .env.example). Until it is set,
// the route responds with a clear error so the UI can fall back to mailto.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, program, message, company } = body ?? {};

    // Honeypot field — bots fill hidden fields, humans don't.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== "string" || !emailPattern.test(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@aderalabs.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "AdEra Labs Website <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email delivery isn't configured yet. Please email hello@aderalabs.com directly, or ask your developer to add RESEND_API_KEY.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const safe = (v: unknown) =>
      String(v ?? "").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const html = `
      <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color:#B61568; margin-bottom: 4px;">New website inquiry</h2>
        <p style="color:#726780; margin-top:0;">Submitted via aderalabs website contact form</p>
        <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding:8px 0; color:#726780; width:120px;">Name</td><td style="padding:8px 0;"><strong>${safe(name)}</strong></td></tr>
          <tr><td style="padding:8px 0; color:#726780;">Email</td><td style="padding:8px 0;">${safe(email)}</td></tr>
          <tr><td style="padding:8px 0; color:#726780;">Phone</td><td style="padding:8px 0;">${safe(phone) || "—"}</td></tr>
          <tr><td style="padding:8px 0; color:#726780;">Interested in</td><td style="padding:8px 0;">${safe(program) || "—"}</td></tr>
        </table>
        <div style="margin-top:16px; padding:16px; background:#FDF1F6; border-radius:10px;">
          <p style="margin:0; white-space: pre-wrap; color:#160B17;">${safe(message)}</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New inquiry from ${name} — AdEra Labs website`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message right now. Please try emailing hello@aderalabs.com directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or email hello@aderalabs.com." },
      { status: 500 }
    );
  }
}

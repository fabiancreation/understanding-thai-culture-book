import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { unwrittenLaws, unwrittenLawsMeta } from "@/content/unwritten-laws";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().email(),
  source: z.enum(["sample_chapter", "footer", "arc_request"]).default("footer"),
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM = process.env.RESEND_FROM_EMAIL ?? "Fabian <hello@understandingthaiculture.com>";
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://understanding-thai-culture-book.vercel.app";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const { email, source } = parsed.data;

  if (!resend) {
    console.warn("[subscribe] RESEND_API_KEY not set. Email:", email, "source:", source);
    return NextResponse.json({ ok: true, mode: "dev" });
  }

  try {
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
        unsubscribed: false,
      });
    }

    if (source === "sample_chapter") {
      await resend.emails.send({
        from: FROM,
        to: email,
        subject: "The Ten Unwritten Laws of Thailand",
        html: tenLawsEmail(),
        text: tenLawsText(),
      });
    } else {
      await resend.emails.send({
        from: FROM,
        to: email,
        subject: "Welcome · Dispatches from the research",
        html: welcomeEmail(),
        text: welcomeText(),
      });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] Resend error", err);
    return NextResponse.json({ error: "Delivery failed" }, { status: 500 });
  }
}

function tenLawsEmail() {
  const lawsHtml = unwrittenLaws
    .map(
      (l) => `
      <div style="margin: 28px 0; padding-bottom: 24px; border-bottom: 1px solid #e5d3af;">
        <div style="display: inline-block; font-family: 'Fraunces', Georgia, serif; font-size: 28px; line-height: 1; letter-spacing: -0.02em; color: #b8821a; margin-bottom: 8px;">${String(l.number).padStart(2, "0")}</div>
        <h2 style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; line-height: 1.25; letter-spacing: -0.01em; color: #1c140e; margin: 0 0 12px 0; font-weight: 500;">${l.title}</h2>
        <p style="font-family: Georgia, serif; font-size: 16px; line-height: 1.7; color: #3d2f25; margin: 0;">${l.body}</p>
        <p style="font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: #946525; margin: 12px 0 0 0;">from ${l.chapter}</p>
      </div>
    `,
    )
    .join("");
  return `
    <div style="font-family: Georgia, serif; max-width: 640px; margin: 0 auto; color: #1c140e; background: #faf3e4; padding: 40px 28px;">
      <p style="font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #2a4e3a; margin: 0;">UNDERSTANDING THAI CULTURE · VOL I</p>
      <h1 style="font-family: 'Fraunces', Georgia, serif; font-size: 34px; letter-spacing: -0.02em; margin: 20px 0 4px 0; font-weight: 500;">${unwrittenLawsMeta.title}</h1>
      <p style="font-family: Georgia, serif; font-style: italic; font-size: 17px; color: #3d2f25; margin: 0 0 24px 0;">${unwrittenLawsMeta.subtitle}</p>
      <hr style="border:0; border-top: 1px solid #e7a82a; width: 56px; margin: 24px 0;" />
      <p style="font-family: Georgia, serif; font-size: 16px; line-height: 1.7;">${unwrittenLawsMeta.intro}</p>
      ${lawsHtml}
      <p style="font-family: Georgia, serif; font-size: 16px; line-height: 1.75; color: #3d2f25; margin-top: 32px;">${unwrittenLawsMeta.outro}</p>
      <p style="font-family: Georgia, serif; font-size: 16px; line-height: 1.75;">The full book is here: <a href="${SITE}#buy" style="color:#3d6950;">Understanding Thai Culture</a>.</p>
      <hr style="border:0; border-top: 1px solid #e5d3af; margin: 32px 0;" />
      <p style="font-family: Georgia, serif; font-size: 14px; color: #5a4a3d;">Fabian Arndt · Bangkok</p>
    </div>
  `;
}

function tenLawsText() {
  const laws = unwrittenLaws
    .map(
      (l) => `${String(l.number).padStart(2, "0")}. ${l.title}\n\n${l.body}\n\n(from ${l.chapter})\n`,
    )
    .join("\n");
  return `UNDERSTANDING THAI CULTURE · VOL I\n\n${unwrittenLawsMeta.title}\n${unwrittenLawsMeta.subtitle}\n\n${unwrittenLawsMeta.intro}\n\n${laws}\n${unwrittenLawsMeta.outro}\n\nThe full book: ${SITE}#buy\n\nFabian Arndt`;
}

function welcomeEmail() {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1c140e; background: #faf3e4; padding: 32px;">
      <p style="font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #2a4e3a;">DISPATCHES FROM THE RESEARCH</p>
      <hr style="border:0; border-top: 1px solid #e7a82a; width: 48px; margin: 24px 0;" />
      <p style="font-size: 17px; line-height: 1.7;">Thank you for subscribing. The first dispatch goes out when the next scene I write about asks to be written about.</p>
      <p style="font-size: 14px; color: #5a4a3d;">Fabian</p>
    </div>
  `;
}

function welcomeText() {
  return `DISPATCHES FROM THE RESEARCH\n\nThank you for subscribing. The first dispatch goes out when the next scene I write about asks to be written about.\n\nFabian`;
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Cornerstone Website <onboarding@resend.dev>",
    to: "Cody@Cornerstoneworksmi.com",
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 32px; border: 1px solid #C9A227;">
        <h2 style="color: #C9A227; margin: 0 0 24px;">New Message from Cornerstone Website</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #9CA3AF; width: 100px;">Name</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #9CA3AF;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C9A227;">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 8px 0; color: #9CA3AF;">Phone</td>
            <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #C9A227;">${phone}</a></td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; color: #9CA3AF; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; color: #ffffff;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <hr style="border-color: #C9A227; margin: 24px 0;" />
        <p style="color: #9CA3AF; font-size: 12px; margin: 0;">Sent from cornerstoneworksmi.com · Reply directly to this email to respond to ${name}.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend("re_RAdWAycL_NGzVWA8f2pDR99xPQug8r4wG");

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: "Email service not configured" }, { status: 500 });
    }
    const body = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Hi Nepal Treks <onboarding@kshetritej.com.np>",
      to: ["info@hinepaltreks.com"],
      subject: `New Inquiry from ${body.name || 'Unknown'}`,
      react: EmailTemplate({ 
        firstName: body.name || 'Customer',
        email: body.email || '',
        message: body.message || '',
        contactNumber: body.contactNumber || ''
      }),
    });

    if (error) {
      return Response.json({ error: error.message || "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

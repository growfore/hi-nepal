import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend("re_VXPZQLqe_GYcuBHZqV7dwomBy7mQzaqHZ");

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Hi Nepal Travel and Treks Private Limited <booking@hinepaltreks.com>",
      to: ["info@hinepaltreks.com"],
      subject: `New Inquiry from Hi Nepal: ${
        body.data.fullName || "Unknown"
      } asks for ${body.data.destination}`,
      react: EmailTemplate({
        firstName: body.data.fullName || "Customer",
        destination: body.data.destination || "",
        groupSize: body.data.groupSize || "",
        experienceLevel: body.data.experienceLevel || "",
        email: body.data.email || "",
        message: body.data.message || "",
        contactNumber: body.data.phone || "",
      }),
    });

    if (error) {
      return Response.json(
        { error: error || "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Processing contact form submission:", data);

    // Validate required fields
    if (!data.name || !data.email || !data.selectedPlan) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to admin
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_SMTP_USER,
      to: process.env.NEXT_PUBLIC_SMTP_USER,
      subject: "New Subscription Registration",
      html: `
        <h1>New User Registration</h1>
        <p>User Details:</p>
        <ul>
          <li>Name: ${data.name}</li>
          <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
          <li>Selected Plan: ${data.plan}</li>
          ${data.phone ? `<li>Phone: <a href="tel:${data.phone}">${data.phone}</a></li>` : ""}
          ${data.message ? `<li>Message: ${data.message}</li>` : ""}
        </ul>
      `,
    });

    return NextResponse.json(
      { message: "Registration processed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing registration:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

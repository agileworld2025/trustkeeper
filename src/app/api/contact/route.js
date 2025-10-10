import nodemailer from 'nodemailer';

const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || 'agileworldtechnologies007@gmail.com',
    pass: process.env.EMAIL_PASS || 'ofzv mikr szfv dgkn',
  },
};

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport(emailConfig);

    // Email to customer (confirmation)
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #0F1417 0%, #1a1f24 100%); padding: 30px; border-radius: 10px; color: white;">
          <h1 style="color: #00d4ff; font-size: 28px; margin-bottom: 20px; text-align: center;">TrustKeeper</h1>
          <h2 style="color: white; font-size: 24px; margin-bottom: 20px;">Thank You for Contacting Us!</h2>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Dear ${name},
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to TrustKeeper. We have received your message and will get back to you within 24 hours.
          </p>
          <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #00d4ff; margin-bottom: 15px;">Your Message Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 5px 0;"><strong>Message:</strong> ${message}</p>
          </div>
          <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
            Our mission is to make finance more accessible, transparent, and secure for everyone.
          </p>
          <p style="font-size: 14px; color: #ccc; margin-top: 30px; text-align: center;">
            Best regards,<br>
            The TrustKeeper Team
          </p>
        </div>
      </div>
    `;

    // Email to owner (notification)
    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #0F1417 0%, #1a1f24 100%); padding: 30px; border-radius: 10px; color: white;">
          <h1 style="color: #00d4ff; font-size: 28px; margin-bottom: 20px; text-align: center;">TrustKeeper - New Contact Form Submission</h1>
          <h2 style="color: white; font-size: 24px; margin-bottom: 20px;">New Customer Inquiry</h2>
          <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #00d4ff; margin-bottom: 15px;">Customer Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 5px 0;"><strong>Message:</strong> ${message}</p>
            <p style="margin: 5px 0;"><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="font-size: 14px; color: #ccc; margin-top: 30px; text-align: center;">
            Please respond to this inquiry within 24 hours.
          </p>
        </div>
      </div>
    `;

    // Send email to customer
    const customerMailOptions = {
      from: emailConfig.auth.user,
      to: email,
      subject: 'Thank You for Contacting TrustKeeper',
      html: customerEmailHtml,
    };

    // Send email to owner
    const ownerMailOptions = {
      from: emailConfig.auth.user,
      to: emailConfig.auth.user, // Send to owner's email
      subject: `New Contact Form Submission from ${name}`,
      html: ownerEmailHtml,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(ownerMailOptions)
    ]);

    return Response.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending emails:', error);
    return Response.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    );
  }
}

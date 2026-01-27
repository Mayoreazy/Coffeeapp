import nodemailer from 'nodemailer';

const hasSMTP = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

const transporter = hasSMTP ? nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}) : null;

export const sendOrderConfirmation = async (email: string, orderDetails: any) => {
  const mailOptions = {
    from: '"Brew & Bean" <orders@brewandbean.com>',
    to: email,
    subject: `Order Confirmation - #${orderDetails.id}`,
    text: `Thank you for your order! Your ${orderDetails.itemName} is being brewed and will arrive in approx ${orderDetails.eta}. Total: $${orderDetails.total}`,
    html: `
      <div style="font-family: sans-serif; color: #333;">
        <h1 style="color: #d97706;">Brew & Bean Confirmation</h1>
        <p>Thank you for choosing Brew & Bean! Your order is being prepared with care.</p>
        <div style="background: #fef3c7; padding: 20px; border-radius: 10px;">
          <h2 style="margin-top: 0;">Order #$${orderDetails.id}</h2>
          <p><strong>Item:</strong> ${orderDetails.itemName}</p>
          <p><strong>Total:</strong> $${orderDetails.total}</p>
          <p><strong>ETA:</strong> ${orderDetails.eta}</p>
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">
          Arriving at Antigravity Landing Zone A. Your beverage is guaranteed to arrive at 160°F+ or it's free.
        </p>
      </div>
    `,
  };

  try {
    if (!transporter) {
      console.warn('Skipping email: SMTP not configured');
      return false;
    }
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', email);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

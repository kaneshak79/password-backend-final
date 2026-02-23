import SibApiV3Sdk from "sib-api-v3-sdk";

export const sendMail = async (to, link) => {
  try {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
      to: [{ email: to }],
      sender: { email: process.env.BREVO_EMAIL_USER, name: "Your App Name" },
      subject: "Password Reset",
      htmlContent: `
        <h2>Password Reset</h2>
        <p>Click the link below to reset your password:</p>
        <a href="${link}">${link}</a>
        <p>This link will expire in 10 minutes.</p>
      `
    });

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(`Password reset email sent to ${to}`);
  } catch (err) {
    console.error("Brevo API send email error:", err);
  }
};
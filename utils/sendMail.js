import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const sendMail = async (to, link) => {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const sendSmtpEmail = {
    sender: { email: "kaneshak79@gmail.com" },
    to: [{ email: to }],
    subject: "Password Reset",
    htmlContent: `
      <h3>Password Reset</h3>
      <p>Click below to reset:</p>
      <a href="${link}">${link}</a>
    `,
  };

  await apiInstance.sendTransacEmail(sendSmtpEmail);
};

export default sendMail;
// // // import SibApiV3Sdk from "sib-api-v3-sdk";

// // // export const sendMail = async (to, link) => {
// // //   try {
// // //     const defaultClient = SibApiV3Sdk.ApiClient.instance;
// // //     const apiKey = defaultClient.authentications["api-key"];
// // //     apiKey.apiKey = process.env.BREVO_API_KEY;

// // //     const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// // //     const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
// // //       to: [{ email: to }],
// // //       sender: { email: process.env.BREVO_EMAIL_USER, name: "Your App Name" },
// // //       subject: "Password Reset",
// // //       htmlContent: `
// // //         <h2>Password Reset</h2>
// // //         <p>Click the link below to reset your password:</p>
// // //         <a href="${link}">${link}</a>
// // //         <p>This link will expire in 10 minutes.</p>
// // //       `
// // //     });

// // //     await apiInstance.sendTransacEmail(sendSmtpEmail);
// // //     console.log(`Password reset email sent to ${to}`);
// // //   } catch (err) {
// // //     console.error("Brevo API send email error:", err);
// // //   }
// // // };

// // // import SibApiV3Sdk from "sib-api-v3-sdk";

// // // export const sendMail = async (to, link) => {
// // //   try {
// // //     const defaultClient = SibApiV3Sdk.ApiClient.instance;
// // //     const apiKey = defaultClient.authentications["api-key"];
// // //     apiKey.apiKey = process.env.BREVO_API_KEY;

// // //     const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// // //     const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
// // //       to: [{ email: to }],
// // //       sender: { email: process.env.BREVO_EMAIL_USER, name: "Your App Name" },
// // //       subject: "Password Reset",
// // //       htmlContent: `
// // //         <h2>Password Reset</h2>
// // //         <p>Click the link below to reset your password:</p>
// // //         <a href="${link}">${link}</a>
// // //         <p>This link will expire in 10 minutes.</p>
// // //       `
// // //     });

// // //     const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
// // //     console.log("Email sent successfully:", response);
// // //   } catch (err) {
// // //     console.error("Brevo API send email error:", err);
// // //   }
// // // };

// // // Install with: npm install resend
// // const { Resend } = require('resend');

// // const resend = new Resend(process.env.RESEND_API_KEY);

// // const sendMail = async (userEmail, token) => {
// //     const baseUrl = process.env.BASE_URL; // e.g., https://your-app.onrender.com
// //     const link = `${baseUrl}/verify-email?token=${token}`;

// //     try {
// //         const data = await resend.emails.send({
// //             from: 'onboarding@resend.dev', // Use your verified domain later
// //             to: userEmail,
// //             subject: 'Verify Your Email',
// //             html: `<p>Click <a href="${link}">here</a> to verify your account.</p>`
// //         });
// //         console.log('Email sent:', data);
// //     } catch (error) {
// //         console.error('Error sending email:', error);
// //     }
// // };

// import { Resend } from "resend";
// // Initialize Resend with your API Key
// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendMail = async (to, link) => {
//   try {
//     const data = await resend.emails.send({
//       // Resend requires a verified domain or 'onboarding@resend.dev' for testing
//       from: "Password Reset <onboarding@resend.dev>", 
//       to: [to],
//       subject: "Password Reset",
//       html: `
//         <div style="font-family: sans-serif; padding: 20px;">
//           <h2>Password Reset</h2>
//           <p>Click the button below to reset your password:</p>
//           <a href="${link}" style="background: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
//             Reset Password
//           </a>
//           <p>Alternatively, copy and paste this link: <br> ${link}</p>
//           <p style="color: #666; font-size: 12px;">This link will expire in 10 minutes.</p>
//         </div>
//       `,
//     });

//     console.log("Email sent successfully:", data);
//     return data;
//   } catch (error) {
//     console.error("Resend Error:", error);
//     throw new Error("Failed to send reset email.");
//   }
// };

import { Resend } from "resend";

export const sendMail = async (to, link) => {
  // Access the key inside the function to ensure process.env is populated
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is missing from environment variables");
  }

  try {
    await resend.emails.send({
      from: "Password Reset <onboarding@resend.dev>",
      to: [to],
      subject: "Password Reset",
      html: `<p>Click <a href="${link}">here</a> to reset your password.</p>`,
    });
    console.log("Email sent!");
  } catch (error) {
    console.error("Resend Error:", error);
  }
};
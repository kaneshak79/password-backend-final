// // // // // // // // // import SibApiV3Sdk from "sib-api-v3-sdk";

// // // // // // // // // export const sendMail = async (to, link) => {
// // // // // // // // //   try {
// // // // // // // // //     const defaultClient = SibApiV3Sdk.ApiClient.instance;
// // // // // // // // //     const apiKey = defaultClient.authentications["api-key"];
// // // // // // // // //     apiKey.apiKey = process.env.BREVO_API_KEY;

// // // // // // // // //     const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// // // // // // // // //     const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
// // // // // // // // //       to: [{ email: to }],
// // // // // // // // //       sender: { email: process.env.BREVO_EMAIL_USER, name: "Your App Name" },
// // // // // // // // //       subject: "Password Reset",
// // // // // // // // //       htmlContent: `
// // // // // // // // //         <h2>Password Reset</h2>
// // // // // // // // //         <p>Click the link below to reset your password:</p>
// // // // // // // // //         <a href="${link}">${link}</a>
// // // // // // // // //         <p>This link will expire in 10 minutes.</p>
// // // // // // // // //       `
// // // // // // // // //     });

// // // // // // // // //     await apiInstance.sendTransacEmail(sendSmtpEmail);
// // // // // // // // //     console.log(`Password reset email sent to ${to}`);
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Brevo API send email error:", err);
// // // // // // // // //   }
// // // // // // // // // };

// // // // // // // // // import SibApiV3Sdk from "sib-api-v3-sdk";

// // // // // // // // // export const sendMail = async (to, link) => {
// // // // // // // // //   try {
// // // // // // // // //     const defaultClient = SibApiV3Sdk.ApiClient.instance;
// // // // // // // // //     const apiKey = defaultClient.authentications["api-key"];
// // // // // // // // //     apiKey.apiKey = process.env.BREVO_API_KEY;

// // // // // // // // //     const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// // // // // // // // //     const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
// // // // // // // // //       to: [{ email: to }],
// // // // // // // // //       sender: { email: process.env.BREVO_EMAIL_USER, name: "Your App Name" },
// // // // // // // // //       subject: "Password Reset",
// // // // // // // // //       htmlContent: `
// // // // // // // // //         <h2>Password Reset</h2>
// // // // // // // // //         <p>Click the link below to reset your password:</p>
// // // // // // // // //         <a href="${link}">${link}</a>
// // // // // // // // //         <p>This link will expire in 10 minutes.</p>
// // // // // // // // //       `
// // // // // // // // //     });

// // // // // // // // //     const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
// // // // // // // // //     console.log("Email sent successfully:", response);
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Brevo API send email error:", err);
// // // // // // // // //   }
// // // // // // // // // };

// // // // // // // // // Install with: npm install resend
// // // // // // // // const { Resend } = require('resend');

// // // // // // // // const resend = new Resend(process.env.RESEND_API_KEY);

// // // // // // // // const sendMail = async (userEmail, token) => {
// // // // // // // //     const baseUrl = process.env.BASE_URL; // e.g., https://your-app.onrender.com
// // // // // // // //     const link = `${baseUrl}/verify-email?token=${token}`;

// // // // // // // //     try {
// // // // // // // //         const data = await resend.emails.send({
// // // // // // // //             from: 'onboarding@resend.dev', // Use your verified domain later
// // // // // // // //             to: userEmail,
// // // // // // // //             subject: 'Verify Your Email',
// // // // // // // //             html: `<p>Click <a href="${link}">here</a> to verify your account.</p>`
// // // // // // // //         });
// // // // // // // //         console.log('Email sent:', data);
// // // // // // // //     } catch (error) {
// // // // // // // //         console.error('Error sending email:', error);
// // // // // // // //     }
// // // // // // // // };

// // // // // // // import { Resend } from "resend";
// // // // // // // // Initialize Resend with your API Key
// // // // // // // const resend = new Resend(process.env.RESEND_API_KEY);

// // // // // // // export const sendMail = async (to, link) => {
// // // // // // //   try {
// // // // // // //     const data = await resend.emails.send({
// // // // // // //       // Resend requires a verified domain or 'onboarding@resend.dev' for testing
// // // // // // //       from: "Password Reset <onboarding@resend.dev>", 
// // // // // // //       to: [to],
// // // // // // //       subject: "Password Reset",
// // // // // // //       html: `
// // // // // // //         <div style="font-family: sans-serif; padding: 20px;">
// // // // // // //           <h2>Password Reset</h2>
// // // // // // //           <p>Click the button below to reset your password:</p>
// // // // // // //           <a href="${link}" style="background: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
// // // // // // //             Reset Password
// // // // // // //           </a>
// // // // // // //           <p>Alternatively, copy and paste this link: <br> ${link}</p>
// // // // // // //           <p style="color: #666; font-size: 12px;">This link will expire in 10 minutes.</p>
// // // // // // //         </div>
// // // // // // //       `,
// // // // // // //     });

// // // // // // //     console.log("Email sent successfully:", data);
// // // // // // //     return data;
// // // // // // //   } catch (error) {
// // // // // // //     console.error("Resend Error:", error);
// // // // // // //     throw new Error("Failed to send reset email.");
// // // // // // //   }
// // // // // // // };

// // // // // // import { Resend } from "resend";

// // // // // // export const sendMail = async (to, link) => {
// // // // // //   // Access the key inside the function to ensure process.env is populated
// // // // // //   const resend = new Resend(process.env.RESEND_API_KEY);

// // // // // //   if (!process.env.RESEND_API_KEY) {
// // // // // //     throw new Error("RESEND_API_KEY is missing from environment variables");
// // // // // //   }

// // // // // //   try {
// // // // // //     await resend.emails.send({
// // // // // //       from: "Password Reset <onboarding@resend.dev>",
// // // // // //       to: [to],
// // // // // //       subject: "Password Reset",
// // // // // //       html: `<p>Click <a href="${link}">here</a> to reset your password.</p>`,
// // // // // //     });
// // // // // //     console.log("Email sent!");
// // // // // //   } catch (error) {
// // // // // //     console.error("Resend Error:", error);
// // // // // //   }
// // // // // // };

// // // // // import { Resend } from "resend";

// // // // // export const sendMail = async (to, link) => {
// // // // //   // 1. Check if the key exists FIRST
// // // // //   const apiKey = process.env.RESEND_API_KEY;

// // // // //   if (!apiKey) {
// // // // //     console.error("❌ ERROR: RESEND_API_KEY is missing from .env file or Render settings.");
// // // // //     return; // Stop here so the app doesn't crash
// // // // //   }

// // // // //   // 2. Initialize ONLY if key exists
// // // // //   const resend = new Resend(apiKey);

// // // // //   try {
// // // // //     // 3. Capture the response from Resend to see errors
// // // // //     const { data, error } = await resend.emails.send({
// // // // //       from: "Password Reset <onboarding@resend.dev>",
// // // // //       to: [to],
// // // // //       subject: "Password Reset",
// // // // //       html: `
// // // // //         <div style="font-family: sans-serif;">
// // // // //           <h2>Password Reset</h2>
// // // // //           <p>Click the link below to reset your password:</p>
// // // // //           <a href="${link}" style="color: blue;">${link}</a>
// // // // //           <p>This link expires in 10 minutes.</p>
// // // // //         </div>
// // // // //       `,
// // // // //     });

// // // // //     if (error) {
// // // // //       return console.error("❌ Resend API Error:", error);
// // // // //     }

// // // // //     console.log("✅ Email sent successfully! ID:", data.id);
// // // // //   } catch (error) {
// // // // //     console.error("❌ Unexpected System Error:", error);
// // // // //   }
// // // // // };


// // // // import { Resend } from "resend";

// // // // /**
// // // //  * Sends a password reset email using the Resend HTTP API.
// // // //  * @param {string} to - The recipient's email address.
// // // //  * @param {string} link - The full URL (frontend) where the user resets their password.
// // // //  */
// // // // export const sendMail = async (to, link) => {
// // // //   // 1. Validate API Key existence to prevent crashes
// // // //   const apiKey = process.env.RESEND_API_KEY;

// // // //   if (!apiKey) {
// // // //     console.error("❌ ERROR: RESEND_API_KEY is missing from environment variables.");
// // // //     return { success: false, error: "Missing API Key" };
// // // //   }

// // // //   // 2. Initialize Resend
// // // //   const resend = new Resend(apiKey);

// // // //   try {
// // // //     // 3. Send the email
// // // //     const { data, error } = await resend.emails.send({
// // // //       // IMPORTANT: Use 'onboarding@resend.dev' for the free tier
// // // //       from: "Auth System <onboarding@resend.dev>",
// // // //       to: [to],
// // // //       subject: "Password Reset Request",
// // // //       // Using 'html' ensures the link is clickable in Gmail
// // // //       html: `
// // // //         <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
// // // //           <h2 style="color: #333;">Password Reset</h2>
// // // //           <p style="color: #555; font-size: 16px;">
// // // //             We received a request to reset your password. Click the button below to choose a new one:
// // // //           </p>
// // // //           <div style="text-align: center; margin: 30px 0;">
// // // //             <a href="${link}" style="background-color: #007bff; color: white; padding: 14px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
// // // //               Reset Password
// // // //             </a>
// // // //           </div>
// // // //           <p style="color: #777; font-size: 14px;">
// // // //             If the button doesn't work, copy and paste this link into your browser:
// // // //           </p>
// // // //           <p style="word-break: break-all; color: #007bff; font-size: 12px;">
// // // //             ${link}
// // // //           </p>
// // // //           <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
// // // //           <p style="color: #999; font-size: 12px; text-align: center;">
// // // //             This link will expire in 10 minutes. If you did not request this, please ignore this email.
// // // //           </p>
// // // //         </div>
// // // //       `,
// // // //     });

// // // //     if (error) {
// // // //       console.error("❌ Resend API Error:", error);
// // // //       return { success: false, error };
// // // //     }

// // // //     console.log("✅ Email sent successfully! Message ID:", data.id);
// // // //     return { success: true, id: data.id };
    
// // // //   } catch (err) {
// // // //     console.error("❌ Unexpected System Error:", err);
// // // //     return { success: false, error: err.message };
// // // //   }
// // // // };

import { Resend } from "resend";

export const sendMail = async (to, link) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // IMPORTANT: Note the { data, error } destructuring
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [to],
      subject: "Password Reset",
      html: `<p>Click <a href="${link}">here</a> to reset.</p>`,
    });

    if (error) {
      // This will show you exactly why Resend rejected the email
      console.error("❌ Resend API Refused request:", error);
      return;
    }

    console.log("✅ Resend accepted the email:", data);
  } catch (err) {
    console.error("❌ Network/System Error:", err);
  }
};

// // import axios from 'axios';

// // export const sendMail = async (to, link) => {
// //   const BREVO_API_KEY = process.env.BREVO_API_KEY;

// //   const data = {
// //     sender: { name: "kanesha", email: "kaneshak79@gmail.com" }, // Your VERIFIED Gmail
// //     to: [{ email: to }],
// //     subject: "Password Reset Request",
// //     htmlContent: `
// //       <div style="font-family: Arial, sans-serif; padding: 20px;">
// //         <h2>Reset Your Password</h2>
// //         <p>Click the link below to reset your password. It expires in 10 minutes.</p>
// //         <a href="${link}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
// //           Reset Password
// //         </a>
// //       </div>
// //     `
// //   };

// //   try {
// //     const response = await axios.post('https://api.brevo.com/v3/smtp/email', data, {
// //       headers: {
// //         'api-key': BREVO_API_KEY,
// //         'Content-Type': 'application/json'
// //       }
// //     });
// //     console.log("✅ Email sent via Brevo:", response.data);
// //     return { success: true };
// //   } catch (error) {
// //     console.error("❌ Brevo Error:", error.response ? error.response.data : error.message);
// //     return { success: false };
// //   }
// // };

// import axios from 'axios';

// export const sendMail = async (to, link) => {
//   // 1. Get your API Key from your .env or Render Environment Variables
//   const BREVO_API_KEY = process.env.BREVO_API_KEY;

//   const emailData = {
//     // sender: The email you VERIFIED in Brevo 'Senders' tab
//     sender: { name: "kanesha", email: "kaneshak79@gmail.com" }, 
//     to: [{ email: to }],
//     subject: "Password Reset Request",
//     htmlContent: `
//       <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
//         <h2>Password Reset</h2>
//         <p>You requested a password reset. Click the button below to continue:</p>
//         <a href="${link}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
//           Reset Password
//         </a>
//         <p style="margin-top: 20px; font-size: 12px; color: #666;">
//           If the button doesn't work, copy this link: ${link}
//         </p>
//       </div>
//     `
//   };

//   try {
//     // This is the REAL API link. Do not change it.
//     const response = await axios.post('https://api.brevo.com/v3/smtp/email', emailData, {
//       headers: {
//         'api-key': BREVO_API_KEY,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     });

//     console.log("✅ Email sent! Brevo Message ID:", response.data.messageId);
//     return { success: true };
//   } catch (error) {
//     // This will print the specific reason if Brevo rejects the request
//     console.error("❌ Brevo Error:", error.response ? error.response.data : error.message);
//     return { success: false, error: error.response?.data || error.message };
//   }
// };
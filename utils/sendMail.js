import nodemailer from "nodemailer";

export const sendResetMail = async (email, link) => {

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,             // use 587 instead of 465
  secure: false,         // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password
  },
});

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     }
//   });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset",
    html: `
     <h2>Password Reset</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${link}">${link}</a>
    `
  };

  await transporter.sendMail(mailOptions);
};
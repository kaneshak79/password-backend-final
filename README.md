# Password Reset System Backend

A secure Node.js backend for handling user password resets using Express.js, MongoDB, bcrypt, and email-based reset tokens. This backend allows users to request password reset links, verify tokens, and update passwords securely.

## 1. Table of Contents

Introduction

Features

Technologies

Getting Started

Environment Variables

API Endpoints

Folder Structure

Usage

License

## 2. Introduction

This backend implements a robust password reset workflow that includes:

Secure token generation with expiration

Email delivery of reset links

Token verification before password reset

Secure password hashing with bcrypt

Password reset functionality after token validation

The system is designed to integrate with a frontend application using the CLIENT_URL for password reset pages.

## 3. Features

Request password reset via email

Generate secure, time-limited tokens

Verify reset tokens before allowing password change

Update password securely with bcrypt hashing

Send password reset emails via Nodemailer

## 4. Technologies

Node.js – JavaScript runtime

Express.js – Web framework

MongoDB & Mongoose – Database and ODM

bcrypt – Password hashing

crypto – Secure token generation

Nodemailer – Email delivery

## 5. Getting Started

### 5.1 Prerequisites

Node.js >= 18.x

MongoDB database (local or cloud)

Gmail account for sending reset emails

### 5.2 Installation

Clone the repository:

git clone <repository-url>

cd password-reset-system-backend

Install dependencies:

npm install

Create a .env file in the root directory (see Section 6).

Start the server:

npm run dev

The backend will run at http://localhost:5000

 by default.

## 6. Environment Variables

Create a .env file in the project root with the following variables:

PORT=5000

MONGODB="mongodb+srv://<db_user>:<db_password>@cluster0.mongodb.net/passwordreset"

JWT_SECRET="your_jwt_secret"

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_app_password

CLIENT_URL=http://localhost:5173

## Important Notes:

EMAIL_PASS should be a Gmail App Password.

CLIENT_URL points to the frontend application where users will reset their password.

## 7. API Endpoints

### 7.1 Forgot Password

URL: /api/auth/forgot-password

Method: POST

Request Body:

{
  "email": "user@example.com"
}

Success Response:

{
  "message": "Reset link sent to email"
}

Error Response:

{
  "message": "User not found"
}

## 7.2 Verify Reset Token

URL: /api/auth/reset-password/:token

Method: GET

Parameters: token – Password reset token

Success Response:

{
  "message": "Token valid",
  "token": "<token>"
}

Error Response:

{
  "message": "Invalid or expired token"
}

## 7.3 Reset Password

URL: /api/auth/reset-password/:token

Method: POST

Parameters: token – Password reset token

Request Body:

{
  "password": "newpassword123"
}

Success Response:

{
  "message": "Password reset successful"
}

Error Response:

{
  "message": "Invalid or expired token"
}

## 8. Folder Structure

password-reset-system-backend/

│

├─ Controllers/

│   └─ auth.controller.js

│

├─ Database/

│   └─ dbConfig.js

│

├─ Models/

│   └─ user.model.js

│

├─ Routers/

│   └─ auth.routes.js

│

├─ utils/

│   └─ mailer.js

│

├─ index.js

├─ package.json

├─ .env

└─ README.md

## 9. Usage

Start the server using npm run dev.

Use a REST client such as Postman to test the endpoints:

Request password reset → receive email with reset link

Verify token → ensure the token is valid

Reset password → update the password securely

Connect your frontend application to handle password reset pages using CLIENT_URL.

## 10. License

This project is licensed under the MIT License.

## Author

Kanesha K

Software Engineer

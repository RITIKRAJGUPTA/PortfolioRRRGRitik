const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "https://ritik-portfolio-1.onrender.com", // your frontend URL
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST /send route
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.USER_EMAIL,
      subject: `Message from ${name}`,
      text: `
You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Email sending failed" });
  }
});

// Root route (optional for testing)
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Backend is running", timestamp: Date.now() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

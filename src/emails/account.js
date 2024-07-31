const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./config/dev.env" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


async function sendWelcomeEmail(email, name) {
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Thanks for joining!",
    text: `Welcome to the task-app ${name}, Let me know how you get along with the app.`,
  
  });

  console.log("Message sent: %s", info.messageId);
}

async function sendCancelationEmail(email, name) {
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

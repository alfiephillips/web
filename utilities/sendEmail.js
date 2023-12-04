const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  secure: true,
  port: 465,
  auth: {
    user: "mail@alfiephillips.com",
    pass: process.env.ZOHO_API_KEY
  },
});

const sendEmail = async (subject, html) => {
    const mailOptions = {
        from: "mail@alfiephillips.com",
        to: "mail@alfiephillips.com",
        subject,
        html
    };

    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.error(error)
    }
}

module.exports = sendEmail
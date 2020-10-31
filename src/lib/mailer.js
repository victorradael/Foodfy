const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_API_TOKEN,
    pass: process.env.MAIL_JWT_TOKEN,
  },
});

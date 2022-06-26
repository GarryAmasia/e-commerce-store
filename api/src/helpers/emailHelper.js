"use strict";
// const nodemailer = require("nodemailer");

import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (emailInfo) => {
  console.log(
    process.env.MAIL_SMTP,
    Number(process.env.MAIL_PORT),
    process.env.MAIL_USER,
    process.env.MAIL_PASSWORD
  );
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_SMTP,
    port: Number(process.env.MAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(emailInfo);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export const sendAdminUserVerificationMail = (userObj) => {
  const link = `${process.env.DOMAIN}/admin-verification?e=${userObj.email}&c=${userObj.varificationCode}`;
  // "http://localhost:3000/admin-verification?e=" +
  // userObj.email +
  // "&c=" +
  // userObj.verificationCode;

  const emailInfo = {
    from: '"ABC store 👻"' + process.env.MAIL_USER, // sender address
    to: userObj.email, // list of receivers
    subject: "Account verification required", // Subject line
    text: `Hi ${userObj.fName} please follow the link to activate your admin account ${link}`, // plain text body
    html: `
    <p>Hellow ${userObj.fName}</p>
    <br />
    <br />
    <p>Please follow the link below to verify and activate your admin account</p>
    <br/>
    <br/>
    <a href = "${link}">${link}</a>
    <br/>
    <p>
    -------------
    <br/>
    xyz commerce
    </p>
    `, // html body
  };
  sendMail(emailInfo);
};

import Email from "../models/Email.js";
import nodemailer from "nodemailer";

// @desc Send email
// @route POST /api/emails
export const sendEmailController = async (req, res) => {
  const { to, subject, body } = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  try {
    await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text: body });
    const email = await Email.create({ to, subject, body, sentBy: req.user._id, status: "sent" });
    res.status(201).json(email);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get sent emails
// @route GET /api/emails
export const getEmailsController = async (req, res) => {
  const emails = await Email.find({ sentBy: req.user._id });
  res.json(emails);
};

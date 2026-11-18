const express = require('express');
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill all required fields' });
  }

  try {
    // 1. save in database
    await Message.create({ name, email, phone, subject, message });

    // 2. send email only if email settings exist in .env
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: 'New contact message: ' + subject,
          text: 'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\n' + message,
        });
      } catch (mailErr) {
        console.log('Email failed:', mailErr.message);
      }
    }

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
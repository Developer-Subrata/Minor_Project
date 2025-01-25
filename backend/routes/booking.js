const express = require('express');
const { Booking } = require('../models/User');
const nodemailer = require('nodemailer');
//const twilio = require('twilio'); // Import Twilio for WhatsApp messages
const router = express.Router();

// Twilio credentials (use environment variables for security)
// const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
// const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioWhatsAppFrom = 'whatsapp:+14155238886'; // Twilio Sandbox WhatsApp Number

// const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

router.post('/', async (req, res) => {
    const { name, email, phone, date, time, guests, bookingCode } = req.body;

    const newBooking = new Booking({
        name,
        email,
        phone,
        date,
        time,
        guests,
        bookingCode
    });

    try {
        const savedBooking = await newBooking.save();

        // Send confirmation email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Booking Confirmation',
            text: `Dear,  ${name},\n\nThank you for your booking at Rannaghar! Here are your booking details:
            \n\nBooking Code: ${bookingCode}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nPhone:  +91 ${phone}\n\nWe look forward to serving you!
            \n\nBest regards,\nRannaghar Team\n${process.env.CLIENT_URL}/login`,
        };

        await transporter.sendMail(mailOptions);

        // Send WhatsApp message
        // const whatsappMessage = `Dear ${name},\n\nThank you for your booking at Rannaghar! Here are your booking details:\n\nBooking Code: ${bookingCode}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nPhone: ${phone}\n\nWe look forward to serving you!`;
        // await twilioClient.messages.create({
        //     from: twilioWhatsAppFrom,
        //     to: `whatsapp:${phone}`, // The phone number filled in the form
        //     body: whatsappMessage,
        // });

        res.status(200).json(savedBooking);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to save booking or send notifications', error });
    }
});

module.exports = router;

// server.js
const express = require('express');
const app = express();
const path = require('path');

// For parsing form data
app.use(express.urlencoded({ extended: true }));

app.post('/send-message', (req, res) => {
  // Access form data
  const { name, email, message } = req.body;

  // TODO: Actually send email or store data
  // e.g., using nodemailer or any email API

  // Return success JSON
  return res.status(200).json({ message: 'Form submitted successfully' });
});

// Serve your static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

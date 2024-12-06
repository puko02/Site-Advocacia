const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'gurkovila33@gmail.com',
    pass: 'gutl qbzw pkmi kvwf',
  },
});

app.post('/send-email', (req, res) => {
  const { name, date, phone, message } = req.body;

  const mailOptions = {
    from: '"Saldi Luiz Advocacia" <gurkovila33@gmail.com>',
    to: 'ecepaniq@gmail.com',
    subject: 'New User',
    text: `Nome: ${name}\nDia da Consulta: ${date}\nTelefone: ${phone}\nMensagem: ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
      return res.status(500).send('error');
    }
    res.status(200).send('email sent!');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

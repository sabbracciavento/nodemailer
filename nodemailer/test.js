nodemailer = require('./nodemailer')

const mailOptions = {
    from: 'futbolear5@gmail.com',
    to: 'mariano.aquino@gmail.com',
    subject: 'test2',
    text: 'probando probando'
}

nodemailer.enviarMail(mailOptions)
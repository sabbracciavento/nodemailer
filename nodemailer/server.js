const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'futbolear5@gmail.com',
        pass: 'Futbolear5123',
        clientId: '000000000000-xxx0.apps.googleusercontent.com',
        clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
        refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
        accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
    }
}));

const mailOptions = {
    from: 'futbolear5@gmail.com',
    to: 'santupi15@gmail.com',
    subject: 'test',
    text: 'test'
}

transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
        console.log(err)
    } else {
        console.log('Email enviado')
    }
})
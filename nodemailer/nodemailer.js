const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

function enviarMail(mail) {
    return new Promise((res, err) => {
        console.log('Procesando envío...')
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
        }))
        const mailOptions = {
            from: mail.from,
            to: mail.to,
            subject: mail.subject,
            text: mail.text
        };
        console.log('Enviando mail')
        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                console.log('Error enviando el email' + err)
                reject(err)
            } else {
                console.log('Mail enviado')
                resolve(res)
            }
        })
    })
}

module.exports = {
    enviarMail
}
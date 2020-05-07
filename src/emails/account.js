const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'elishakkim@gmail.com',
        subject: 'Thanks for Joining!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app.`,
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'elishakkim@gmail.com',
        subject: `We're sad to see you go...`,
        text: 'I wonder where things went wrong. Was it something that we said or did that led you to this decision? Before you go, is there anything we can do to make our services better. Please let us know. And with that, good bye forever...'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
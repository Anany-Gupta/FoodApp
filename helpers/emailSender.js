// nodemailer -> mail 
const nodemailer = require("nodemailer");
const {APP_PASSWORD} = require("../secrets");
// async..await is not allowed in global scope, must use a wrapper
module.exports = async function main(token, userEmail) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //   let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: "ananygupta@gmail.com",
            // different from your login password 
            // how to generate app password onn gmail ??
            pass: APP_PASSWORD
        }
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" ', // sender address
        to: "ananygupta07@gmail.com", // list of receivers
        subject: "Token for reset", // Subject line        
        text: "Hello world?", // plain text body
        html:
            `<b></b> 
            <p>your reset token is
        <br>${token}</br>
        </p>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
    
}


/* SmtpJS.com */

function sendEmail() {
    const from = document.getElementById("sender-email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    Email.send({
        SecureToken : "4cbeb510-ffaf-49ca-a994-fe46bbf3b1fc",
        To : "edenabuhs@outlook.com",
        From : from,
        Subject : subject,
        Body : message,
        Attachments : [
        {
            name : "smtpjs.png",
            path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
        }]
    }).then(
        message => alert(message)
    );}


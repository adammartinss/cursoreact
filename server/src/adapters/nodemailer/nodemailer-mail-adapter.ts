import nodemailer from'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '34a21526d2c127',
        pass: '50c09987bb4117',
    },
});

export class NodemailerMailAdapter implements MailAdapter{
   async sendMail: ({subject, body}: SendMailData) {
       await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com',
        to: 'Adam Martins <gamebacon7654@gmail.com>',
        subject,
        html: body,
   });
}
}

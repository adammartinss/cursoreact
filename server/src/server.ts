import { prisma } from './prisma'
import express from 'express';
import nodemailer from 'nodemailer'

const app = express();

app.use(express.json());
// get, post, put, patch, delete
// get = buscar info
// post = cadastrar info
// put = atualizar info de uma entdd
// patch = atualizar uma infounica de uma entdd
// delete = delte
const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '34a21526d2c127',
        pass: '50c09987bb4117',
    },
});
app.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body
    const feedback = await prisma.feedback.create({

        data:{
            type,
            comment,
            screenshot,
        }
    })
await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com',
    to: 'Adam Martins <gamebacon7654@gmail.com>',
    subject: 'Novo feedback',
    html:[
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        '</div>'
    ].join('\n')
    
    
})
    return res.status(201).json({data: feedback})
});

app.listen(3333, () => {
    console.log('HTTP server running!');
});

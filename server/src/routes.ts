import express from 'express'
import nodemailer from 'nodemailer'
import {prisma} from './prisma'
import { PrismaFeedbacksRepository } from './prisma/prisma-feedbacks-reposity';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '34a21526d2c127',
        pass: '50c09987bb4117',
    },
});
routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository
    );
        await submitFeedbackUseCase.execute({
            type,
            comment,
            screenshot,
        })
    const feedback = 
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

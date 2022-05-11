import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
export const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send('servidor do Adam');
});
routes.post('/feedbacks', async (req, res) => {
    console.log(process.env.SMTP_HOST);
    console.log(process.env.SMTP_USER);
    console.log(process.env.SMTP_PASS);
    console.log(process.env.EMAIL_FROM);
    console.log(process.env.EMAIL_TO);
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    );
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });

    return res.status(201).send();
});

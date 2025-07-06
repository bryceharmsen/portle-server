import {NextFunction, Request, Response} from "express";
import {Quiz, quizzes} from "../models/quiz";

export const getQuiz = (req: Request, res: Response, next: NextFunction) => {
    try {
        const quiz: Quiz = quizzes['2025-07-06'];
        if (!quiz) {
            res.status(404).json({ message: 'Quiz not found' });
            return;
        }
        res.json(quiz);
    } catch (error) {
        next(error);
    }
};
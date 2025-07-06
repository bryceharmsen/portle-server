import { Request, Response } from 'express';
import {quizzes, Quiz} from "../src/models/quiz";
import {getQuiz} from "../src/controllers/quizController";

describe('Quiz Controller', () => {
    it('should return an empty array when no items exist', () => {
        // Create mock objects for Request, Response, and NextFunction
        const req = {} as Request;
        const res = {
            json: jest.fn(),
        } as unknown as Response;
        const expectedQuiz: Quiz = quizzes['2025-07-06'];
        // Execute our controller function
        getQuiz(req, res, jest.fn());

        // Expect that res.json was called with an empty array
        expect(res.json).toHaveBeenCalledWith(expectedQuiz);
    });
});
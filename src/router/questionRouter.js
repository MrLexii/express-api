import { Router } from "express";
import { deleteQuestion, getAllQuestions, postQuestions } from "../controllers/questionController.js";
import { createQuestionSchema, questionIdSchema } from "../model/question.js";
import { validateBody, validateParams } from "../middleware/validation.js";


const router = Router()

router.get('/', getAllQuestions)

router.post('/', validateBody(createQuestionSchema),postQuestions)

router.delete('/:id', validateParams(questionIdSchema), deleteQuestion)

export default router
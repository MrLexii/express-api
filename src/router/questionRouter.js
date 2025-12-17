import { Router } from "express";
import { deleteQuestion, getAllQuestions, postQuestions } from "../controllers/questionController.js";
import { createQuestionSchema, questionIdSchema } from "../model/question.js";
import { validateBody, validateParams } from "../middleware/validation.js";
import { authToken } from "../middleware/authToken.js";
import db from "../db/database.js";


const router = Router()

router.use(authToken)

router.get('/', getAllQuestions)

router.post('/', validateBody(createQuestionSchema),postQuestions)

router.delete('/:id', validateParams(questionIdSchema), deleteQuestion)

router.get('/search', (req, res)=>{
    const querySearch = req.query.q.toLowerCase()
    db.select
})

export default router
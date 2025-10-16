import { Router } from "express";
import { deleteQuestion, getAllQuestions, postQuestions } from "../controllers/questionController.js";


const router = Router()

router.get('/', getAllQuestions)

router.post('/', postQuestions)

router.delete('/:id', deleteQuestion)

export default router
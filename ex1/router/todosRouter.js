import { Router } from "express";
import { deleteTodos, getAllTodos, postTodos } from "../controllers/todosControl";


const router = Router()

router.get('/:id', getAllTodos)

router.post('/', postTodos)

router.delete('/:id', deleteTodos)

export default router
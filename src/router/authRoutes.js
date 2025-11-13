import { Router } from "express";
import { register } from "../controllers/authController.js";
import { createUserSchema } from "../model/user.js";
import { validateBody } from "../middleware/validation.js";

const router = Router()

router.post('/register', validateBody(createUserSchema),register)

export default router
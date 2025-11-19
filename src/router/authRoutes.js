import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { createUserSchema, loginSchema } from "../model/user.js";
import { validateBody } from "../middleware/validation.js";

const router = Router()

router.post('/register', validateBody(createUserSchema),register)
router.post('/login', validateBody(loginSchema), login)

export default router
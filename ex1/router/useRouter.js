import { Router } from "express";
import { getAllUser } from "../controllers/useControl";

const router = Router()

router.get('/', getAllUser)

export default router
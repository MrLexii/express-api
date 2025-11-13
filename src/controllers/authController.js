import { db } from "../db/database.js"
import { usersTable } from "../db/schema.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'


export const register = async (req, res)=>{

    try {
        const { email, username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 12)

        const [result] = await db.insert(usersTable).values( {email, username, password: hashedPassword} ).returning({id: usersTable.id, email: usersTable.email, username: usersTable.username})
        const token = jwt.sign({userId: result.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.status(201).json({
            message: 'utyllyzatere quraihai',
            user: result,
            token: 'TOKEN',
        })
    } catch (error) {
        res.status(500).send({
            error: 'Failed to create questions'
        })
    } 
}
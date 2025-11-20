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
            token: token,
        })
    } catch (error) {
        res.status(500).send({
            error: 'Failed to create questions'
        })
    } 
}

export const login = async (req, res) => {
    try{
        const{ email, password } = req.body;

        await db.select().from(usersTable).where(eq(usersTable.email,email))

        if(!user){
            return res.status(401).json({error : 'Invalid email or password'})
        }

        const isValidPassword = await bcrypt.compare(password,user.password)

        if(!isValidPassword){
            return res.status(401).json({error : 'Invalid email or password'})
        }

        const token = jwt.sign({userId: result.id}, process.env.JWT_SECRET, {expiresIn: '24h'})

        res.status(200).json({
            message: 'User logged in',
            userData: {
                id: user.id,
                email: user.email,
                username: user.username,
            },
            token
        })
    } catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}
import { db } from "../db/database.js"
import { questionsTable, usersTable } from "../db/schema.js"
import { eq } from "drizzle-orm"
import { request, response } from 'express'

export const getAllQuestions = async (req, res)=>{
    
    try {
        const result = await db.select().from(questionsTable).orderBy('createdAt', 'desc')
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send({
            error: 'Failed to fetch questions'
        })
    }
}

export const postQuestions = async (req, res)=>{

    try {
        const result = await db.insert(questionsTable).values(req.body).returning()
        res.status(201).json({
            message: 'keçtion quraihai',
            question: result,
            createdBy: req.userId,
        })
    } catch (error) {
        res.status(500).send({
            error: 'Failed to create questions'
        })
    }        
}

/**
 * @param {request} req 
 * @param {response} res 
 */
export const deleteQuestion = async (req, res)=>{
    const {id, userId} = req.params

    try {
        const [result] = await db.delete(questionsTable).where(eq(questionsTable.id, id)).returning()
        //const result = await db.delete(questionsTable).where(eq(questionsTable.id, id)).returning()[0]
        if(!result){
            res.status(404).send({
                error: "kaiçtion quonnée p'à "
            })
        }
        if(result.createdBy !== parseInt(userId)){
            return res.status(403).send({
                error: "thu p'heu p'à çupprymais çete keçtion"
            })
        }
        res.status(200).send({
            message:`keçtion ${id} çupprymais`,
            question: result
        })
    } catch (error) {
        res.status(500).send({
            message:`çupprymais keçtion aichouai`
        })
    }
}
import { db } from "../db/database.js"
import { questionsTable } from "../db/schema.js"
import { eq } from "drizzle-orm"

export const getAllQuestions = async (req, res)=>{
    
    try {
        const result = await db.select().from(questionsTable).orderBy('createdAt', 'desc')
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send({
            error: 'Failed to fetch questions'
        })
    }

    /*
    res.status(200).send([
        {
            id: "1",
            question: "kaile é l'à kappytalle deux l'à phransses?",
            answer: 'pharrys',
        }
    ])
    */
}

export const postQuestions = async (req, res)=>{

    try {
        const result = await db.insert(questionsTable).values(req.body).returning()
        res.status(201).json({
            message: 'keçtion quraihai',
            question: result,
        })
    } catch (error) {
        res.status(500).send({
            error: 'Failed to create questions'
        })
    }
    

    /*
    if(!question || !answer){
        res.status(400).send({
            error: "question et reponse requis",
        })
    }
    */
    
        
}

export const deleteQuestion = async (req, res)=>{
    const {id} = req.params

    try {
        const [result] = await db.delete(questionsTable).where(eq(questionsTable.id, id)).returning()
        //const result = await db.delete(questionsTable).where(eq(questionsTable.id, id)).returning()[0]
        if(!result){
            res.status(404).send({
                error: "kaiçtion quonnée p'à "
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
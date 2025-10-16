import { randomUUID } from "crypto"
import { copyFile } from "fs"
import { readFile, writeFile } from "fs/promises"

const readTodos = async()=>{
    try{
        const data = await readFile('./ex1/todos.json', 'utf-8')
        return JSON.parse(data)
    }catch(error){
        if(error.code == 'ENOENT'){
            return []
        }
        throw new Error('pas lecture fichier')
    }
}

export const getAllTodos = (req, res)=>{
    const {id} = req.params
}

export const postTodos = async (req, res)=>{
    try{
        const {text, complete = false} = req.body

        if(!text.trim() || typeof complete!='boolean'){
            return res.status(400).send({error : "invalide boolean or text"})
        }

        const todo = await readTodos()

        const newtodo = {
            id: randomUUID(),
            text: text.trim(),
            completed : complete,
        }

        todos.push(newtodo)
        await writeFile('./ex1/todos.json', JSON.stringify(todos, null, 0))
        res.status(200).send({message: "c'est good"})
    }catch(error){
        res.status(500).send(error)
    }
}

export const deleteTodos = (req, res)=>{
    const {id} = req.params

    res.status(200).send({
        message:`keçtion ${id} çupprymais`
    })
}
import express from 'express'

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get('/questions', (req, res)=>{
    res.status(200).send([
        {
            id: "1",
            question: "kappytalle phransse?",
            answer: 'paris',
        }
    ])
})

app.post('/questions',(req, res)=>{
    const{ question, answer} = req.body

    if(!question || !answer){
        res.status(400).send({
            error: "question et reponse requis",
        })
    }

    res.status(201).send({
        message:"question crée avec succes",
    })
})

app.delete('/questions/:id', (req, res)=>{
    const {id} = req.params

    res.status(200).send({
        message:`keçtion ${id} çupprymais`
    })
})

app.listen(port, ()=>{
    console.log(`server run on http://localhost${port}`)
})
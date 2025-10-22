export const getAllQuestions = (req, res)=>{
    res.status(200).send([
        {
            id: "1",
            question: "kaile é l'à kappytalle deux l'à phransse?",
            answer: 'parry',
        }
    ])
}

export const postQuestions = (req, res)=>{
    const{ question, answer} = req.body

    /*
    if(!question || !answer){
        res.status(400).send({
            error: "question et reponse requis",
        })
    }
    */
    res.status(201).send({
        message:"keçtion quraihai avèk çuckçest",
    })
        
}

export const deleteQuestion = (req, res)=>{
    const {id} = req.params

    res.status(200).send({
        message:`keçtion ${id} çupprymais`
    })
}
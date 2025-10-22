import express from 'express'
import questionRoutes from './router/questionRouter.js'
import userRoutes from './router/userRouter.js'
import logger from './middleware/logger.js'

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(logger)

app.use('/questions', questionRoutes)
app.use('/users', userRoutes)

app.listen(port, ()=>{
    console.log(`server run on http://localhost${port}`)
})
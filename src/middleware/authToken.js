import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const authToken = (req, res, next)=> {
    const authHeader = req.headers.authorization
    const token = authToken && authHeader.split(' ')[1]

    if(!token){
        return res.status(403).json({error : " acces token required"})
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const userID = decodedToken.userID
        req.user = { userID }
        next()
    } catch (error) {
        console.error(error)
        res.status(401).json({error:"invalid or expired token"})
    }
}
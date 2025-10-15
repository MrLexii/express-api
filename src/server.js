import http from 'http'

const port = process.env.POST || 3000

const server = http.createServer((req, res)=> {
    res.end('SSSSSSSSSSSSALUT QUONNART !')
})

server.listen(port, ()=> {
    console.log(`serveur running on http://localhost:${port}`)
})


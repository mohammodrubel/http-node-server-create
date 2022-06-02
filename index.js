const http = require('http')

const server= http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello programmer,')
        res.write('are you ready to connect data')
        res.end()
    }else if(req.url === '/about'){
        res.write('this is about page')
        res.end()
    }else{
        res.write('not found')
        res.end()
    }
})


server.listen(5000)
console.log('lising on port number 5000')
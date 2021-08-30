const http =require('http')

const server = http.createServer((req,res)=>{ // output : it doesn't exit as web server keeps on listening
res.writeHead(200,{'content-type':'text/html'});
if(req.url == '/'){
    res.write('Welcome to our home page')
}
//res.write('Welcome to our home page')
//res.end()
if(req.url == '/about'){
    res.write('Here is our short story')
}
res.end(`
    <h1> Oops! </h1>
    <p> We can't seem to find the page you are looking for </p>
    <a href ="/"> back home</a>
`)
})

server.listen(5000) // local host port number local:5000
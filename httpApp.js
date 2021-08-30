const httpVar = require('http');
//const { createServer } = require('https');
httpVar.createServer(function(req ,res){
    var uri = req.url;
    res.writeHead(200,{'Content-Type' : 'text/html'} );
    if (uri == '/'){
        res.write('<html><body><a href ="/about">About</a><br> <a href ="/home"> Home </a><br><a href ="/contact">Contact</a></body></html>');
    }
    if(uri == '/about'){
        res.write('<html><body><p style="color:violet">Welcome to about page</p></body></html>');
    }
    if(uri == '/home'){
        res.write('<html><body><p style="color:blue"><em>Welcome to Home page</em></p></body></html>');
    }
    if(uri == '/contact'){
        res.write('<html><body><p style="color:orange"><strong>Welcome to Contact page</strong></p></body></html>');
    }
    if(uri == ''){
        res.write('<html><body><p style="color:red">Oops! Page not found</p></body></html>');    
    }
    res.end();
}).listen(8000);
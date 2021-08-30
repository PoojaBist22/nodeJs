 var httpVar = require('http');
 httpVar.createServer(function(req , res){
     res.writeHead(200,{'content-type':'text/html'}); // to write html code
     res.write("Welcome to http web programming")
     res.write('<html><body><p>Welcome</p></body></html>')
     myBox(res);
     res.end();
 }).listen(8080);

 function myBox(r){
     r.write('<html><body><p style="color: blue"> Text is in blue color</p></body>' );
     r.write('<script> alert("Hi world")</script></html>')

     var url = req.url;
    if (url == '/about'){
        r.write('<html><body><p>Welcome to about page</p></body></html>')
    }
     if (url == '/contact'){
        r.write('<html><body><p>Welcome to contact page</p></body></html>')
     }
     if (url == '/home'){
        r.write('<html><body><p>Welcome to home page</p><a href ="/about">About</a> <a href="/contact">Contact</a></body></html>')
     }
 }


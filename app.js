const http=require('http');
const server=http.createServer((req,res)=>{
const url=req.url;
if(url==='/node'){
    //res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1> Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    return res.end();
}
else if(url==='/about'){
   // res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Welcome to About Us page</h1></body>');
    res.write('</html>');
    return res.end();
}
else(url==='/home')
   // res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Welcome home</h1></body>');
    res.write('</html>');
   return res.end();


});
server.listen(4000,()=>console.log("sever started"));
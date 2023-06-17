const fs=require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
          if(err){
            console.log(err);
          } 
          console.log(`data from file` + data);
          res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write(`<body> ${data} </body>`);
        res.write(`<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">send</button></form></body>`);
        res.write('</html>');
        return res.end();
        });
    }
     if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
            res.statusCode=302;
           res.setHeader('Location','/');
           return res.end();
           
        });
    } 
}
 module.exports=requestHandler;


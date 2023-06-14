const http=require('http');
const server=http.createServer((req,res)=>{
console.log("anurag shukla....");
res.end("Anurag shukla");
});
server.listen(4000,()=>console.log("sever started"));
// express starting----

//const http=require('http');    //it is not required in express

const express= require('express');

const app=express();

app.use((req,res,next)=>{
  console.log('In the middleware!');
  next();  // it allows the request to continue to the next middleware in line
});
app.use((req,res,next)=>{
    console.log('In the another middleware!');
   // res.send('<h1>Hello From express!</h1>');
   res.send({ key1: 5 });
  });

//const server=http.createServer(app); //it is not require in express

app.listen(4000,()=>console.log("sever started"));
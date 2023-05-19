// const http = require('http');


// http.createServer((req, res) => {

//     const { url } = req;

//     if( url === '/'){
//         res.writeHead(200, {'Content-type' : 'Text plain'})
//         res.end('Me crearon con http')
//     }


// }).listen(3001, 'localhost');


// const express = require('express');
// const server = express();

const server = require('express')();

server.get('/',(req, res)=>{
    res.send('Esta ruta es la home')
});

server.get('/users',(req, res)=>{
    res.send('Esta ruta es la de users')
});

server.get('/ab?cd',(req, res)=>{
    res.send('ruta ab?cd')
});

server.listen(3001)
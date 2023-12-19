const express = require('express');
const bp =  require("body-parser");

const app = express();

const PORT = 8000;

app.use(bp.json());

const users = [
    {
        id: 1,
        name: 'bob',
    },
    {
        id: 2,
        name: 'bill',
    },
    {
        id: 3,
        name: 'bucky',
    },
]

app.get('/', (req, res) => {
    res.send({success: true, users: users}).end();
}) 

app.post('/', (req, res) => {
    const data = request.body;
    users.push(data);

    res.send({success: true, users: users}).end();
    
}) 

app.put('/', (req, res) => {
    res.send({success: true, method: 'put'}).end();
}) 

app.listen(PORT, () => {
    console.log("server running!");
})



// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
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

app.get('/:id', (req, res) => {
    const id = req.params.id;
    const filteredData = users.filter((user) => user.id === parseInt(id));

    res.send({success: true, users: filteredData}).end();
} );

app.post('/', (req, res) => {
    const data = request.body;
    users.push(data);


    res.send({success: true, users: users}).end();

}) 

app.put('/:id', (req, res) => {
    const id = req.params.id;

    users.map((user) => {
        if (user.id === parseInt(id)) {
            console.log(id);
            user.name = req.body.name;
        }
    })

    res.send({success: true, users: users}).end();
}) 

app.delete('/:id', (req, res) => {
    const id = req.params.id;

    const deletedUserId = users.findIndex((user) => user.id === parseInt(id));

    users = users.slice(0, deletedUserId);

    res.send({success: true, users: users}).end();
}) 

app.listen(PORT, () => {
    console.log("server running!");
})

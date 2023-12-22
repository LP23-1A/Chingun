// const express = require('express');
// const bp = require('body-parser');
// const mongoose = require('mongoose');
// const Url = require('./schema/Url');

// process.on('uncaughtException', function (err) {
//     console.log(err);
// }); 

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

import express from "express";
import bp from "body-parser";
import mongoose from "mongoose";
import Url from "./schema/Url.js";
import { nanoid } from "nanoid";
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 8000;

const MONGODB_URL = "mongodb+srv://23lp1573:G54iIeE4SPVNHgzA@cluster0.r9d2jfn.mongodb.net/?retryWrites=true&w=majority";

// const MONGODB_URL = process.env.MONGODB_URL;

const app = express();

app.use(bp.json());

app.get('/', async(_, response) => {
    const res = await Url.find();
    response.send(res).end();
})

app.get('/:url', async(request, response) => {
    const { url } = request.params;

    const res = await Url.findOne({
        shortUrl: url,
    })
    response.redirect(response.longUrl);
})

app.post("/", async (request, response) => {
    const { url } = request.body

    const newUrl = await Url.create({
        longUrl: url,
        shortUrl: nanoid(10)
    })

    res.send({success: true, url: newUrl }).end();
} )

app.delete("/:url", async (request, response) => {
    const { url } = request.params;

    const { acknowledged, deletedCount } = await Url.deleteOne({
        shortUrl: url,
    })
    response.send({ success: acknowledged, removedCount: deletedCount }).end();
})

app.listen(PORT, async () => {
    try {
        await mongoose.connect(MONGODB_URL);
    }  catch (error) {
        console.log(error);
    }
    console.log(`connected to mongoDB ${PORT}`)    
})


// let users = [
//     {
//         id: 1,
//         name: 'orgil',
//     },
//     {
//         id: 2,
//         name: 'naki',
//     },
//     {
//         id: 3,
//         name: 'munkherdene',
//     },
// ];

// app.get('/', (request, response) => {
//     response.send({ success: true, users: users }).end();
// });

// app.get('/:id', (request, response) => {
//     const id = request.params.id;
//     const filteredData = users.filter((user) => user.id === parseInt(id));
//     response.send({ success: true, users: filteredData }).end();
// });

// app.post('/', (request, response) => {
//  const data = request.body;
//  users.push(data);
//  response.send({ success: true, users: users }).end();
// });

// app.put('/:id', (request, response) => {
//     const id = request.params.id;
//     users.map((user) => {
//         if (user.id === parseInt(id)) {
//             console.log(id);
//             user.name = request.body.name;
//         }
//     });

//     response.send({ success: true, users: users }).end();
// });

// app.delete('/:id', (request, response) => {
//     const id = request.params.id;
//     const deletedUserId = users.findIndex((user) => user.id === parseInt(id));
//     if (deletedUserId !== -1) {
//         users.splice(deletedUserId, 1);
//     }
//     response.send({ success: true, users: users }).end();
// });

// app.listen(PORT, () => {
//  console.log('Server running');
// });
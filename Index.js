const express = require('express');
const cors = require("cors");
const connect_db = require('./Database/Index');
const router = require('./Routers/Index');
const PORT = 4000;

const app = express();
app.use(cors());


app.use(express.json());

connect_db('mongodb://127.0.0.1:27017/CRUD_database');


app.use('/users', router);


app.listen(PORT)
const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
require("dotenv").config();

const { getCarValue } = require("./getCarValue.js");

const app = express();
app.use(express.json());
app.use(cors());


app.post('/convertToCarValue', (req, res) => {
    const model = req.body.model;
    const year = req.body.year;
    const carValue = getCarValue(model, year);
    res.json({ carValue });
})



const port = process.env.PORT
app.listen(port, () => console.log(`API Server is running on http://localhost:${port}`));
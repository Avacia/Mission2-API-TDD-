const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
require("dotenv").config();

const { getCarValue } = require("./getCarValue.js");

const app = express();
app.use(express.json());
app.use(cors());


app.post('/convertInputToCarValue', (req, res) => {
    const model = req.body.model;
    const year = req.body.year;
    const car_value = getCarValue(model, year);
    const error = "there is an error";
    if (car_value === "there is an error") {
        res.json({ error });
    }
    res.json({ car_value });
})



const port = process.env.PORT
app.listen(port, () => console.log(`API Server is running on http://localhost:${port}`));
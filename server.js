const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { getCarValue } = require("./APIFunctions/getCarValue.js");
const { calculateRiskRating } = require("./APIFunctions/calculateRiskRating.js");

const app = express();
app.use(express.json());
app.use(cors());


app.post('/convertInputToCarValue', async (req, res) => {
    const { model, year } = req.body;
    const car_value = getCarValue(model, year);
    const error_message = "there is an error";
    
    if (car_value === false) {
        return res.json({ error: error_message });
    }
    res.json({ car_value });


    await fs.mkdir("data/car_value", { recursive: true });
    await fs.writeFile(`data/car_value/${model}_${year}.txt`, car_value.toString());
});


app.post('/getRiskRate', async (req, res) => {

    try{
        // console.log(req.body);
        const { claim_history } = req.body;
        // console.log(claim_history)
        const rating = calculateRiskRating(claim_history);
        res.status(200).json(rating);

    } catch (error) {
        return res.status(400).send({ message: 'there is an error', error });
    }
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API Server is running on http://localhost:${port}`));
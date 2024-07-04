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

    try{
        const { model, year } = req.body;
        const car_value = getCarValue(model, year);
        res.status(200).json({ car_value });

        await fs.mkdir("data/car_value", { recursive: true });
        await fs.writeFile(`data/car_value/${model}_${year}.txt`, car_value.toString());
    }
    catch (error) {
        return res.status(400).send({ message: "There is an error", error });
    }
        
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

app.post("/quote", (req, res) => {
    const { car_value, risk_rating } = req.body;

    if (!car_value || !risk_rating) {
        return res.status(400).json({ error: "car_value and risk_rating are required fields." });
    }

    const result = calculatePremium(car_value, risk_rating);
    const requestId = uuid();

    if (result.error) {
        console.error(`Error [${requestId}]: ${result.error}`);
        return res.status(400).json({ error: result.error, request_id: requestId });
    } else {
        console.log(`Success [${requestId}]: Premium calculated.`);
        res.json({ ...result, request_id: requestId });
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API Server is running on http://localhost:${port}`));

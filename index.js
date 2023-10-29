const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const dataApi = require('./data.json')

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello I am live a")
});

app.get("/service", (req, res) => {
    res.send(dataApi)
});

app.listen(port, () => {
    console.log("Live in console")
})
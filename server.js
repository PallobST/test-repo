const express = require('express');
const app = express();
const { fetchData } = require('./utilities');

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    const data = fetchData();
    console.log(data);
    res.status(200).json(data)
})

app.listen(PORT, ()=>{
    console.log(`This app is listening at the port ${PORT}`);
})
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.status(200).json({
        id:1,
        name:"jahid"
    })
})

app.listen(PORT, ()=>{
    console.log(`This app is listening at the port ${PORT}`);
})
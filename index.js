const express = require('express');
const app =express();
require('dotenv').config()
const port = process.env.PORT || 9000
app.listen(port, ()=>{
    console.log(`app listen to the port ${port}`);
})

app.get("/test", async(req,res)=>{
    res.json({
        "msg":"jenkins and github connected successfully!!!",
        "details":"jenkins I did"
    });
});

app.get("/my-test", async(req,res)=>{
    res.json({
        "msg":"jenkins and github connected successfully!!!",
        "details":"jenkins I did"
    });
});
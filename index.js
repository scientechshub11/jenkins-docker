const express = require('express');
const app =express();
const port = 9000
app.listen(port, ()=>{
    console.log(`app listen to the port ${port}`);
})

app.get("/test", async(req,res)=>{
    res.json({
        "msg":"jenkins and github connected successfully!!!",
        "details":"jenkins I did"
    })
})
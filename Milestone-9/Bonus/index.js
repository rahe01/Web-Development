const express = require("express");
const app = express();
const port = 5000;
app.get("/", (req, res) => {
    res.send("Hello form my first ever server");
})

app.get('/data', (req,res) =>{
    res.send(" more data")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
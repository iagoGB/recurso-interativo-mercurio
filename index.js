const path = require("path");

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", (req,res) => {
    res.sendFile('/index.html',{root: __dirname});
});

app.listen(port, ()=> {
    console.info('App is running on port:' + port);
})
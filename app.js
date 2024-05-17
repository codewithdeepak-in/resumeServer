const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');
const port = 3001 || process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", routes);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});









(async() =>{
    const connection = mongoose.connect('mongodb+srv://deepakchaudhary:dke5a0rWCXlRAom1@cluster0.vbwza5n.mongodb.net/resumebuilder?retryWrites=true&w=majority&appName=Cluster0');
    if(connection){
    console.log("connected to database");
    }
})()

app.listen(port, () => {
    console.log("server is running on port " + port);
})

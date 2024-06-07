
//npm init -y
//craete folder
//npm i express
//create file index.js
//create server -->
//require function import krta hai


/*
const express = require('express')
const app = express();


app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
*/
//run - node index.js


//use nodemon so that automatically hojaega

//package.json me jana scripts me test ke jagah 
//"start": "node index.js",
//"dev": "nodemon index.js"

//npm i nodemon

//to start :-
//npm run start


// ------------------------------------------------------------

const express = require("express");
const app = express();

//load config from env file

require("dotenv").config();
const PORT = process.env.PORT  || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes
const todoRoutes = require("./routes/todos")

//mount the todos ASPI routes
app.use("/api/v1", todoRoutes);


//start server

app.listen(PORT, () => {
    console.log(`Server Started Succesfully at ${PORT}`);
})

//connect to the database

const dbConnect = require("./config/database");

dbConnect();

//default route

app.get("/", (req,res) =>{
    res.send(`<h1>This is Homepaghe Baby</h1>`);
})





/*
index.js file mapp krti hai routes se aur server create krti hai

routes me sabka path hota hai aur vo controller se juda hua hota hai


database(config) connect krta hai server aur database ko (env se leta hau url)

conttroller me bussiness logic hota hai jo ki juda hota hai models se (schema).

*/
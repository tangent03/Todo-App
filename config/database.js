//config me database aur server(application) ko connect krne ke lie mongoose

const mongoose = require('mongoose');

require("dotenv").config();
//is line se jo jo env me dala hai vo process me dal jaega

//npm i mongoose
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log("database not connected");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;

//dbconnect Connection krega

//iseme env process ke andar kasie feed hua?

//uske lie dotenv use kia hai
//npm i dotenv
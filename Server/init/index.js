
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3000;
const Listing = require("./models/listing.js");

// For initializing database
// const initData = require("./data.js");

// const initDB = async()=>{
//     await Listing.deleteMany({});
//     await Listing.insertMany(initData.data);
//     console.log("data initialised ");
// };

// initDB();



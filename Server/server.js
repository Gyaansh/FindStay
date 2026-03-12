import cors from "cors";
import DbConnect from "./Config/Database.js"
import express from "express";
import listingsRoute from "./Routes/listingsRoute.js"
import ExpressError from "./Utils/ExpressError.js";
const app = express();
const port = 8080;
DbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use("/api/listing",listingsRoute);



app.use((req,res,next)=>{
    next(new ExpressError(404,"Page not found"));
});
app.use((err,req,res,next)=>{
    let {statusCode,message} = err;
    res.status(statusCode).send(message);
});

app.listen(port, ()=>{
    console.log("Server Listening at port",port);
});
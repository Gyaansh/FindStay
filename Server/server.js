import cors from "cors";
import DbConnect from "./Config/Database.js"
import express from "express";
import jwt from 'jsonwebtoken';
import passport from "passport";
import  LocalStrategy from 'passport-local';

import listingsRoute from "./Routes/listingsRoute.js"
import userRoute from "./Routes/userRoute.js";
import ExpressError from "./Utils/ExpressError.js";
import User from "./Models/userSchema.js";

const app = express();
const port = 8080;

DbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

jwt.sign({
  exp: Math.floor(Date.now() / 1000) + (60 * 60),
  data: 'foobar'
}, 'secret');

app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use("/api/listing",listingsRoute);
app.use("/api/user",userRoute);

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
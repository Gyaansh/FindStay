import express from 'express';

const Router = express.Router();

Router.get('/signup',(req,res)=>{
    res.send("form");
});

export default Router;
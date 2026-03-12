import joi from "joi";
import ExpressError from "../Utils/expressError.js";
const validSchema = joi.object({
    title: joi.string().required(),
    description :  joi.string().required(),
    price: joi.number().min(1).required(),
    URL: joi.array().min(1).required(),
    location : joi.string().required(),
    country : joi.string().required(),
});
export const schemaValidator = (req, res , next)=>{
    let {err} = validSchema.validate(req.body)
    if(err){
        throw new ExpressError(404,err.message);
    }else{
        next();
    }
}

// Define validation schema for incoming review data constraints
const validReviewSchema = joi.object({
    content: joi.string().min(10).max(500).required(),
    rating: joi.number().min(1).max(5).required(),
})

// Middleware to enforce review schema rules before processing request
export const reviewValidator = (req, res , next)=>{
    let {err} = validReviewSchema.validate(req.body)
    if(err){
        throw new ExpressError(404,err.message);
    }else{
        next();
    }
}

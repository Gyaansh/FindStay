import express from 'express';
import wrapAsync from '../Utils/wrapAsync.js';
import userSignUp from '../Controllers/userSignUp.js';
import { userValidator } from '../Models/Validator.js';
const Router = express.Router();

Router.post('/signup',userValidator,wrapAsync(userSignUp));

export default Router;
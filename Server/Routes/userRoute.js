import express from "express";
import wrapAsync from "../Utils/wrapAsync.js";
import userSignUp from "../Controllers/userSignUp.js";
import { userValidator } from "../Models/Validator.js";
import logInUser from "../Controllers/logInUser.js";
import passport from "passport";
import isAlreadyLoggedIn from "../Utils/iaAlreadyLoggedIn.js";
import isLoggedIn from "../Utils/isLoggedIn.js";
import checkAuth from "../Controllers/checkAuth.js";


const Router = express.Router();

Router.post("/signup", userValidator, wrapAsync(userSignUp),logInUser);

Router.post(
  "/login",
  isAlreadyLoggedIn,
  (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err) return next(err);

      if (!user) {
        // YOU control failure here 👇
        return res.status(401).json({
          success: false,
          message: info.message || "Invalid credentials",
        });
      }

      req.user = user;
      next(); // now goes to logInUser
    })(req, res, next);
  },
  logInUser,
);

Router.get("/checkauth",isLoggedIn,checkAuth);

export default Router;

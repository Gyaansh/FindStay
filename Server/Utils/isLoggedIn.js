import jwt from "jsonwebtoken";
import User from "../Models/userSchema.js";

const isLoggedIn = async (req, res, next) => { 
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      message: "You must be logged in",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id || decoded._id);
    if (!user) {
       return res.status(401).json({ message: "User not found" });
    }
    req.user = user; // attach full user info
    next(); // allow request
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default isLoggedIn;
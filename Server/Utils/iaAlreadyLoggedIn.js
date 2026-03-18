import jwt from "jsonwebtoken";

const isAlreadyLoggedIn = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return next(); // not logged in → allow login
  }

  try {
    const decoded = jwt.verify(token, "secretkey");

    // user already has valid token
    return res.status(400).json({
      success: false,
      message: "User already logged in",
      user: decoded,
    });

  } catch (err) {
    console.log(err)
    // invalid/expired token → allow login
    next();
  }
};

export default isAlreadyLoggedIn;
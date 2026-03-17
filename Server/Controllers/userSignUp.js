import User from "../Models/userSchema.js";
async function userSignUp(req, res) {
  try {
    let { username, password, email } = req.body;
    const newUser = new User({
      email,
      username,
    });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    res.status(201).json({
      message: "Registered successfully",
    });
  } catch (err) {
    console.log(err);

    if (err.name === "UserExistsError") {
      return res.status(400).json({
        field: "username",
        message: err.message,
      });
    }

    res.status(500).json({
      message: err.UserExistsError || "Failed to create New User",
      error: err.message,
    });
  }
}

export default userSignUp;

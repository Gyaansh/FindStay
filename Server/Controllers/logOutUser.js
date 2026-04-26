function logOutUser(req,res){
    res.clearCookie("token",{
      httpOnly: true,        // cannot be accessed by JS
      secure: true,         // true in production (HTTPS)
      sameSite: "none",    //  none in production
      path:"/"
    });

    res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });

}

export default logOutUser;
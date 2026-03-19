function checkAuth(req,res){
    res.json({
        loggedIn : true,
        user : req.user,
    });
}
export default checkAuth;
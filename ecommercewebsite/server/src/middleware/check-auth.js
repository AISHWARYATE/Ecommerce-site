const jwt = require('jsonwebtoken');
module.exports = (req,res,next) =>{
    try {
    console.log("req",req.headers);
    const token = req.headers.authorization.split(" ")[1];
    console.log("token",token);
    const decodedToken = jwt.verify(token,"abcde");
    req.userData = {userId:decodedToken.userid,UserRole:decodedToken.userRole};
    next();
    } catch (error) {
    res.status(401).json({message:"Auth Failed"});
    }
}

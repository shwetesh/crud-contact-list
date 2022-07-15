import jwt from "jsonwebtoken"

var logging = (req, res, next) => {
    var startTime = Date.now()
    next()
    console.log("[", req.method, "]", req.originalUrl, {
        startTime: new Date(startTime),
        totalTime: (Date.now() - startTime) +"ms",
        authorization: req.headers.authorization,
        PathParams: req.params,
        QueryParamas: req.query,
        RequestBody: req.body
    }, "=", res.statusCode)
}

var verification=(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader ){
      return  res.status(401).send({message:"empty token"});
    }
    const token = authHeader.replace("Bearer ", "");
    jwt.verify(token, "shwetagujar", (err,user) => {
        if (err != null) {
            return res.status(403).send(err);
        }
        req.loginuser=user;
        next();
    })
}


export default { logging , verification }
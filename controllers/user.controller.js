import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

var findone= async (req,res) => {
    var userCond = {
        email: req.body.email,
        password: req.body.password
    }
    try{
        var u1 = await User.findOne(userCond);
        if (u1 == null){
            res.status(400).json({message:"user not found"})
        }
        else{
            jwt.sign(
                {email: req.body.email, id: u1._id},
                'shwetagujar',
                { expiresIn: '1800s'},
                (err, token) =>{
                    if (err != null){
                        res.status(400).send({message: err.message})
                    } 
                    else{
                        res.json({ token })
                    }   
                }
            )
        }
    }
    catch(err){
        res.status(400).send({message: err.message});
    }
}

var add = async (req,res) => {
    var userData = {
        email: req.body.email,
        password: req.body.password
    }
    const user = new User(userData)
    try {
        const a1 = await user.save()
        res.json(a1)
    } catch(err) {
        res.status(400).send({message: err.message})
    }
}


export default {findone,add}
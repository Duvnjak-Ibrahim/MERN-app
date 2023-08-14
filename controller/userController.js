const asyncHandler = require("express-async-handler")
const User = require("../models/userModel.js")
const bcrypt = require("bcrypt")
// @desc Register a user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler( async (req,res)=>{
    const {username,email,password} = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error("Fill all fields")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("User already registered")
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = await User.create({
        username,
        email,
        password:hashedPassword,
    })
    console.log("user",newUser); 
    if(newUser){
        // production code
        res.status(201).json({_id:newUser.id,email:newUser.email})
    }else{
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.json({messages:"Register the user"})
})

// @desc Login a user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler( async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
    res.status(400)
    throw new Error("All fields mandatory")
    }
    const user = await User.findOne({ email })

    if(user && (await bcrypt.compare(password,user.password))){
        console.log(user)
        res.status(200).json("Loged in") 
    }else{
        res.status(401)
        throw new Error("email or password is not valid")
    }
})

// @desc Current user info
// @route GET /api/users/current
// @access private

module.exports = {
    registerUser,
    loginUser,
}
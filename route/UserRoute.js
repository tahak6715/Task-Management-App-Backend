const express = require("express")
const route = express.Router()  
const AuthControll =require("../control/authControl")


route.get("/user",AuthControll.AllUser)
route.put("/:id",(req,res) =>{
    res.send("I M put Teacher")

})


route.post("/Sign",AuthControll.SignUp)

route.post("/Login",AuthControll.Login)

route.get("/check",AuthControll.protected,(req,res)=>{
    res.send("user valid")
})



route.delete("/:id",(req,res) =>{
    res.send("I M delete")

})

module.exports = route
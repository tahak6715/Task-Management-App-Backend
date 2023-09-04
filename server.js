
const express = require('express')
const mongoose = require("mongoose");
const UserRoutes = require("./route/UserRoute")
const TeamRoutes = require("./route/TeamRoute")
const TaskRoutes = require("./route/TaskRoute")

const cors = require("cors")
require("dotenv").config()


const app = express()
app.use(express.json())    
 

app.use(cors());
app.use('/api/user',UserRoutes) 
app.use('/api/team',TeamRoutes) 
app.use('/api/task',TaskRoutes) 


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`)
    }) 
})
.catch((err)=>{ 
console.log(err) 
})
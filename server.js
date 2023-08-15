const express = require("express");
const connectDb = require("./config/dbConnection");
const { constants } = require("./constans");
const cors = require("cors")
const path = require("path")
require("dotenv").config()

connectDb();
const app = express()
app.use(cors(
    {
    origin: [`http://localhost:${constants.localHost}`],
    methods: ["GET", "POST"],
    credentials: true
}
))



app.use(express.json())
app.use("/api/posts",require("./routes/postRoutes"))
app.use("/api/users",require("./routes/userRoutes"))

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    app.get("*",(req,res)=>{
        res.sendFile(
            path.resolve(__dirname,"client","build","index.html")
            )
    })
}

app.listen(process.env.PORT || 3001, ()=>{
    console.log(`server on ${process.env.PORT || 3001}`);
})
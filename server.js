const express = require("express");
const connectDb = require("./config/dbConnection");
const { constants } = require("./constans");
const dotenv = require("dotenv").config()
const cors = require("cors")

connectDb();
const app = express()
app.use(cors(
    {
    origin: [`http://localhost:${constants.localHost}`],
    methods: ["GET", "POST"],
    credentials: true
}
))

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/posts",require("./routes/postRoutes"))
app.use("/api/users",require("./routes/userRoutes"))



app.listen(port, ()=>{
    console.log(`server on ${port}`);
})
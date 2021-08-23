const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8800;
const app = express();
const routes = require("./Routes/router");
const customErrorHandler = require("./Middlewares/customErrorHandler");

app.use(express.urlencoded())
app.use(express.json())
app.use(cors({origin: true}));
app.listen(port);
app.use(function(err,req,res,next){
    console.log("saaa",err);
    res.json({sa:"Error"})
    return err;
})

app.use(routes)

const connectDb = ()=>{
    mongoose.connect("mongodb+srv://yagizcer2:123@cluster0.nokfn.mongodb.net/webScraping?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(()=>console.log("connection established"))
    .catch((err)=>console.log(err))
}
connectDb();
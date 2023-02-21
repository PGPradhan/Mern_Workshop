const express = require("express")
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users.js");

const app = express();

app.get("/",(request,response) => {
    response.send("hello");
});

app.use(bodyParser.json()); 

app.use("/users",userRoutes)

app.listen(3000,function(){
    console.log("Server Started")
});
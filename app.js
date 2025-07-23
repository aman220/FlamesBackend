const bodyParser = require("body-parser");
const express = require("express");
const ProductRoutes = require("./Routes/ProductRoutes");
const UsersRoutes = require("./Routes/UserRoutes");
const app = express();
require("./Connection/conn")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use(ProductRoutes)
app.use(UsersRoutes)

app.listen(5600 , ()=>{
    console.log("server is listen on port no 5600")
})
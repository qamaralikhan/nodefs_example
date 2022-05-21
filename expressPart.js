let express = require('express');
let app = express();
let port = 5002;
app.listen(port,()=>{console.log("Server started at port 5002")})

app.get("/",(req,res)=>{

    res.send("Hello");
});
const http = require("http");
const rootRouter = require("./Router/rootRouter")
// const cors = require('cors');
// const express = require('express');
// const app = express();

const PORT = 5000;
const hostName = "127.0.0.8"

// app.use(cors({
//     origin:"*"
// }));
let app = http.createServer((req,res)=>{
    rootRouter(req,res)
})

// app.get("/course",(req,res)=>{
//     rootRouter(req,res)
// })

app.listen(PORT,hostName,()=>{
    console.log(`server started at http://${hostName}:${PORT}`);
})



const http = require("http");
const router = require("./Router/rootRouter")

const PORT = 5000;
const hostName = "127.0.0.8"

let app = http.createServer((req,res)=>{
    router(req,res);
})

app.listen(PORT,hostName,()=>{
    console.log(`server started at http://${hostName}:${PORT}`);
})
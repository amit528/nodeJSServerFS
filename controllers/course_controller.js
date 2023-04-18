const {readFile} = require('fs');
const {join} = require('path');
const serverSideErrorHandler = require("./handlers/server_error")

const courseController = (res) =>{
    readFile(join(__dirname,"..","db",'course.json'),'utf-8',(err,data) => {
        if(err) {
            serverSideErrorHandler(res,500,`<h1>Some thing went wrong</h1>`, "text/html")
        }else{
            res.writeHead(200,
                { 
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin" : "*",
                }
        )
            res.end(data);
        }
    })
}

module.exports = courseController;
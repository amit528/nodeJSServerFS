const {readFile,writeFile} = require('fs');
const {join} = require('path');
const serverSideErrorHandler = require("./handlers/server_error");
const clientSideErrorHandler = require("./handlers/client_error")


const studentController = (res,req) =>{
    req.on('data', (data) => {
        const student = JSON.parse(data.toString());
        if( ! student.username) {
            clientSideErrorHandler(res,400,"username required")
        } else if(! student.email) {
            clientSideErrorHandler(res,400,"email required")
        } else if(! student.phone) {
            clientSideErrorHandler(res,400,"phone required")
        } else if(! student.countryCode) {
            clientSideErrorHandler(res,400,"select country code")
        } else {
            readFile(join(__dirname,"..","db","student.json"),"utf-8",(err,data) => {
                if(data) {
                    const students = JSON.parse(data);
                    if(! students.some((stud) => stud.username === student.username)) {
                        students.push(student);
                        writeFile(join(__dirname,"..","db","student.json"),JSON.stringify(students),'utf-8',(err) => {
                            if(err) {
                                serverSideErrorHandler(res);
                            } else {
                                res.writeHead(200, { "content-type" : "application/json",
                                "Access-Control-Allow-Origin" : "*"
                            })
                                res.end(JSON.stringify({ msg : "data stored in DB"}));
                            }
                        })
                       
                    } else {
                        res.writeHead(400,{ "content-type" : "application/json",
                        "Access-Control-Allow-Origin" : "*"
                    })
                        res.end(JSON.stringify({ msg : "username already taken use other username"}))
                    }
                    
                } else {
                    serverSideErrorHandler(res);
                }
            })
           
        }
    })
    return ;
}

module.exports = studentController;
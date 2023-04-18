const studentController = require("../controllers/student_controller");

const studentRouter = (method,res,req) =>{

    switch(method){
        case "POST":
            studentController(res,req)
            return;
        case "GET" :
            return
        case "PUT" : 
            return;
        case "PATCH":
            return;
        case "DELETE" :
            return;
        default:
            res,writeHead(405,{"content-type" : "application/json"});
            res.end({msg:"Method Not Allowed"})
    }

}

module.exports = studentRouter;
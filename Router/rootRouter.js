const studentRouter = require("./student_router");
const courseRouter = require("./course_router")
const trainerRouter = require("./tariner_router");

const rootRouter = (req,res) =>{
    const {method,url} = req;


    switch(url){
        case "/student":
        studentRouter(method,res)
            return;
        case "/course":
            courseRouter(method,res)
            return;
        case "/trainer":
        trainerRouter(method,res)
            return;
        default:
            console.log("entering");
            res.writeHead(400,{"content-type" : "application/json"});
            res.end(JSON.stringify({"msg" : "page Not Found"}));
    }
}

module.exports = rootRouter;
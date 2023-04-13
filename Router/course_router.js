const courseController = require("../controllers/course_controller")

const courseRouter = (method,res) =>{

    switch(method){
        case "GET" :
            courseController(res);
            return;
        default:
            res.writeHead(405,{"content-type" : "application/json"});
            res.end(JSON.stringify({msg:"Method Not Allowed"}))
    }

}

module.exports = courseRouter;
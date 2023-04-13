const courseRouter = (method,res) =>{

    switch(method){
        case "GET" :
            return
        default:
            res,writeHead(405,{"content-type" : "application/json"});
            res.end({msg:"Method Not Allowed"})
    }

}

module.exports = courseRouter;
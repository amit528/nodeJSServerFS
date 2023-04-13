const trainerRouter = (method,res) =>{

    switch(method){
        case "POST":
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

module.exports = trainerRouter;
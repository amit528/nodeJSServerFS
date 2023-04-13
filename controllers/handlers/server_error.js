const serverSideErrorHandler = (res,statusCode,msg="Sorry something went wrong!") =>{
    res.writeHead(statusCode,{ "content-type" : "application/json"})
    res.end(JSON.stringify({ msg : msg}));
    return;
}

module.exports = serverSideErrorHandler;
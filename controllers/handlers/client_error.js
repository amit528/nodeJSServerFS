const clientSideErrorHandler = (res,statusCode,msg) =>{
    res.writeHead(statusCode,{ "content-type" : "application/json",
    "Access-Control-Allow-Origin" : "*"})
    res.end(JSON.stringify({ msg : msg}))
    return;
}

module.exports = clientSideErrorHandler;
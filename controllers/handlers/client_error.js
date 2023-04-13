const clientSideErrorHandler = (res,statusCode = 300,msg) =>{
    res.writeHead(statusCode,{ "content-type" : "application/json"})
    res.end(JSON.stringify({ msg : msg}));
    return;
}

module.exports = clientSideErrorHandler;
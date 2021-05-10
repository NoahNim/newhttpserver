const http = require('http');
                //request and response are the parameters
http.createServer((req, res) => {
    if (req.url === '/5') {
        res.writeHead(200);
        console.log('Status 200 ok');
        res.end();
    } else {
        res.writeHead(404);
        console.log('Status 404');
        res.end();
    }
}).listen(3000, (code) => {
    console.log(`Now listening on 3000`)
})
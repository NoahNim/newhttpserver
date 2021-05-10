const http = require('http');
                //request and response are the parameters
http.createServer((req, res) => {
    if (req.url === '/OK') {
        res.writeHead(200);
        console.log('Status 200 ok');
        res.end();
    }
    if (req.url === '/Bad-Request') {
        res.writeHead(400);
        res.end();
    }
    if (req.url === '/Created') {
        res.writeHead(201);
        res.end();
    }
    if (req.url === '/Forbidden') {
        res.writeHead(403);
        res.end();
    }
    if (req.url === '/Found') {
        res.writeHead(302);
        res.end();
    }
    if (req.url === '/Gateway-Timeout') {
        res.writeHead(504);
        res.end();
    }
    if (req.url === '/Internal-Server-Error') {
        res.writeHead(500);
        res.end();
    }
    if (req.url === '/Moved-Permanently') {
        res.writeHead(301);
        res.end();
    }
    if (req.url === '/Unauthorized') {
        res.writeHead(401);
        res.end();
    }

    if (req.url === '/Bonus/Redirect') {
        res.writeHead(302, {"Location" : "http://localhost:3000/OK"});
        res.end();
    }
    if (req.url === '/Bonus/Webpage') {
        res.writeHead(200, {"Content-Type":"text/html"}); //tells browser to expect html
        res.write("<h1>Website Works</h1>")
        res.end();
    }
    // if (req.url === '/Bonus/Created') {
    //     res.writeHead(201);
    //     res.end();
    // }


    // else {
    //     res.writeHead(404);
    //     console.log('Status 404');
    //     res.end();
    // }

}).listen(3000, (code) => {
    console.log(`Now listening on 3000`)
})

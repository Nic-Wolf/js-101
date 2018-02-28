import http = require('http');

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse): void => {

    // Cross-origin access - app and server are on different ports.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Client sent data to be processed by the server.
    if (!!req.method && req.method.toLowerCase() === 'post') {
        processForm(req, res);
        return;
    }

    // Client made a request for data from the server.
    if (!!req.method && req.method.toLowerCase() === 'get') {
        populateForm(res);
        return;
    }

    res.end();
});

// Request data is currently expected in JSON format.
function processForm(req: http.IncomingMessage, res: http.ServerResponse) {
    console.dir(req);

    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end();
    console.log('posted fields:\n');
    console.log(JSON.stringify({TBA: 'tba'}));

}

function populateForm(res: http.ServerResponse) {
    /* Pretend-Database */
    const data = {
        dogs: [
            'Labrador',
            'Husky',
            'Border Collie',
            'Shiba Inu',
            'German Shepard',
            'Malamute',
            'Other'
        ]
    };
    /* Pretend-Database */

    const responseData = JSON.stringify(data);
    res.end(responseData);
    console.log('get: ' + responseData);
}

const port = 1337;
server.listen(port);
console.log("server listening on port: " + port);

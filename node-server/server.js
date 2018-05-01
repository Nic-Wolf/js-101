var server = http.createServer(function (req, res) {
    // Cross-origin access - app and server are on different ports.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (req.method.toLowerCase() === 'post') {
        processForm(req, res);
        return;
    }

    if (req.method.toLowerCase() === 'get') {
        populateForm(res);
        return;
    }

    res.end();
});

server.listen('1337');
console.log('Server started...');
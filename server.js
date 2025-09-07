const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let data = '';

        // ✅ should be req.on, not res.on
        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            const parsedData = querystring.parse(data);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: "Form data received",
                parsedData
            }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Route not found");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
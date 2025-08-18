const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url.startsWith('/search')) {

        const queryObject = url.parse(req.url, true).query

        res.writeHead(200, {
            "Content-Type":'application/json',
            "custom-header":'Node js server',
            "custom-tracking":'1234',
        })
        res.end(JSON.stringify({ message:'query received', queryObject }))

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Route not found')
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});






















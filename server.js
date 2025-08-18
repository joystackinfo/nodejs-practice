const http = require('http'); // to get the http module
 
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('Welcome to the home page.');
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('Homepage not found');
    }
})
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`) //to indicate success
})





















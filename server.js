const http = require('http'); // to get the http module
 
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') { // to check if the method is post and url is submit
           let body = ''; // to store the incoming data
           req.on('data', chunk => {
               body += chunk.toString(); // convert it to string
           });
           req.on('end', () => {
               console.log('Received data:', body); // to log the received data
               res.writeHead(200, { 'content-type': 'application/json' }); // to set the response header
               res.end(JSON.stringify({ message: 'Data received' }));  // to send the response
           });
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('route not found');
    }
})
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`) //to indicate success
})





















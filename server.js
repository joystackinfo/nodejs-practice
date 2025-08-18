const http = require('http');
const url = require('url');


//route handler,


const route={
    '/':(req,res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the home page')
    },
       '/about':(req,res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the about home page')
}, 
      '/not found':(req,res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('homepage not found') 
      }
    }    

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
        if (route[pathname]) {
              route[pathname](req,res)
            
        } else {
            route['/not found'](req, res);
        }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});






















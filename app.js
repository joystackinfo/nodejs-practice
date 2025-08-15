const fs=require('fs')
const http=require('http')
const path = require('path')
const os=require('os')
const url =require('url')
const crypto=require('crypto')
const sayHello = require ('./greetings')
const math=require('./math')

//fs.readFile('example.txt', 'utf8', (err, data) => {
//  if (err) {
//      console.error(err)
//      return;
//  }
//  console.log(data)
//});

///fs.writeFile('output.txt', 'Hello, NodeJs', (err) => {
//    if (err) {
//        console.error(err);
//        return;
//    }
//    console.log('File written successfully');
//});

//const server=http.createServer((req,res) => {
    //res.statusCode=200
    //res.setHeader('content-type' , 'text/plain')
    //res.end('HELLO , NODE JS')
//});
//server.listen(3000,() => {
    //console.log('Server running at http://localhost:3000/');
//});

//const directory = '/user/local'
//const fileName = 'example.txt'
//const fullpath = path.join(directory, fileName)
//console.log(fullpath);

//console.log('platform:', os.platform());
//console.log('architecture:', os.arch());
//console.log('total memory:', os.totalmem());
//console.log('free memory:', os.freemem());

//const myUrl=new URL('http://example.com:8080/path/name?query=hello#hash')
//console.log('host' ,myUrl.host);
//console.log('pathname' ,myUrl.pathname);
//console.log('search params' ,myUrl.searchParams.get('query'));
 
//const hash=crypto.createHash('sha256')//type of the hash
//hash.update('Hello, NodeJs')//the message to update
//console.log(hash.digest('hex'))//to finalize

const message= sayHello('DEVELOPER')
console.log(message);
console.log(math.add (4,9));
console.log(math.multiply(4,7))
 const fs=require('fs')
 const http=require('http')
 const path = require('path')
 const os=require('os')
 const url =require('url')
const crypto=require('crypto')
 const sayHello = require ('./greetings')
 const math=require('./math')
 const lodash= require('lodash');

// //fs.readFile('example.txt', 'utf8', (err, data) => {
// //  if (err) {
// //      console.error(err)
// //      return;
// //  }
// //  console.log(data)
// //});

// ///fs.writeFile('output.txt', 'Hello, NodeJs', (err) => {
// //    if (err) {
// //        console.error(err);
// //        return;
// //    }
// //    console.log('File written successfully');
// //});

// //const server=http.createServer((req,res) => {
//     //res.statusCode=200
//     //res.setHeader('content-type' , 'text/plain')
//     //res.end('HELLO , NODE JS')
// //});
// //server.listen(3000,() => {
//     //console.log('Server running at http://localhost:3000/');
// //});

// //const directory = '/user/local'
// //const fileName = 'example.txt'
// //const fullpath = path.join(directory, fileName)
// //console.log(fullpath);

// //console.log('platform:', os.platform());
// //console.log('architecture:', os.arch());
// //console.log('total memory:', os.totalmem());
// //console.log('free memory:', os.freemem());

// //const myUrl=new URL('http://example.com:8080/path/name?query=hello#hash')
// //console.log('host' ,myUrl.host);
// //console.log('pathname' ,myUrl.pathname);
// //console.log('search params' ,myUrl.searchParams.get('query'));
 
// //const hash=crypto.createHash('sha256')//type of the hash
// //hash.update('Hello, NodeJs')//the message to update
// //console.log(hash.digest('hex'))//to finalize

// //const message= sayHello('DEVELOPER')
// //console.log(message);
// //console.log(math.add (4,9));
// //console.log(math.multiply(4,7))


//   //onst numbers = [1, 2, 3, 4, 5];
//   // const reversed = lodash.reverse(numbers);
//   //console.log(reversed);


// const readablestream =fs.createReadStream('example.txt', {encoding: 'utf8'})
// readablestream.on('data' ,(chunk) => {
//   console.log(chunk);//to readthe file in chunks
// })

// readablestream.on('end', () => {
//   console.log('Finished reading file');//to execute the command
// });

// readablestream.on('error', (err) => {
//   console.error('Error', err);
// });


//  WritableStream=fs.createWriteStream('output2.txt' )
//  WritableStream.write('I love node .js');
//  WritableStream.write('Hello Node.js');
//  WritableStream.end();

//  WritableStream.on('finish', () => {
//    console.log('Finished writing file');
//  });


// const readablestream=fs.createReadStream('example.txt') //to create a readable stream

// const WritableStream=fs.createWriteStream('example-output.txt') //to create a writable stream
// readablestream.pipe(WritableStream); // to pipe both readable and writable streams
// WritableStream.on('finish', () => {
//     console.log('File copied successfully');  // to indicate successful copy
// });

  

// const readline=require('readline')

// const readablestream=fs.createReadStream('example.txt') //to create the readable stream

// const rl =readline.createInterface({input: readablestream}) // to create the readline interface
// rl.on('line', (line) => {
//     console.log('line:', line) // to read the line from the file
// });

// rl.on('close', () => {
//     console.log('Finished processing file'); // to indicate successful processing
// });


// fs.mkdir('new-directory', (err) => {  //to create a new directory
//     if (err) {
//         console.error('Error creating directory:', err); // to indicate error
//         return;
//     }
//     console.log('Directory created successfully'); // to indicate successful creation
// })
 

// fs.mkdirSync('new directory 2') // to create a new directory using synchronous method
// console.log('successfully created directory 2.0'); // to indicate a successfully creation

// const readdir = fs.readdir('./', (err, files) => {
//     if (err) {
//         return console.error('Error reading directory:', err);
//     }
//     console.log('Directory contents:', files);
// });

//USING SYNCHRONOUS ;
    //  const files = fs.readdirSync('./');
    //  console.log('Directory contents:', files);

    // const dirName='new-directory' // to check if the directory exists

    // if(fs.existsSync(dirName)) {
    //     console.log('Directory exists'); // to indicate directory exists
    // } else {
    //     console.log('Directory does not exists'); // to indicate directory does not exists
    // }

// fs.rmdir('newdirectory', (err) => { // to remove the directory
//     if (err) {
//         return console.error('Error removing directory:', err); // to indicate error
//     }
//     console.log('Directory removed successfully'); // to indicate successful removal
// });


fs.rm('new directory 2', { recursive: true }, (err) => { // to remove the directory
    if (err) {
        return console.error('Error removing directory:', err); // to indicate error
    }
    console.log('Directory removed successfully'); // to indicate successful removal
});
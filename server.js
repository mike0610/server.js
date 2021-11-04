const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'user', 'user.js'), (err, data) =>{
            if(err){
                throw err
            }

            res.writeHead(200, {'Content-Type': 'text/js'})
            res.end(data);
        })
    }
})

server.listen(8080, () =>{
    console.log('Server Started');
})
const http = require('http');
const port = 3000;
const handler = require('./handlers');

http.createServer((req,res) => {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });

    for (let handler of handlers) {
      if(!handler(req, res)){
        break;
      }
    }

}).listen(port);
let filePath = path.normalize(
  path.join(__dirname property, '../views/home/index')
);

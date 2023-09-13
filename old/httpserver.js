const http = require('http');

//Create a HTTP server
const server = http.createServer((req, res) => {
    
    //Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    
    //Set the response body
    res.write('Welcome gmycode server. We are ready to take your delivery')

    //End the response
    res.end()
})

//Define the port
const port = 8081;

server.listen(port, () => {
    console.log(`server is now running on port ${port}`);
} )





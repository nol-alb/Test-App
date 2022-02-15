const express = require('express')
const app = express();
const server = require("http").Server(app);
var cors = require('cors');
app.use(cors());
// const io = require("socket.io")(server)
// const io = require("socket.io")(server, {
//     handlePreflightRequest: (req, res) => {
//         const headers = {
//             "Access-Control-Allow-Headers": "Content-Type, Authorization",
//             "Access-Control-Allow-Origin": 'http://localhost:3001', //or the specific origin you want to give access to,
//             "Access-Control-Allow-Credentials": true
//         };
//         res.writeHead(200, headers);
//         res.end();
//     }
// });
const io = require('socket.io')(server, {cors: {origin: "*"}});

io.on('connect', (socket) =>{
    console.log("Connected");

    socket.on('play', playMsg => {
        io.emit('play', playMsg);
    })

    socket.on('stop', msg => io.emit("Stop"))

});

server.listen(3001);


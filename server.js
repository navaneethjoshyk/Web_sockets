const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

console.log("Server started on ws://localhost:8080");

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        // Send the message back to everyone connected
        wss.clients.forEach(client => {
            if (client.readyState === 1) client.send(data.toString());
        });
    });
});
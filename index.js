/**************************************************************************
 Serves static content in Public folder to browser
**************************************************************************/

var express = require('express')
var app = express();
const server_port = 3000

app.use(express.static(__dirname + '/public'));
app.listen(server_port, () => console.log(`App listening on port ${server_port}!`))

/**************************************************************************
 Reads quaternion data from serial port and sends it over the websocket
**************************************************************************/

const SerialPort = require('serialport')
const port = new SerialPort('COM12', { baudRate: 115200 })

const Readline = require('@serialport/parser-readline')
const parser = port.pipe(new Readline({ delimiter: '\n' }))

parser.on('data', function(data) {
  if (ws != null) {
     ws.send(data);
  }
})

/**************************************************************************
 Websocket server that communicates with browser
**************************************************************************/

const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
var ws = null;
 
wss.on('connection', function connection(_ws) {
  ws = _ws;
});
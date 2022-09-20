const express       = require('express');
const app           = express();
const http          = require('http');
const server        = http.createServer(app);
const { Server }    = require("socket.io");


const io            = new Server(server);
const { food, vomit, sleep, philosophy, need, hate, i, you, rejoice, newSentence } = require('./speaker_utils');


var MartianWords    =  [food(), vomit(), sleep(), philosophy(), need(), hate(), i(), you(), rejoice(), newSentence() ]
var delay           = null;
var reg_delay       = 200;
const ms_delay      = 200;


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => { console.log('a user disconnected'); });
});

server.listen(3000, () => { console.log('listening on *:3000'); });

setInterval(
  () => {
      const s = MartianWords[Math.floor(Math.random() * MartianWords.length)];
      martianEmissions(s);
  },
  200);

function martianEmissions(s){
  try{
    for (let i of s) {
      if (i == '-'){
        delay = ms_delay;
      }
      else {
        delay = reg_delay;
      }
      speak(delay, i);
    }
  }
  catch (error) {
    console.error(error);
  }
}

function speak(delay, i){
  setInterval(()=>{
    console.log('Emitting ', i, " at ", delay, " Milliseconds");
    io.emit(i, {});
    }, 
  delay);
}
'use strict';

const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);

const serverboard = [null,null,null,null,null,null,null,null]
const userturn = 'N/A';
const serverslot1used = false
const serverslot2used = false
const serverslot3used = false
const serverslot4used = false
const serverslot6used = false
const serverslot7used = false
const serverslot8used = false
const serverhp = 1250
const servergameid = 'N/A';
const serveruserId = 'N/A';
const mylevel = 'N/A';
const mysoul = 'N/A';
const enemylevel = 'N/A';
const enemysoul = 'N/A';
const mysoulName = 'N/A';
const mysoulid = 'N/A';
const enemysoulname = 'N/A';
const enemysoulid = 'N/A';
const myrank = 'N/A';
const enemyrank = 'N/A';
const myavatarrarity = "LEGENDARY"
const enemyavatarrarity = "LEGENDARY"
const myavatarid = 'N/A';
const enemyavatarid = 'N/A';
const myavatarName = 'N/A';
const enemyavatarname = 'N/A';
const myavatarimage = 'N/A';
const enemyAvatarimage = 'N/A';
const myucpcost = 'N/A';
const enemyucpcost = 'N/A';
const myshinyavatar = true
const enemyshinyavatar = true
const myprofileskinid = 'N/A'
const enemyprofileskinid = 'N/A'
const myprofileskinname = 'N/A'
const enemyprofileskinmame = 'N/A'
const myprofileskinimage = 'N/A'
const enemyprofileskinimage = 'N/A'
const emotes ='N/A'
const battlelogs = []
const totalturnanimationduration = 0.0
const serverturn = 'N/A'
const serverturntime = 120
const ismulligandone = true
const playabletriggers = []
const availableattacktargets = {}
const player1dustpile = []
const player2dustpile = []
const locktime = -4482.0
const artifacts = []
const enemyartifacts = 'N/A'
const myusername = 'N/A'
const enemyusername = 'N/A'
const gametype = 'N/A'
const gaineddatafromoriginalserver
const playablecards = []
const playabletriggers = []
const availableattacktargets = {}
const handsize = 'N/A'
const decksize = 'N/A'

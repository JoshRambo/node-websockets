'use strict';
const serverboard = [null,null,null,null,null,null,null,null]
const UserTurn = 'N/A';
const serverslot1used = false
const serverslot2used = false
const serverslot3used = false
const serverslot4used = false
const serverslot6used = false
const serverslot7used = false
const serverslot8used = false
const serverhp = 1250
const servergameId = 'N/A';
const serverUserId = 'N/A';
const MyLevel = 'N/A';
const MySoul = 'N/A';
const EnemyLevel = 'N/A';
const EnemySoul = 'N/A';
const MySoulName = 'N/A';
const MySoulID = 'N/A';
const EnemySoulName = 'N/A';
const EnemySoulID = 'N/A';
const MyRank = 'N/A';
const EnemyRank = 'N/A';
const MyAvatarRarity = "LEGENDARY"
const EnemyAvatarRarity = "LEGENDARY"
const MyAvatarID = 'N/A';
const EnemyAvatarID = 'N/A';
const MyAvatarName = 'N/A';
const EnemyAvatarName = 'N/A';
const MyAvatarImage = 'N/A';
const EnemyAvatarImage = 'N/A';
const MyUCPCost = 'N/A';
const EnemyUCPCost = 'N/A';
const MyShinyAvatar = true
const EnemyShinyAvatar = true
const MyProfileSkinID = 'N/A'
const EnemyProfileSkinID = 'N/A'
const MyProfileSkinName = 'N/A'
const EnemyProfileSkinName = 'N/A'
const MyProfileSkinImage = 'N/A'
const EnemyProfileSkinImage = 'N/A'
const Emotes ='N/A'
const BattleLogs = []
const totalTurnAnimationDuration = 0.0
const serverturn = 'N/A'
const serverturnTime = 120
const isMulliganDone = true
const playableTriggers = []
const availableAttackTargets = {}
const player1dustpile = []
const player2dustpile = []
const locktime = -4482.0
const artifacts = []
const enemyartifacts = 'N/A'
const MyUsername = 'N/A'
const EnemyUsername = 'N/A'
const gametype = 'N/A'
const GainedDataFromOriginalServer
const playableCards = []
const playableTriggers = []
const availableAttackTargets = {}
const handsSize = 'N/A'
const deckSize = 'N/A'

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

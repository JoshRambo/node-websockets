'use strict';
const serverboard = [null,null,null,null,null,null,null,null];
const UserTurn = null;
const serverslot1used = false;
const serverslot2used = false;
const serverslot3used = false;
const serverslot4used = false;
const serverslot6used = false;
const serverslot7used = false;
const serverslot8used = false;
const serverhp = 1250;
const servergameId = null;
const serverUserId = null;
const MyLevel = null;
const MySoul = null;
const EnemyLevel = null;
const EnemySoul = null;
const MySoulName = null;
const MySoulID = null;
const EnemySoulName = null;
const EnemySoulID = null;
const MyRank = null;
const EnemyRank = null;
const MyAvatarRarity = "LEGENDARY";
const EnemyAvatarRarity = "LEGENDARY";
const MyAvatarID = null;
const EnemyAvatarID = null;
const MyAvatarName = null;
const EnemyAvatarName = null;
const MyAvatarImage = null;
const EnemyAvatarImage = null;
const MyUCPCost = null;
const EnemyUCPCost = null;
const MyShinyAvatar = true;
const EnemyShinyAvatar = true;
const MyProfileSkinID = null;
const EnemyProfileSkinID = null;
const MyProfileSkinName = null;
const EnemyProfileSkinName = null;
const MyProfileSkinImage = null;
const EnemyProfileSkinImage = null;
const Emotes ="N/A";
const BattleLogs = [];
const totalTurnAnimationDuration = 0.0;
const serverturn = null;
const serverturnTime = 120;
const isMulliganDone = true;
const playableTriggers = [];
const availableAttackTargets = {};
const player1dustpile = [];
const player2dustpile = [];
const locktime = -4482.0;
const artifacts = [];
const enemyartifacts = null;
const MyUsername = null;
const EnemyUsername = null;
const gametype = null;
const GainedDataFromOriginalServer = false;
const playableCards = [];
const playableTriggers = [];
const availableAttackTargets = {};
const handsSize = null;
const deckSize = null;
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

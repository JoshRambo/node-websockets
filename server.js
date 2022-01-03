'use strict';
const serverboard = [null,null,null,null,null,null,null,null];
const UserTurn;
const serverslot1used = false;
const serverslot2used = false;
const serverslot3used = false;
const serverslot4used = false;
const serverslot6used = false;
const serverslot7used = false;
const serverslot8used = false;
const serverhp = 1250;
const servergameId;
const serverUserId;
const MyLevel;
const MySoul;
const EnemyLevel;
const EnemySoul;
const MySoulName;
const MySoulID;
const EnemySoulName;
const EnemySoulID;
const MyRank;
const EnemyRank;
const MyAvatarRarity = "LEGENDARY";
const EnemyAvatarRarity = "LEGENDARY";
const MyAvatarID;
const EnemyAvatarID;
const MyAvatarName;
const EnemyAvatarName;
const MyAvatarImage;
const EnemyAvatarImage;
const MyUCPCost;
const EnemyUCPCost;
const MyShinyAvatar = true;
const EnemyShinyAvatar = true;
const MyProfileSkinID;
const EnemyProfileSkinID;
const MyProfileSkinName;
const EnemyProfileSkinName;
const MyProfileSkinImage;
const EnemyProfileSkinImage;
const Emotes ="N/A";
const BattleLogs = [];
const totalTurnAnimationDuration = 0.0;
const serverturn;
const serverturnTime = 120;
const isMulliganDone = true;
const playableTriggers = [];
const availableAttackTargets = {};
const player1dustpile = [];
const player2dustpile = [];
const locktime = -4482.0;
const artifacts = [];
const enemyartifacts;
const MyUsername;
const EnemyUsername;
const gametype;
const GainedDataFromOriginalServer = false;
const playableCards = [];
const playableTriggers = [];
const availableAttackTargets = {};
const handsSize;
const deckSize;
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

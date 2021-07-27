import React, { createContext } from "react";

export const angels = ["Merlin", "Percival", "Citizen"];
export const evils = ["Morgana", "Assassin", "Heresy", "Modred"];
export const merlinSight = ["Morgana", "Assassin", "Heresy"];
export const percivalSight = ["Morgana", "Merlin"];

export const needPlayers = {
  _5P: [2, 3, 2, 3, 3],
  _6P: [2, 3, 4, 3, 4],
  _7P: [2, 3, 3, 4, 4],
  _8to10P: [3, 4, 4, 5, 5],
};
export const voteStageColor = ["white", "white", "white", "white", "red"];

const Background = {
  voteStage: 0,
  expeditionStage: 0,
  represent: 0,
  vote: [],
  takeStage: [],
};

const Players = [
  { nickname: "user1", role: "", vote: "", toGo: "", selected: false },
  { nickname: "user2", role: "", vote: "", toGo: "", selected: false },
  { nickname: "user3", role: "", vote: "", toGo: "", selected: false },
  { nickname: "user4", role: "", vote: "", toGo: "", selected: false },
  { nickname: "user5", role: "", vote: "", toGo: "", selected: false },
  // {nickname: 'user6', role: '', vote: '', toGo: '',selected : false},
  // {nickname: 'user7', role: '', vote: '', toGo: '',selected : false},
  // {nickname: 'user8', role: '', vote: '', toGo: '',selected : false},
  // {nickname: 'user9', role: '', vote: '', toGo: '',selected : false},
];

export const mustHaveRoles = [
  "Merlin",
  "Percival",
  "Citizen",
  "Morgana",
  "Assassin",
];
export const expandRoles = [
  "Citizen",
  "Heresy",
  "Citizen",
  "Modred",
  "Citizen",
];

export const Pages = {
  START_FRAME: "START_FRAME",
  //
  MAIN_FRAME: "MAIN_FRAME",
  MAIN_VOTE: "MAIN_VOTE",
  //
  VOTE_FRAME: "VOTE_FRAME",
  VOTE_RESULT: "VOTE_RESULT",
  //
  EXPEDITION_FRAME: "EXPEDITION_FRAME",
  EXPEDITION_RESULT: "EXPEDITION_RESULT",
  //
  ASSASSIN_FRAME: "ASSASSIN_FRAME",
  //
  END_GAME_FRAME: "END_GAME_FRAME",
};
export const func = {
  gameStart: "gameStart",
  votePage: "votePage",
  nextPage: "nextPage",
  voteOnClick: "voteOnClick",
  voteResult: "voteResult",
  voteOnChange: "voteOnChange",
  expeditionClick: "expeditionClick",
  assassinOnChange: "assassinOnChange",
  killPlayer: "killPlayer",
  expeditionResult: "expeditionResult",
  setPage: "setPage",
  initVote: "initFVote",
};
export const initState = {
  playerData: [
    { nickname: "user1", role: "", vote: "", toGo: "", selected: false },
    { nickname: "user2", role: "", vote: "", toGo: "", selected: false },
    { nickname: "user3", role: "", vote: "", toGo: "", selected: false },
    { nickname: "user4", role: "", vote: "", toGo: "", selected: false },
    { nickname: "user5", role: "", vote: "", toGo: "", selected: false },
    //여기에 플레이어 데이터
    // {nickname: 'user6', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user7', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user8', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user9', role: '', vote: '', toGo: '',selected : false},
  ],
  page: Pages.START_FRAME,
  voteStage: 0,
  represent: 0,
  vote: [],
  takeStage: [],
  playerCount: 0,
  voteCount: 0,
  winner: "",
  expeditionStage: 0,
  kill: "",
};
export const PlayState = createContext(Background);
export const UserState = createContext(Players);
export const InitContext = createContext(initState);

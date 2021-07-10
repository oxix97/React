// import React, {useContext, useEffect, useState} from "react";
// import {UserState, PlayState, needPlayers, mustHaveRoles, expandRoles, voteStageColor, angels} from "./gameSetting";
// import {Circle, Frame, PublicFrame, Title, User, VoteStageFrame} from "./MainPage/Styled";
// import MerlinPlayer from "./Ability/MerlinPlayer";
// import PercivalPlayer from "./Ability/PercivalPlayer";
// import Vote from "./RepresentVote/Vote";
// import AngelsVote from "./ExpeditionVote/AngelsVote";
// import EvilsVote from "./ExpeditionVote/EvilsVote";
//
// export const START_FRAME = 'START_FRAME'
// export const MAIN_FRAME = 'MAIN_FRAME'
// export const MAIN_SELECT_PLAYER = 'MAIN_SELECT_PLAYER'
// export const VOTE_FRAME = 'VOTE_FRAME'
// export const VOTE_RESULT = 'VOTE_RESULT'
// export const EXPEDITION_FRAME = 'EXPEDITION_FRAME'
// export const EXPEDITION_RESULT = 'EXPEDITION_RESULT'
// export const ASSASSIN_FRAME = 'ASSASSIN_FRAME'
// export const END_GAME_FRAME = 'END_GAME_FRAME'
//
// function AVALON_TEST() {
//     const user = useContext(UserState)
//     const game = useContext(PlayState)
//     const [playerCount, setPlayerCount] = useState(0);
//     const [voteCount, setVoteCount] = useState(0);
//     const [winner, setWinner] = useState('')
//     const [page, setPage] = useState(START_FRAME);
//     const [kill, setKill] = useState('')
//     useEffect(() => {
//
//     })
//     const voteOnChange = e => {
//         user[e.target.value].selected = e.target.checked;
//         e.target.checked ? setPlayerCount(playerCount + 1) : setPlayerCount(playerCount - 1);
//     }
//     const voteOnClick = () => {
//         if (playerCount === game.takeStage[game.expeditionStage]) {
//             setVoteCount(voteCount + 1);
//             setPlayerCount(0)
//             setPage(VOTE_FRAME)
//         } else {
//             alert(`${game.takeStage[game.expeditionStage]}명을 선택해야합니다.`);
//         }
//     }
//     const votePage = () => {
//         let agree = 0;
//         let oppose = 0;
//         user.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
//         if (agree >= oppose) {
//             game.voteStage = 0;
//             setPage(EXPEDITION_FRAME)
//         } else {
//             if (game.voteStage === 4) {
//                 game.takeStage[game.expeditionStage] = 'fail';
//                 game.expeditionStage += 1;
//                 game.voteStage = 0;
//             } else {
//                 game.voteStage += 1;
//             }
//             setPage(MAIN_FRAME)
//         }
//         game.represent += 1;
//         game.represent %= user.length;
//         nextPage()
//     }
//     const nextPage = () => {
//         const angelCount = game.takeStage.filter(element => 'success' === element).length;
//         const evilCount = game.takeStage.filter(element => 'fail' === element).length;
//         if (angelCount === 3) {
//             setPage(ASSASSIN_FRAME)
//         }
//         if (evilCount === 3) {
//             setWinner('EVILS_WIN')
//             setPage(END_GAME_FRAME)
//         }
//         game.vote = []
//     }
//     const expeditionClick = () => {
//         if (game.expeditionStage === 4 && user.length >= 7) {
//             if (game.vote.filter(element => 'fail' === element).length >= 2) {
//                 game.takeStage[game.expeditionStage] = 'fail';
//             } else {
//                 game.takeStage[game.expeditionStage] = 'success'
//             }
//         } else {
//             game.vote.includes('fail') ?
//                 game.takeStage[game.expeditionStage] = 'fail' :
//                 game.takeStage[game.expeditionStage] = 'success'
//         }
//         game.expeditionStage += 1;
//     }
// }
//
// export const gameStart = ({UserState}) => {
//     const user = UserState.takeStage
//     switch (user.length) {
//         case 5 :
//             game.takeStage = needPlayers._5P;
//             break;
//         case 6:
//             game.takeStage = needPlayers._6P;
//             break;
//         case 7:
//             game.takeStage = needPlayers._7P;
//             break;
//         case 8:
//         case 9:
//         case 10:
//             game.takeStage = needPlayers._8to10P;
//             break;
//         default:
//             alert('error');
//
//     }
//     const PlayersNumber = user.length;
//     if (PlayersNumber >= 5) {
//         const temp = [
//             ...mustHaveRoles,
//             ...expandRoles.slice(0, PlayersNumber - 5),
//         ];
//         const roles = shuffle(temp);
//         // eslint-disable-next-line array-callback-return
//         user.map((user, index) => {
//             user.role = roles[index];
//         });
//         setPage(MAIN_FRAME)
//     } else {
//         alert('error')
//     }
// };
//
// //     if (page === START_FRAME) {
// //         switch (user.length) {
// //             case 5 :
// //                 game.takeStage = needPlayers._5P;
// //                 break;
// //             case 6:
// //                 game.takeStage = needPlayers._6P;
// //                 break;
// //             case 7:
// //                 game.takeStage = needPlayers._7P;
// //                 break;
// //             case 8:
// //             case 9:
// //             case 10:
// //                 game.takeStage = needPlayers._8to10P;
// //                 break;
// //             default:
// //                 alert('error');
// //         }
// //         const onClick = () => {
// //             const PlayersNumber = user.length;
// //             if (PlayersNumber >= 5) {
// //                 const temp = [
// //                     ...mustHaveRoles,
// //                     ...expandRoles.slice(0, PlayersNumber - 5),
// //                 ];
// //                 const roles = shuffle(temp);
// //                 // eslint-disable-next-line array-callback-return
// //                 user.map((user, index) => {
// //                     user.role = roles[index];
// //                 });
// //                 setPage(MAIN_FRAME)
// //             } else {
// //                 alert('error')
// //             }
// //         };
// //         return (
// //             <button onClick={onClick}>게임 시작</button>
// //         )
// //     }
// //     if (page === MAIN_SELECT_PLAYER) {
// //         return (
// //             <div>
// //                 <h3>{"원정에 참여하는 인원 수 : " + game.takeStage[game.expeditionStage] + "명"}</h3>
// //                 {user.map((user, index) => (
// //                     <ul key={index}>
// //                         <label>{user.nickname}
// //                             <input
// //                                 onChange={voteOnChange}
// //                                 type="checkbox"
// //                                 name={'checkbox'}
// //                                 value={index}/>
// //                         </label>
// //                     </ul>
// //                 ))}
// //                 <button onClick={voteOnClick}>결정</button>
// //             </div>
// //         )
// //     }
// //     if (page === MAIN_FRAME) {
// //         const colors = voteStageColor.slice(game.voteStage, 5);
// //         return (
// //             <>
// //                 <div>Main</div>
// //                 <PublicFrame>
// //                     {
// //                         game.takeStage.map((stage, index) => (
// //                             <Frame key={index}>
// //                                 <h3>{stage}</h3>
// //                             </Frame>
// //                         ))
// //                     }
// //                 </PublicFrame>
// //                 <VoteStageFrame>
// //                     {
// //                         colors.map((color, index) => (
// //                             <Circle color={color} key={index}/>
// //                         ))
// //                     }
// //                 </VoteStageFrame>
// //                 <PublicFrame>
// //                     {
// //                         user.map((user, index) => (
// //                             <User key={index}>
// //                                 <ul>
// //                                     <li>{`nickname : ${user.nickname}`}</li>
// //                                     <li>{`role : ${user.role}`}</li>
// //                                     <br/>
// //                                     {user.role === 'Merlin' ?
// //                                         <MerlinPlayer index={index}/> : null
// //                                     }
// //                                     {user.role === 'Percival' ?
// //                                         <PercivalPlayer index={index}/> : null
// //                                     }
// //                                 </ul>
// //                                 {index === game.represent ?
// //                                     <button onClick={() => setPage(MAIN_SELECT_PLAYER)}>원정 인원 정하기</button> : null}
// //                             </User>
// //                         ))
// //                     }
// //                 </PublicFrame>
// //             </>
// //         );
// //     }
// //     if (page === VOTE_RESULT) {
// //         return (
// //             <div>
// //                 {user.map((user, index) => (
// //                     <ul key={index}>
// //                         <li>{`nickname : ${user.nickname}`}</li>
// //                         <li>{`vote : ${user.toGo === 'agree' ? '찬성' : '반대'}`}</li>
// //                     </ul>
// //                 ))}
// //                 <button onClick={() => ((votePage)(setPage(EXPEDITION_FRAME)))}>다음</button>
// //             </div>
// //         )
// //     }
// //     if (page === VOTE_FRAME) {
// //         return (
// //             <>
// //                 <div>VOTE</div>
// //                 <div>
// //                     <Title>
// //                         {user.map((user, index) => <Vote key={index} index={index}/>)}
// //                     </Title>
// //                     <button onClick={() => setPage(VOTE_RESULT)}>결과</button>
// //                 </div>
// //
// //             </>
// //         );
// //     }
// //     if (page === EXPEDITION_RESULT) {
// //         return (
// //             <div>
// //                 <div>
// //                     {
// //                         game.expeditionStage === 4 && user.length >= 7 ?
// //                             <div>
// //                                 {game.vote.filter(element => 'fail' === element).length >= 2 ? '원정 실패' : '원정 성공'}
// //                                 <div>성공 개수 : {game.vote.filter(element => 'success' === element).length}</div>
// //                                 <div>실패 개수 :{game.vote.filter(element => 'fail' === element).length}</div>
// //                             </div> :
// //                             <div>
// //                                 {game.vote.includes('fail') ? '원정 실패' : '원정 성공'}
// //                                 <div>성공 개수 : {game.vote.filter(element => 'success' === element).length}</div>
// //                                 <div>실패 개수 :{game.vote.filter(element => 'fail' === element).length}</div>
// //                             </div>
// //                     }
// //                 </div>
// //                 <button onClick={() => ((nextPage)(setPage(MAIN_FRAME)))}>다음</button>
// //             </div>
// //         )
// //     }
// //     if (page === EXPEDITION_FRAME) {
// //
// //         return (
// //             <>
// //                 <div>
// //                     {
// //                         user.map((user, index) => (
// //                             <ul key={index}>
// //                                 {user.selected ?
// //                                     <div>
// //                                         <li>{user.nickname}</li>
// //                                         {angels.includes(user.role) ?
// //                                             <AngelsVote value={index}/>
// //                                             :
// //                                             <EvilsVote value={index}/>}
// //                                     </div>
// //                                     : null}
// //                                 {user.selected = false}
// //                             </ul>
// //                         ))
// //                     }
// //                     <button onClick={() => ((expeditionClick))(setPage(EXPEDITION_RESULT))}>Click
// //                     </button>
// //                 </div>
// //             </>
// //         );
// //     }
// //     if (page === ASSASSIN_FRAME) {
// //         const onChange = e => {
// //             setKill(e.target.value)
// //         }
// //         const killPlayer = () => {
// //             const winner = kill === 'Merlin' ? '악의 승리' : '선의 승리'
// //             setWinner(winner)
// //             setPage(END_GAME_FRAME)
// //         }
// //         return (
// //             <>
// //                 <h3>ASSASSIN</h3>
// //                 {user.map((user, index) => (
// //                     <label key={index}>
// //                         {user.nickname}
// //                         <input type="radio"
// //                                name={'vote'}
// //                                value={user.role}
// //                                onChange={onChange}
// //                         />
// //                         <br/>
// //                     </label>
// //                 ))}
// //                 <button onClick={killPlayer}>kill</button>
// //             </>
// //         )
// //     }
// //     if (page === END_GAME_FRAME) {
// //         return (
// //             <>
// //                 <h1>{winner}</h1>
// //                 <h3>ENDGAME</h3>
// //                 <hr/>
// //                 {user.map((player, index) => (
// //                     <ul key={index}>
// //                         <p>player_nickname : <b>{player.nickname}</b></p>
// //                         <p>role : <b>{player.role}</b></p>
// //                         <hr/>
// //                     </ul>
// //                 ))}
// //             </>
// //         )
// //     }
// //     return (
// //         <div>
// //
// //         </div>
// //     )
// // }
//
// // export default AVALON_TEST
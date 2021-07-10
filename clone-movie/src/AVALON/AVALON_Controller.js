import shuffle from "lodash.shuffle";
import {expandRoles, mustHaveRoles, needPlayers} from "../AVALON_BACKUP/gameSetting";
import {useReducer} from "react";
import {func, Pages,initContext,reducer} from "./AVALON_BETA_Reducer";

export const GameStart = ({state}) => {
    const [state, dispatch] = useReducer(reducer, initContext)
    let takeStage = 0
    switch (state.playerData.length) {
        case 5 :
            takeStage = needPlayers._5P;
            break;
        case 6:
            takeStage = needPlayers._6P;
            break;
        case 7:
            takeStage = needPlayers._7P;
            break;
        case 8:
        case 9:
        case 10:
            takeStage = needPlayers._8to10P;
            break;
        default:
            alert('error');
    }
    const PlayersNumber = state.playerData.length;
    if (PlayersNumber >= 5) {
        const temp = [
            ...mustHaveRoles,
            ...expandRoles.slice(0, PlayersNumber - 5),
        ];
        const roles = shuffle(temp);
        const result = {takeStage: takeStage, roles: roles, setPage: Pages.MAIN_FRAME}
        dispatch({type: func.gameStart, result})
    } else {
        alert('error')
    }
};

export const VoteOnChange = e => {
    const [state, dispatch] = useReducer(reducer, initContext)
    user[e.target.value].selected = e.target.checked;
    e.target.checked ? setPlayerCount(playerCount + 1) : setPlayerCount(playerCount - 1);
}
export const voteOnClick = () => {
    if (playerCount === game.takeStage[game.expeditionStage]) {
        setVoteCount(voteCount + 1);
        setPlayerCount(0)
        setPage(VOTE_FRAME)
    } else {
        alert(`${game.takeStage[game.expeditionStage]}명을 선택해야합니다.`);
    }
}
export const votePage = () => {
    let agree = 0;
    let oppose = 0;
    user.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
    if (agree >= oppose) {
        game.voteStage = 0;
        setPage(EXPEDITION_FRAME)
    } else {
        if (game.voteStage === 4) {
            game.takeStage[game.expeditionStage] = 'fail';
            game.expeditionStage += 1;
            game.voteStage = 0;
        } else {
            game.voteStage += 1;
        }
        setPage(MAIN_FRAME)
    }
    game.represent += 1;
    game.represent %= user.length;
    nextPage()
}
export const nextPage = () => {
    const angelCount = game.takeStage.filter(element => 'success' === element).length;
    const evilCount = game.takeStage.filter(element => 'fail' === element).length;
    if (angelCount === 3) {
        setPage(ASSASSIN_FRAME)
    }
    if (evilCount === 3) {
        setWinner('EVILS_WIN')
        setPage(END_GAME_FRAME)
    }
    game.vote = []
}
export const expeditionClick = () => {
    if (game.expeditionStage === 4 && user.length >= 7) {
        if (game.vote.filter(element => 'fail' === element).length >= 2) {
            game.takeStage[game.expeditionStage] = 'fail';
        } else {
            game.takeStage[game.expeditionStage] = 'success'
        }
    } else {
        game.vote.includes('fail') ?
            game.takeStage[game.expeditionStage] = 'fail' :
            game.takeStage[game.expeditionStage] = 'success'
    }
    game.expeditionStage += 1;
}
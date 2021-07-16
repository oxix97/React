import {expandRoles, InitContext, mustHaveRoles, needPlayers} from "../gameSetting";
import shuffle from "lodash.shuffle";
import {MAIN_FRAME} from "../AVALON_TEST";
import {useContext} from "react";

function GameStart() {
    const user = useContext(InitContext).playerData
    const game = useContext(InitContext)
    switch (user.length) {
        case 5 :
            game.takeStage = needPlayers._5P;
            break;
        case 6:
            game.takeStage = needPlayers._6P;
            break;
        case 7:
            game.takeStage = needPlayers._7P;
            break;
        case 8:
        case 9:
        case 10:
            game.takeStage = needPlayers._8to10P;
            break;
        default:
            alert('error');
    }
    const playersNumber = user.length;
    if (playersNumber >= 5) {
        const temp = [
            ...mustHaveRoles,
            ...expandRoles.slice(0, playersNumber - 5),
        ];
        const roles = shuffle(temp);
        // eslint-disable-next-line array-callback-return
        user.map((user, index) => {
            user.role = roles[index];
        });
        setPage(MAIN_FRAME)
    } else {
        alert('error')
    }
}

export default GameStart
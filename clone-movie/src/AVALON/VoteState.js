import React from "react";
import {Players, Background, needPlayers} from "./gameSetting";

function VoteState() {
    const playerCounter = () => {
        let temp = [];
        switch (Players.length) {
            case 5 :
                temp = needPlayers._5P;
                break;
            case 6:
                temp = needPlayers._6P;
                break;
            case 7:
                temp = needPlayers._7P;
                break;
            case 8:
            case 9:
            case 10:
                temp = needPlayers._8to10P;
                break;
            default:
                alert('error');
        }
    }

    return (
        <div>

        </div>
    )
}

export default VoteState
import React, {StrictMode, useContext, useState} from "react";
import {GameContext} from "../Store";
import Card_Flip from "../animation/Card_Flip";
import * as S from "../Styled";
import {FrontImg} from "../Styled";
import {animated, useSpring, config} from "react-spring";
import styled from "styled-components";

const AnimatedPokerFront = animated(S.PokerFront);
const AnimatedPokerBack = animated(S.PokerBack);

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

function END_GAME_FRAME() {
    const {gameState} = useContext(GameContext);
    const [isFlipped, setIsFlipped] = useState(false);
    const {opacity, transform} = useSpring({
        opacity: isFlipped ? 1 : 0,
        transform: `rotateY(${isFlipped ? 0 : 180}deg)`,
        config: config.stiff,
    });
    const flip = () => setIsFlipped((prevState) => !prevState);
    return (
        <>
            <h1>{gameState.winner}</h1>
            <h3>ENDGAME</h3>
            <hr/>
            {gameState.usingPlayers.map((player, index) => (
                <ul key={index}>
                    <Box>
                        player_nickname : <b>{player.nickname}</b>
                        <Card_Flip nickname={player.nickname} role={player.role}/>
                    </Box>
                </ul>
            ))}
        </>
    );
}

export default END_GAME_FRAME;

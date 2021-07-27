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
    justify-content : flex-start;
    flex-direction: row;
    margin : 200px 30px 30px 100px;
    
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
        <div>
            <h1>{gameState.winner}</h1>
            <Box>
            {gameState.usingPlayers.map((player, index) => (
                <div key={index}>
                    <br/>
                    <div>
                        <Card_Flip nickname={player.nickname} role={player.role}/>
                    </div>
                </div>
            ))}
            </Box>    
        </div>
    
    );
}

export default END_GAME_FRAME;

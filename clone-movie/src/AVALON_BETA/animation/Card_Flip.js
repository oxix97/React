import React, { useState } from "react";
import { animated, useSpring, config } from "react-spring";

import * as S from "../Styled";
import { FrontImg } from "../Styled";

const AnimatedPokerFront = animated(S.PokerFront);
const AnimatedPokerBack = animated(S.PokerBack);

export default function Card_Flip(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  console.log(props.role);
  const { opacity, transform } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `rotateY(${isFlipped ? 0 : 180}deg)`,
    config: config.stiff,
  });
  const flip = () => setIsFlipped((prevState) => !prevState);

  return (
    <React.Fragment>
      <S.CardWrapper onClick={flip}>
        <S.NicknameTag>{props.nickname}</S.NicknameTag>
        <AnimatedPokerBack
          style={{
            opacity: opacity.interpolate((o) => 1 - o),
            transform: transform.interpolate(
              (t) => `perspective(400px)  ${t} rotateY(180deg)`
            ),
          }}
        />
        <AnimatedPokerFront style={{ opacity, transform }}>
          {props.role === "Morgana" && (
            <FrontImg src={"/img/Morgana.png"} alt={"Morgana"} />
          )}
          {props.role === "Assassin" && (
            <FrontImg src={"/img/Assassin.png"} alt={"Assassin"} />
          )}
          {props.role === "Percival" && (
            <FrontImg src={"/img/Percival.png"} alt={"Percival"} />
          )}
          {props.role === "Merlin" && (
            <FrontImg src={"/img/Merlin.png"} alt={"Merlin"} />
          )}
          {props.role === "Citizen" && (
            <FrontImg src={"/img/Citizen.png"} alt={"Citizen"} />
          )}
          {props.role === "Modred" && (
            <FrontImg src={"/img/Modred.png"} alt={"Modred"} />
          )}
          {props.role === "Heresy" && (
            <FrontImg src={"/img/Heresy.png"} alt={"Heresy"} />
          )}
        </AnimatedPokerFront>
      </S.CardWrapper>
    </React.Fragment>
  );
}

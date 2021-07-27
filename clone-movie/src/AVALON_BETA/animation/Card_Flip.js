import React, { useState } from "react";
import { animated, useSpring, config } from "react-spring";

import * as S from "../Styled";
import { FrontImg } from "../Styled";
import { A } from "react-select/dist/index-4bd03571.esm";

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
    <div>
      <S.CardWrapper onClick={flip}>
        <h2>{props.nickname}</h2>
        <AnimatedPokerBack
          style={{
            opacity: opacity.interpolate((o) => 1 - o),
            transform: transform.interpolate(
              (t) => `perspective(500px)  ${t} rotateY(180deg)`
            ),
          }}
        />
        <AnimatedPokerFront style={{ opacity, transform }}>
          {props.role === "Morgana" && (
            <FrontImg src={"/img/Morgana.png"} alt={"Morgana"} />
          )}
          {props.role === "Assassin" && (
            <FrontImg src={"/img/Assassin.png"} alt={"Heresy"} />
          )}
        </AnimatedPokerFront>
      </S.CardWrapper>
    </div>
  );
}

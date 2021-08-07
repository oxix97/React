import React, { useState } from "react";
import { animated, useSpring, config } from "react-spring";
import * as S from "../Styled";
import PlayerRoles from "./PlayerRoles";

const AnimatedPokerFront = animated(S.PokerFront);
const AnimatedPokerBack = animated(S.PokerBack);

export default function CardFlip(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  console.log(props.role);
  const { opacity, transform } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `rotateY(${isFlipped ? 0 : 180}deg)`,
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
              (t) => `perspective(500px)  ${t} rotateY(180deg)`
            ),
          }}
        />
        <AnimatedPokerFront style={{ opacity, transform }}>
          <PlayerRoles role={props.role} />
        </AnimatedPokerFront>
      </S.CardWrapper>
    </React.Fragment>
  );
}

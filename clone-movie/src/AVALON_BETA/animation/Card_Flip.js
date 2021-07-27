import React, { useState } from 'react'
import { animated, useSpring, config } from 'react-spring'

import * as S from '../Styled'

const AnimatedPokerFront = animated(S.PokerFront)
const AnimatedPokerBack = animated(S.PokerBack)

export default function Card_Flip() {
    const [isFlipped, setIsFlipped] = useState(false)

    const { opacity, transform } = useSpring({
        opacity: isFlipped ? 1 : 0,
        transform: `rotateY(${isFlipped ? 0 : 180}deg)`,
        config: config.stiff,
    })

    const flip = () => setIsFlipped((prevState) => !prevState)

    return (
        <S.Container>
            <S.CardWrapper onClick={flip}>
                <AnimatedPokerBack
                    style={{
                        opacity: opacity.interpolate((o) => 1 - o),
                        transform: transform.interpolate(
                            (t) => `perspective(400px)  ${t} rotateY(180deg)`
                        ),
                    }}
                />
                <AnimatedPokerFront style={{ opacity, transform }}>
                <span>A</span>
                <span>❤</span>
                <span>A</span>
            </AnimatedPokerFront>
            </S.CardWrapper>
        </S.Container>
    )
}
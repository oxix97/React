import React, { Fragment, useState, useEffect, useContext } from "react";

import { TimerData,GameContext } from './Store'
const Timer = () => {
    const { gameState } = useContext(GameContext)
    const [minutes, setMinutes]=useState(3);
    const [seconds,setSeconds]=useState(0);
    const state = useContext(TimerData)

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            else if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    state.timeOver()
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    useEffect(() => {
        setMinutes(3)
        setSeconds(0)
    }, [gameState.component])

    return (
        <TimerData>
           <Fragment>
                    <div>남은 시간 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
                </Fragment>
        </TimerData>
    )
}
export default Timer;
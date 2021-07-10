import React, {useContext} from "react";
import {Frame, PublicFrame} from "../../MainPage/Styled";
import {initContext} from "../../AVALON_Reducer";

function TakeStage() {
    const game = useContext(initContext)
    return(
        <PublicFrame>
            {
                game.takeStage.map((stage, index) => (
                    <Frame key={index}>
                        <h3>{stage}</h3>
                    </Frame>
                ))
            }
        </PublicFrame>
    )
}
export default TakeStage
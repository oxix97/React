import React from "react";
import {Game} from "../meetingFrame/Users";
import styled from "styled-components";
import ReportUser from "./ReportUser";
import DoctorUser from "./DoctorUser";
import PoliceUser from "./PoliceUser";
import MafiaUser from "./MafiaUser";
import ThiefUser from "./ThiefUser";

export const HDisplay = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
export const Frame = styled.div`
    border : 5px solid green;
    margin : 3%;
    padding : 50px;
`
export const WDisplay = styled.div`
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    border : 5px solid black;

`

function Night({history}) {
    return (
        <>
            <HDisplay>
                <WDisplay>
                        {
                        Game.users.map((user, index) => (
                            <ul key={index}>
                                <li>{`nickname : ${user.nickname}`}</li>
                                <li>{`role : ${user.role}`}</li>
                                <li>{`life : ${user.life}`}</li>
                                <li>{`skill : ${user.skill}`}</li>
                            </ul>
                        ))
                    }
                </WDisplay>
                <HDisplay>
                    <Frame>
                        <h3>Reporter Frame</h3>
                        <ReportUser/>
                    </Frame>
                    <Frame>
                        <h3>Doctor Frame</h3>
                        <DoctorUser/>
                    </Frame>
                    <Frame>
                        <h3>Police Frame</h3>
                        <PoliceUser/>
                    </Frame>
                    <Frame>
                        <h3>Mafia Frame</h3>
                        <MafiaUser/>
                    </Frame>

                    <Frame>
                        <h3>Thief Frame</h3>
                        <ThiefUser/>
                    </Frame>
                </HDisplay>
            </HDisplay>
            <button onClick={() => history.push({
                pathname : '/nightResult'
            })}>결과</button>
        </>
    );
}

export default Night
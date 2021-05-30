import React from "react";
import {Users} from "../meetingFrame/Users";
import styled from "styled-components";
import ReportUser from "./ReportUser";
import DoctorUser from "./DoctorUser";
import PoliceUser from "./PoliceUser";

const HDisplay = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
const Frame = styled.div`
    border : 5px solid green;
    margin : 3%;
    padding : 50px;
`
const WDisplay = styled.div`
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    border : 5px solid black;

`

function Night() {
    return (
        <HDisplay>
            <WDisplay>{
                Users.map((user, index) => (
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
                    <h3>Thief</h3>
                </Frame>
                <Frame>
                    <h3>Mafia</h3>
                </Frame>
            </HDisplay>
        </HDisplay>

    )
};

export default Night
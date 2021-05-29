import React from "react";
import styled from "styled-components";
import ReportUser from "./ReportUser";
import DoctorUser from "./DoctorUser";
import PoliceUser from "./PoliceUser";

const Display = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
const Frame = styled.div`
    border : 5px solid green;
    margin : 3%;
    padding : 50px;
`

function Night() {
    return (
        <Display>
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
                <h3>Gangster</h3>
            </Frame>
            <Frame>
                <h3>Mafia</h3>
            </Frame>
        </Display>

    )
};

export default Night
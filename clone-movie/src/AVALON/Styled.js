import styled from "styled-components";

export const PageFrame = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : flex-start;
`
export const Title = styled.div`
    display : flex;
    flex-direction : row;
    border : 5px solid black;
`
export const Frame = styled.div`
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    border : 5px solid ${props => props.color};
    margin : 15px auto;
    padding : 40px;
`
export const RoleList = styled.div`
    display : flex;
    flex-wrap : wrap;
    flex-direction : column;
`
export const UserList = styled.div`
    display : flex;
    flex-direction : row;
`
export const GameFrame = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    padding : 50px;
`
export const GameState = styled.div`
    display : flex;
    width : 70%;
    flex-direction : column;
    border : 5px solid black;
`
export const PublicFrame = styled.div`
    display : flex;
    flex-direction : column;
    border : 3px solid blue;   
`
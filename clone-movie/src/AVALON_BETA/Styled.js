import styled from "styled-components";

export const PageFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.color};
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  border: 5px solid black;
`;
export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 5px solid ${(props) => props.color};
  margin: 15px auto;
  padding: 40px;
`;
export const RoleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const UserList = styled.div`
  display: flex;
  flex-direction: row;
`;
export const GameFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;
`;
export const GameState = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  border: 5px solid black;
`;
export const PublicFrame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Circle = styled.div`
  display: flex;
  border-radius: 70%;
  flex-direction: flex-end;
  flex-wrap: wrap;
  padding: 20px;
  border: 2px solid black;
  background: ${(props) => props.color};
`;
export const VoteStageFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const User = styled.div`
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    margin : 0 auto;
    border 3px solid black;
    padding : 5px;
`;
export const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
// export const Container = styled.div`
//   position: fixed;
//   top: 10;
//   left: 10;
//   width: 100%;
//   height: 100%;
//   background-color: #042813;
//   background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
// `;

const Card = styled.div`
  width: 250px;
  height: 450px;
`;

export const CardWrapper = styled(Card)`
  /* position: fixed; */
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

export const PokerCard = styled(Card)`
  position: absolute;
  border-radius: 5px;
  margin-left : 20px;
  box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75);
`;

export const PokerBack = styled(PokerCard)`
  background-color: #ffffff;
  opacity: 0.8;
  background-color: #f3f3f4;
  opacity: 1;
  background-image: linear-gradient(135deg, #a90c08 25%, transparent 25%),
  linear-gradient(225deg, #a90c08 25%, transparent 25%),
  linear-gradient(45deg, #a90c08 25%, transparent 25%),
  linear-gradient(315deg, #a90c08 25%, #f3f3f4 25%);
  background-position: 20px 0, 20px 0, 0 0, 0 0;
  background-size: 20px 20px;
  background-repeat: repeat;
  border: 5px solid #fff;
`;
// Poker card in front-side
export const PokerFront = styled(PokerCard)`
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
  background-color: #ffffff;
`;
export const FrontImg = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const NicknameTag = styled.div`
  font-size: 24px;
  margin: 50px 0 0 100px;
`;

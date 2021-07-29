import styled, {createGlobalStyle, keyframes} from "styled-components";

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
export const Stage = styled.div`
  display: flex;
  width: auto;
  height: auto;
  border-radius: 70%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  margin: 30px;
  border: 2px solid black;
`;
export const VoteFrame = styled.div`
  display: flex;
  flex-direction: row;
`
export const PlayerFrame = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`
export const Players = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  border: 3px solid black;
  padding: 5px;
`
export const Info = styled.div`

`
export const StageFrame = styled.div`
  display: flex;
  flex-direction: row;
`
// display: flex;
// flex-direction: row;
// flex-wrap: wrap;
// border: 2px solid black;
// margin: 15px;
// border-radius: 70%;
// padding: 60px;

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
  flex-direction: column;
  justify-content: space-between;
`;
export const GameState = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  border: 5px solid black;
`;
export const GlobalStyle = createGlobalStyle`
  head,body{
    margin : 0;
    padding :0;
    background-color: dimgray;
    background-image: url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png');
  }
  div{
    color: white;
  }
`

export const PublicFrame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  flex-direction: row;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Circle = styled.div`
  display: flex;
  width: auto;
  height: auto;
  border-radius: 70%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 60px;
  margin-left: 15px;
  border: 2px solid black;
  background: ${(props) => props.color};
`;
export const VoteStageFrame = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const User = styled.div`

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
  margin-left: 20px;
  box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75);
`;

export const PokerBack = styled(PokerCard)`
  //background-color: #ffffff;
  //opacity: 0.8;
  //background-color: #f3f3f4;
  //opacity: 1;
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
const walking = keyframes`
   to{
        background-position: 100% 0;
   }
`
const stroll = keyframes`
     from{
        transform: translateX(-200%);
    }
    to{
        transform: translateX(300%);
    }
`;
export const WalkContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 20%;
    padding-bottom: 30%;
    vertical-align: middle;
    overflow: hidden;
    animation: ${stroll} 5s linear infinite;
`
export const Walk = styled.div`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/walk-sequence.svg);
    background-repeat: no-repeat;
    background-size: 800%;
    animation:${walking} 1s infinite steps(7);
`
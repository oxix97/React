import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import StyledButton from "./styled-component/StyledButton";

class App extends Component {

  render() {
    return (
        <div>
          <StyledButton>
            버튼
          </StyledButton>
        </div>
    )
  }
}

// const Button = styled.button`
// 	border-radius: 50px;
//     padding: 5px;
//     min-width: 120px;
//     color: white;
//     font-weight: 600;
//     -webkit-appearance: none;
//     cursor: pointer;
//     &:active,
//     &:focus {
//       outline: none;
//     }
//     background-color: ${props => (props.danger ? 'red' : 'purple')}
// `;
//
export default App;

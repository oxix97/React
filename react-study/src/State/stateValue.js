import React, {useState} from "react";
import styled from "styled-components";

const ResultButton = styled.input`
    border : 0;
    width : 100%;
    font-size : 14px;
    padding : 5px;
    background-color : ${props => props.color};
    color : white;
`

const StateValue = () => {

    // const [value, setValue] = useState(0);
    const [text, setText] = useState('');
    const Change = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <div>
                <p>text : {text}</p>
            </div>
            <div>
                <input type="text" value={text} onChange={Change}/>
                {/*<ResultButton type={'submit'}>asdfads</ResultButton>*/}
            </div>
        </div>
    );
}
export default StateValue;